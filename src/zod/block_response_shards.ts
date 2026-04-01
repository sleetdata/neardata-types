import { z } from "zod";
import type {
  neardata_shard_interface,
  neardata_shard_chunk_interface,
  neardata_state_change_interface,
} from "../interface/block_response_shards";
import { neardata_transactions_interface_z_const } from "./transactions";
import {
  neardata_receipt_interface_z_const,
  neardata_receipt_execution_outcome_interface_z_const,
} from "./receipts";

// ==================================
// ==== neardata_shard_interface ====

export const neardata_shard_interface_z_const = z.object({
  shard_id: z.number(),
  chunk: z.lazy(() => neardata_shard_chunk_interface_z_const),
  receipt_execution_outcomes: z.array(
    neardata_receipt_execution_outcome_interface_z_const,
  ),
  state_changes: z.array(z.lazy(() => neardata_state_change_interface_z_const)),
}) satisfies z.ZodType<neardata_shard_interface>;

// ========================================
// ==== neardata_state_change_interface ====

export const neardata_state_change_interface_z_const = z.object({
  cause: z.object({
    receipt_hash: z.string().optional(),
    transaction_hash: z.string().optional(),
    type: z.string(),
  }),
  change: z.object({
    account_id: z.string().optional(),
    amount: z.string().optional(),
    code_hash: z.string().optional(),
    locked: z.string().optional(),
    storage_paid_at: z.number().optional(),
    storage_usage: z.number().optional(),
  }).catchall(z.unknown()),
  type: z.string(),
}) satisfies z.ZodType<neardata_state_change_interface>;

// ========================================
// ==== neardata_shard_chunk_interface ====

export const neardata_shard_chunk_interface_z_const = z.object({
  author: z.string(),
  header: z.object({
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
    congestion_info: z.object({
      delayed_receipts_gas: z.string(),
      buffered_receipts_gas: z.string(),
      receipt_bytes: z.number(),
      allowed_shard: z.number(),
    }),
    bandwidth_requests: z.object({
      V1: z.object({
        requests: z.array(z.any()),
      }),
    }),
    signature: z.string(),
  }),
  transactions: z.array(neardata_transactions_interface_z_const),
  receipts: z.array(neardata_receipt_interface_z_const),
  local_receipts: z.array(z.any()),
}) satisfies z.ZodType<neardata_shard_chunk_interface>;

// ==============================================
// copyright 2025 by sleet.near
