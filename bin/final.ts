import { neardata_block_response_interface_Z_CONST } from "../src/index";
// ===========================================
async function validate_final_block() {
  const res = await fetch(`https://mainnet.neardata.xyz/v0/last_block/final
`);
  const json = await res.json();
  console.log("===========================================")
  console.log("RAW JSON:", json)
  console.log("===========================================")
  // Throws if invalid
  return neardata_block_response_interface_Z_CONST.parse(json);
}
// ===========================================
await validate_final_block();
