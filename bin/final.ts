import { neardata_block_response_interface_Z_CONST } from "../src/index";
// ===========================================
const NEARDATA_URL = "https://mainnet.neardata.xyz/v0/last_block/final";
// ===========================================
async function validate_final_block() {
  const res = await fetch(NEARDATA_URL);
  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
  }

  const json = await res.json();

  // Validate and parse
  const validated = neardata_block_response_interface_Z_CONST.parse(json);

  console.log("===========================================");
  console.log("✓ Validation successful!");
  console.log(`  Block height: ${validated.block.header.height}`);
  console.log(`  Author: ${validated.block.author}`);
  console.log(`  Hash: ${validated.block.header.hash}`);
  console.log(`  Shards: ${validated.shards.length}`);
  console.log("===========================================");

  // Output JSON for type analysis
  console.log("\n=== RAW JSON FOR TYPE ANALYSIS ===");
  console.log(JSON.stringify(json, null, 2));

  return validated;
}
// ===========================================
await validate_final_block();
