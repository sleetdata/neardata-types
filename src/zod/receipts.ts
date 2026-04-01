import { z } from "zod";
import type {
  neardata_receipt_interface,
  neardata_receipt_kind_interface,
  neardata_action_receipt_interface,
  neardata_data_receipt_interface,
  neardata_receipt_execution_outcome_interface,
  neardata_data_receiver_interface,
} from "../interface/receipts";
import { neardata_action_interface_z_const } from "./transactions";
import { neardata_execution_outcome_interface_z_const } from "./transactions_outcome_interface";

// ========================================
// ==== neardata_receipt_interface ====

export const neardata_receipt_interface_z_const = z.object({
  predecessor_id: z.string(),
  receiver_id: z.string(),
  receipt_id: z.string(),
  receipt: z.lazy(() => neardata_receipt_kind_interface_z_const),
  priority: z.number(),
}) satisfies z.ZodType<neardata_receipt_interface>;

// ========================================
// ==== neardata_receipt_kind_interface ====

export const neardata_receipt_kind_interface_z_const = z.object({
  Action: z.lazy(() => neardata_action_receipt_interface_z_const).optional(),
  Data: z.lazy(() => neardata_data_receipt_interface_z_const).optional(),
}) satisfies z.ZodType<neardata_receipt_kind_interface>;

// ========================================
// ==== neardata_action_receipt_interface ====

export const neardata_action_receipt_interface_z_const = z.object({
  signer_id: z.string(),
  signer_public_key: z.string(),
  gas_price: z.string(),
  output_data_receivers: z.array(z.lazy(() => neardata_data_receiver_interface_z_const)),
  input_data_ids: z.array(z.string()),
  actions: z.array(neardata_action_interface_z_const),
  is_promise_yield: z.boolean(),
}) satisfies z.ZodType<neardata_action_receipt_interface>;

// ========================================
// ==== neardata_data_receiver_interface ====

export const neardata_data_receiver_interface_z_const = z.object({
  data_id: z.string(),
  receiver_id: z.string(),
}) satisfies z.ZodType<neardata_data_receiver_interface>;

// ========================================
// ==== neardata_data_receipt_interface ====

export const neardata_data_receipt_interface_z_const = z.object({
  data_id: z.string(),
  data: z.string(),
  is_promise_resume: z.boolean(),
}) satisfies z.ZodType<neardata_data_receipt_interface>;

// ========================================
// ==== neardata_receipt_execution_outcome_interface ====

export const neardata_receipt_execution_outcome_interface_z_const = z.object({
  execution_outcome: neardata_execution_outcome_interface_z_const,
  receipt: neardata_receipt_interface_z_const,
  tx_hash: z.string(),
}) satisfies z.ZodType<neardata_receipt_execution_outcome_interface>;

// ==============================================
// copyright 2025 by sleet.near
