import { neardata_block_response_interface_z_const } from "../src/index";

// ===========================================
const NEARDATA_URL = "https://mainnet.neardata.xyz/v0/last_block/final";
const FINAL_JSON_PATH = "./tmp/final.json";
// ===========================================

async function validate_final_block() {
  const res = await fetch(NEARDATA_URL);
  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
  }

  const json = await res.json();

  // Validate and parse
  const validated = neardata_block_response_interface_z_const.parse(json);

  // Write to final.json
  const output = {
    validation_status: "success",
    block_height: validated.block.header.height,
    author: validated.block.author,
    hash: validated.block.header.hash,
    shards_count: validated.shards.length,
    raw_data: json,
  };

  await Bun.write(FINAL_JSON_PATH, JSON.stringify(output, null, 2));

  return validated;
}

// ===========================================
await validate_final_block();
