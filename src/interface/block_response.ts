// Block-related types for the NEAR blockchain
import type { neardata_block_chunks_interface } from "./block_response_block_chunks";
import type { neardata_shard_interface } from "./block_response_shards";
// ===========================================
// ==== neardata_block_response_interface ====
export interface neardata_block_response_interface {
  block: neardata_block_interface;
  shards: neardata_shard_interface[];
}
// ===========================================
// ===========================================
export interface neardata_block_interface {
  author: string;
  header: neardata_block_header_interface;
  chunks: neardata_block_chunks_interface[];
}
// ===========================================
export interface neardata_block_header_interface {
  height: number;
  prev_height: number;
  epoch_id: string;
  next_epoch_id: string;
  hash: string;
  prev_hash: string;
  prev_state_root: string;
  block_body_hash: string;
  chunk_receipts_root: string;
  chunk_headers_root: string;
  chunk_tx_root: string;
  outcome_root: string;
  chunks_included: number;
  challenges_root: string;
  timestamp: number;
  timestamp_nanosec: string;
  random_value: string;
  validator_proposals: any[];
  chunk_mask: boolean[];
  gas_price: string;
  block_ordinal: number;
  rent_paid: string;
  validator_reward: string;
  total_supply: string;
  challenges_result: any[];
  last_final_block: string;
  last_ds_final_block: string;
  next_bp_hash: string;
  block_merkle_root: string;
  epoch_sync_data_hash: string | null;
  approvals: (string | null)[];
  signature: string;
  latest_protocol_version: number;
  chunk_endorsements: number[][];
}
// ==============================================
// copyright 2025 by sleet.near
