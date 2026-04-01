import { z } from "zod";
import type {
  neardata_block_response_interface,
  neardata_block_interface,
  neardata_block_header_interface,
} from "../interface/block_response";
import { neardata_block_chunks_interface_Z_CONST } from "./block_response_block_chunks";
import { neardata_shard_interface_Z_CONST } from "./block_response_shards";

// ===========================================
// ==== neardata_block_response_interface ====
export const neardata_block_response_interface_Z_CONST = z.object({
  block: z.lazy(() => neardata_block_interface_Z_CONST),
  shards: z.array(neardata_shard_interface_Z_CONST),
}) satisfies z.ZodType<neardata_block_response_interface>;

// ===========================================
export const neardata_block_interface_Z_CONST = z.object({
  author: z.string(),
  header: z.lazy(() => neardata_block_header_interface_Z_CONST),
  chunks: z.array(neardata_block_chunks_interface_Z_CONST),
}) satisfies z.ZodType<neardata_block_interface>;

export const neardata_block_header_interface_Z_CONST = z.object({
  height: z.number(),
  prev_height: z.number(),
  epoch_id: z.string(),
  next_epoch_id: z.string(),
  hash: z.string(),
  prev_hash: z.string(),
  prev_state_root: z.string(),
  block_body_hash: z.string(),
  chunk_receipts_root: z.string(),
  chunk_headers_root: z.string(),
  chunk_tx_root: z.string(),
  outcome_root: z.string(),
  chunks_included: z.number(),
  challenges_root: z.string(),
  timestamp: z.number(),
  timestamp_nanosec: z.string(),
  random_value: z.string(),
  validator_proposals: z.array(z.any()),
  chunk_mask: z.array(z.boolean()),
  gas_price: z.string(),
  block_ordinal: z.number(),
  rent_paid: z.string(),
  validator_reward: z.string(),
  total_supply: z.string(),
  challenges_result: z.array(z.any()),
  last_final_block: z.string(),
  last_ds_final_block: z.string(),
  next_bp_hash: z.string(),
  block_merkle_root: z.string(),
  epoch_sync_data_hash: z.string().nullable(),
  approvals: z.array(z.string().nullable()),
  signature: z.string(),
  latest_protocol_version: z.number(),
  chunk_endorsements: z.array(z.array(z.number())),
}) satisfies z.ZodType<neardata_block_header_interface>;

// ==============================================
// copyright 2025 by sleet.near
