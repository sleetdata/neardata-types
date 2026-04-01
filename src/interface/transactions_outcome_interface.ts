// generated with dia, could use some work!
// types/neardata-transactions-outcome.ts

// ===================================================
// ===== neardata_transactions_outcome_interface =====

export interface neardata_transactions_outcome_interface {
  execution_outcome: neardata_execution_outcome_interface;
  receipt: neardata_receipt_interface | null;
}

// ===================================================

// Execution outcome (top-level outcome wrapper)
export interface neardata_execution_outcome_interface {
  proof: neardata_merkle_proof_node_interface[];
  block_hash: string;
  id: string; // Usually the tx or receipt ID associated with this outcome
  outcome: neardata_outcome_interface;
}

// Merkle proof node for outcome/receipt inclusion proofs
export interface neardata_merkle_proof_node_interface {
  hash: string;
  direction: "Left" | "Right";
}

// Inner outcome payload
// the log feild is imortant and can have event standard logs.
export interface neardata_outcome_interface {
  logs: string[];
  receipt_ids: string[];
  gas_burnt: number; // gas in yocto-gas units (fits in JS number for typical values)
  tokens_burnt: string; // U128 as decimal string (e.g., "51592731297500000000")
  executor_id: string;
  status: neardata_outcome_status_interface;
  metadata: neardata_outcome_metadata_interface;
}

// Outcome metadata
export interface neardata_outcome_metadata_interface {
  version: number;
  gas_profile: neardata_gas_profile_entry_interface[] | null;
}

// Optional gas profile entries (often null). Included for completeness.
export interface neardata_gas_profile_entry_interface {
  cost: string; // cost amount for the item (as string to preserve precision)
  cost_category: string; // e.g. "WASM", "Host", etc.
  description?: string; // human-readable description
}

// Outcome status union (success value, success receipt id, or failure)
export type neardata_outcome_status_interface =
  | { SuccessValue: string } // base64-encoded return value
  | { SuccessReceiptId: string } // receipt ID created by this outcome
  | { Failure: Record<string, unknown> }; // error object, shape varies

// ===================================================
// Receipt placeholder (your sample shows null). If you later need details,
// replace this with the actual receipt shape.
export interface neardata_receipt_interface {
  // Define when you have concrete receipt fields.
}
