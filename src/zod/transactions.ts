import { z } from "zod";
import type {
  neardata_transactions_interface,
  neardata_transactions_transaction_interface,
  neardata_action_interface,
} from "../interface/transactions";
import { neardata_transactions_outcome_interface_z_const } from "./transactions_outcome_interface";
import { neardata_function_call_action_interface_z_const } from "./transactions_actions_FunctionCall";
import { neardata_transfer_action_interface_z_const } from "./transactions_actions_Transfer";
import { neardata_delegate_action_interface_z_const } from "./transactions_actions_Delegate";
import { neardata_add_key_action_interface_z_const } from "./transactions_actions_AddKey";
import { neardata_delete_account_action_interface_z_const } from "./transactions_actions_DeleteAccount";
import { neardata_create_account_action_interface_z_const } from "./transactions_actions_CreateAccount";

// ==============================================
// ====== neardata_transaction_interface =======

export const neardata_transactions_interface_z_const = z.object({
  transaction: z.lazy(
    () => neardata_transactions_transaction_interface_z_const,
  ),
  outcome: neardata_transactions_outcome_interface_z_const,
}) satisfies z.ZodType<neardata_transactions_interface>;

export const neardata_transactions_transaction_interface_z_const = z.object({
  signer_id: z.string(),
  public_key: z.string(),
  nonce: z.number(),
  receiver_id: z.string(),
  actions: z.array(z.lazy(() => neardata_action_interface_z_const)),
  priority_fee: z.number(),
  signature: z.string(),
  hash: z.string(),
}) satisfies z.ZodType<neardata_transactions_transaction_interface>;

// ==============================================
// ========= neardata_action_interface =========

export const neardata_action_interface_z_const = z
  .object({
    CreateAccount: z.union([z.object({}), z.literal("CreateAccount")]).optional(),
    DeleteAccount: z.union([neardata_delete_account_action_interface_z_const, z.literal("DeleteAccount")]).optional(),
    AddKey: neardata_add_key_action_interface_z_const.optional(),
    FunctionCall: neardata_function_call_action_interface_z_const.optional(),
    Transfer: neardata_transfer_action_interface_z_const.optional(),
    Delegate: neardata_delegate_action_interface_z_const.optional(),
  })
  .catchall(z.union([z.string(), z.any()])) satisfies z.ZodType<neardata_action_interface>;

// ==============================================
// copyright 2025 by sleet.near
