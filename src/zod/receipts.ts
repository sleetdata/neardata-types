import { z } from "zod";
import type {
  neardata_receipt_interface,
  neardata_receipt_kind_interface,
  neardata_action_receipt_interface,
  neardata_data_receipt_interface,
  neardata_receipt_execution_outcome_interface,
} from "../interface/receipts";
import { neardata_action_interface_Z_CONST } from "./transactions";
import { neardata_execution_outcome_interface_Z_CONST } from "./transactions_outcome_interface";

// ========================================
// ==== neardata_receipt_interface ====

export const neardata_receipt_interface_Z_CONST = z.object({
  predecessor_id: z.string(),
  receiver_id: z.string(),
  receipt_id: z.string(),
  receipt: z.lazy(() => neardata_receipt_kind_interface_Z_CONST),
  priority: z.number(),
}) satisfies z.ZodType<neardata_receipt_interface>;

// ========================================
// ==== neardata_receipt_kind_interface ====

export const neardata_receipt_kind_interface_Z_CONST = z.object({
  Action: z.lazy(() => neardata_action_receipt_interface_Z_CONST).optional(),
  Data: z.lazy(() => neardata_data_receipt_interface_Z_CONST).optional(),
}) satisfies z.ZodType<neardata_receipt_kind_interface>;

// ========================================
// ==== neardata_action_receipt_interface ====

export const neardata_action_receipt_interface_Z_CONST = z.object({
  signer_id: z.string(),
  signer_public_key: z.string(),
  gas_price: z.string(),
  output_data_receivers: z.array(z.any()),
  input_data_ids: z.array(z.string()),
  actions: z.array(neardata_action_interface_Z_CONST),
  is_promise_yield: z.boolean(),
}) satisfies z.ZodType<neardata_action_receipt_interface>;

// ========================================
// ==== neardata_data_receipt_interface ====

export const neardata_data_receipt_interface_Z_CONST = z.object({
  data_id: z.string(),
  data: z.string(),
  is_promise_resume: z.boolean(),
}) satisfies z.ZodType<neardata_data_receipt_interface>;

// ========================================
// ==== neardata_receipt_execution_outcome_interface ====

export const neardata_receipt_execution_outcome_interface_Z_CONST = z.object({
  execution_outcome: neardata_execution_outcome_interface_Z_CONST,
  receipt: neardata_receipt_interface_Z_CONST,
  tx_hash: z.string(),
}) satisfies z.ZodType<neardata_receipt_execution_outcome_interface>;

// ==============================================
// copyright 2025 by sleet.near
