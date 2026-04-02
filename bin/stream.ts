import { neardata_block_response_interface_z_const } from "../src/index.ts";
import { EventSource } from "eventsource";
import { $ } from "bun";

// ===========================================
// NEAR Stream SSE Client
// Connects to a near-stream server and validates blocks using neardata-types
// ===========================================
const NEAR_STREAM_URL = Bun.env.NEAR_STREAM_URL || "http://localhost:8080";
const ERRORS_DIR = "./tmp/errors";
// ===========================================

async function log_error(error: unknown, context: string): Promise<void> {
  await $`mkdir -p ${ERRORS_DIR}`;

  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const filename = `error_${timestamp}.json`;
  const filepath = `${ERRORS_DIR}/${filename}`;

  const error_log = {
    timestamp,
    context,
    error: error instanceof Error ? { name: error.name, message: error.message, stack: error.stack } : String(error),
  };

  await Bun.write(filepath, JSON.stringify(error_log, null, 2));
}

async function stream_blocks(): Promise<void> {
  return new Promise((resolve) => {
    const es = new EventSource(NEAR_STREAM_URL);

    es.addEventListener("block", async (event) => {
      try {
        const json: unknown = JSON.parse(event.data);

        // Validate with Zod schema
        const validated = neardata_block_response_interface_z_const.parse(json);

        console.log("===========================================");
        console.log(`✓ Block #${validated.block.header.height}`);
        console.log(`  Author: ${validated.block.author}`);
        console.log(`  Hash: ${validated.block.header.hash}`);
        console.log(`  Prev: ${validated.block.header.prev_hash}`);
        console.log(`  Timestamp: ${validated.block.header.timestamp}`);
        console.log(`  Shards: ${validated.shards.length}`);
        console.log("===========================================");
      } catch (err) {
        await log_error(err, "block_validation");
        // Continue running - don't reject or close
      }
    });

    es.addEventListener("ping", () => {
      console.log("♥ Ping");
    });

    es.onerror = async (err) => {
      await log_error(err, "connection_error");
      // Continue running - don't reject or close
    };

    es.onopen = () => {
      console.log("✓ Connected to stream");
    };
  });
}

// ===========================================
await stream_blocks();
