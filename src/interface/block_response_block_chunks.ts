// ===========================================
// ==== neardata_block_chunks_interface ====

export interface neardata_block_chunks_interface {
  chunk_hash: string;
  prev_block_hash: string;
  outcome_root: string;
  prev_state_root: string;
  encoded_merkle_root: string;
  encoded_length: number;
  height_created: number;
  height_included: number;
  shard_id: number;
  gas_used: number;
  gas_limit: number;
  rent_paid: string;
  validator_reward: string;
  balance_burnt: string;
  outgoing_receipts_root: string;
  tx_root: string;
  validator_proposals: any[];
  congestion_info: any;
  bandwidth_requests: any;
  signature: string;
}

// ==============================================
// copyright 2025 by sleet.near
