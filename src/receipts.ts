// Receipt-related types for the NEAR blockchain
import type { neardata_action_interface } from "./transactions";
import type { neardata_execution_outcome_interface } from "./transactions_outcome_interface";

// ========================================
// ==== neardata_receipt_interface ====

export interface neardata_receipt_interface {
  predecessor_id: string;
  receiver_id: string;
  receipt_id: string;
  receipt: neardata_receipt_kind_interface;
  priority: number;
}

// ========================================
// ==== neardata_receipt_kind_interface ====

export interface neardata_receipt_kind_interface {
  Action?: neardata_action_receipt_interface;
  Data?: neardata_data_receipt_interface;
}

// ========================================
// ==== neardata_action_receipt_interface ====

export interface neardata_action_receipt_interface {
  signer_id: string;
  signer_public_key: string;
  gas_price: string;
  output_data_receivers: any[]; // Could be more specific if needed
  input_data_ids: string[]; // Array of data IDs
  actions: neardata_action_interface[];
  is_promise_yield: boolean;
}

// ========================================
// ==== neardata_data_receipt_interface ====

export interface neardata_data_receipt_interface {
  data_id: string;
  data: string; // base64 encoded data
  is_promise_resume: boolean;
}

// ========================================
// ==== neardata_receipt_execution_outcome_interface ====

export interface neardata_receipt_execution_outcome_interface {
  execution_outcome: neardata_execution_outcome_interface;
  receipt: neardata_receipt_interface; // The receipt associated with this outcome
  tx_hash: string; // The transaction hash that originated this receipt
}

// ==============================================
// copyright 2025 by sleet.near