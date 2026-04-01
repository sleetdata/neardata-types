import { neardata_block_response_interface_z_const } from "../src/index.ts";
import { EventSource } from "eventsource";
// ===========================================
// NEAR Stream SSE Client
// Connects to a near-stream server and validates blocks using neardata-types
// ===========================================
const NEAR_STREAM_URL = Bun.env.NEAR_STREAM_URL || "http://localhost:8080";
// ===========================================
async function stream_blocks(): Promise<void> {
  return new Promise((resolve, reject) => {
    console.log("===========================================");
    console.log(`Connecting to NEAR Stream: ${NEAR_STREAM_URL}`);
    console.log("Stops on first validation error");
    console.log("===========================================");

    const es = new EventSource(NEAR_STREAM_URL);

    es.addEventListener("block", (event) => {
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
        console.error("\n===========================================");
        console.error("✗ VALIDATION FAILED - Stopping stream");
        console.error("===========================================");
        console.error(err);
        console.error("\n=== RAW DATA FOR TYPE ANALYSIS ===");
        console.log(event.data);
        console.error("\n===========================================");
        es.close();
        reject(err);
      }
    });

    es.addEventListener("ping", () => {
      console.log("♥ Ping");
    });

    es.onerror = (err) => {
      console.error(`✗ Connection error: ${err}`);
      es.close();
      reject(err);
    };

    es.onopen = () => {
      console.log("✓ Connected to stream");
    };
  });
}
// ===========================================
// ===========================================
await stream_blocks();
