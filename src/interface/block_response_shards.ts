import type { neardata_transactions_interface } from "./transactions";
import type {
  neardata_receipt_interface,
  neardata_receipt_execution_outcome_interface,
} from "./receipts";

// ==================================
// ==== neardata_shard_interface ====

export interface neardata_shard_interface {
  shard_id: number;
  chunk: neardata_shard_chunk_interface;
  receipt_execution_outcomes: neardata_receipt_execution_outcome_interface[];
  state_changes: any[];
}

// ========================================
// ==== neardata_shard_chunk_interface ====

export interface neardata_shard_chunk_interface {
  author: string;
  header: {
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
    congestion_info: {
      delayed_receipts_gas: string;
      buffered_receipts_gas: string;
      receipt_bytes: number;
      allowed_shard: number;
    };
    bandwidth_requests: {
      V1: {
        requests: any[];
      };
    };
    signature: string;
  };
  transactions: neardata_transactions_interface[];
  receipts: neardata_receipt_interface[];
}

// ==============================================
// copyright 2025 by sleet.near
