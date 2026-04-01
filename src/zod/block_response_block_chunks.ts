import { z } from "zod";
import type { neardata_block_chunks_interface } from "../interface/block_response_block_chunks";

// ===========================================
// ==== neardata_block_chunks_interface ====

export const neardata_block_chunks_interface_z_const = z.object({
  chunk_hash: z.string(),
  prev_block_hash: z.string(),
  outcome_root: z.string(),
  prev_state_root: z.string(),
  encoded_merkle_root: z.string(),
  encoded_length: z.number(),
  height_created: z.number(),
  height_included: z.number(),
  shard_id: z.number(),
  gas_used: z.number(),
  gas_limit: z.number(),
  rent_paid: z.string(),
  validator_reward: z.string(),
  balance_burnt: z.string(),
  outgoing_receipts_root: z.string(),
  tx_root: z.string(),
  validator_proposals: z.array(z.any()),
  congestion_info: z.any(),
  bandwidth_requests: z.any(),
  signature: z.string(),
}) satisfies z.ZodType<neardata_block_chunks_interface>;

// ==============================================
// copyright 2025 by sleet.near
