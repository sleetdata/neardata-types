import { neardata_block_response_interface_z_const } from "../src/index";
// ===========================================
const STREAM_URL = process.env.NEAR_STREAM_URL ?? "";
console.log("Connecting to:", STREAM_URL);
// ===========================================
export async function streamBlocks() {
  const res = await fetch(STREAM_URL, {
    headers: {
      Accept: "text/event-stream",
    },
  });

  if (!res.ok || !res.body) {
    throw new Error(`Failed to connect: ${res.status}`);
  }

  const reader = res.body.getReader();
  const decoder = new TextDecoder();

  let buffer = "";

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });

    // SSE messages end with double newline
    const parts = buffer.split("\n\n");
    buffer = parts.pop() || "";

    for (const part of parts) {
      if (!part.startsWith("data:")) continue;

      const jsonStr = part.replace("data:", "").trim();

      try {
        const parsed = JSON.parse(jsonStr);
        const block = neardata_block_response_interface_z_const.parse(parsed);
        console.log("===========================================");
        console.log("✓ Validation successful!");
        console.log(`  Block height: ${block.block.header.height}`);
        console.log(`  Author: ${block.block.author}`);
        console.log(`  Hash: ${block.block.header.hash}`);
        console.log(`  Shards: ${block.shards.length}`);
        console.log("===========================================");
      } catch (err) {
        console.error("❌ Invalid block message:", err);
      }
    }
  }
}
// ===========================================
if (import.meta.main) {
  streamBlocks().catch((err) => {
    console.error("Stream error:", err);
  });
}