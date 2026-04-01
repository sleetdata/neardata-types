import { z } from "zod";
import type {
  neardata_transactions_outcome_interface,
  neardata_execution_outcome_interface,
  neardata_merkle_proof_node_interface,
  neardata_outcome_interface,
  neardata_outcome_metadata_interface,
  neardata_gas_profile_entry_interface,
  neardata_outcome_status_interface,
  neardata_receipt_interface,
} from "../interface/transactions_outcome_interface";

// ===================================================
// Receipt placeholder
export const neardata_receipt_interface_Z_CONST = z
  .object({})
  .passthrough() satisfies z.ZodType<neardata_receipt_interface>;

// ===================================================
// ===== neardata_transactions_outcome_interface =====

export const neardata_transactions_outcome_interface_Z_CONST = z.object({
  execution_outcome: z.lazy(() => neardata_execution_outcome_interface_Z_CONST),
  receipt: neardata_receipt_interface_Z_CONST.nullable(),
}) satisfies z.ZodType<neardata_transactions_outcome_interface>;

// ===================================================

// Execution outcome (top-level outcome wrapper)
export const neardata_execution_outcome_interface_Z_CONST = z.object({
  proof: z.array(z.lazy(() => neardata_merkle_proof_node_interface_Z_CONST)),
  block_hash: z.string(),
  id: z.string(),
  outcome: z.lazy(() => neardata_outcome_interface_Z_CONST),
}) satisfies z.ZodType<neardata_execution_outcome_interface>;

// Merkle proof node for outcome/receipt inclusion proofs
export const neardata_merkle_proof_node_interface_Z_CONST = z.object({
  hash: z.string(),
  direction: z.enum(["Left", "Right"]),
}) satisfies z.ZodType<neardata_merkle_proof_node_interface>;

// Inner outcome payload
export const neardata_outcome_interface_Z_CONST = z.object({
  logs: z.array(z.string()),
  receipt_ids: z.array(z.string()),
  gas_burnt: z.number(),
  tokens_burnt: z.string(),
  executor_id: z.string(),
  status: z.lazy(() => neardata_outcome_status_interface_Z_CONST),
  metadata: z.lazy(() => neardata_outcome_metadata_interface_Z_CONST),
}) satisfies z.ZodType<neardata_outcome_interface>;

// Outcome metadata
export const neardata_outcome_metadata_interface_Z_CONST = z.object({
  version: z.number(),
  gas_profile: z
    .array(z.lazy(() => neardata_gas_profile_entry_interface_Z_CONST))
    .nullable(),
}) satisfies z.ZodType<neardata_outcome_metadata_interface>;

// Optional gas profile entries
export const neardata_gas_profile_entry_interface_Z_CONST = z.object({
  cost: z.string(),
  cost_category: z.string(),
  description: z.string().optional(),
}) satisfies z.ZodType<neardata_gas_profile_entry_interface>;

// Outcome status union
export const neardata_outcome_status_interface_Z_CONST = z.union([
  z.object({ SuccessValue: z.string() }),
  z.object({ SuccessReceiptId: z.string() }),
  z.object({ Failure: z.record(z.string(), z.any()) }),
]) satisfies z.ZodType<neardata_outcome_status_interface>;
