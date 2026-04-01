import { z } from "zod";
import type {
  neardata_delegate_action_interface,
  neardata_delegate_action_inner_action_interface,
} from "../interface/transactions_actions_Delegate";
import { neardata_function_call_action_interface_z_const } from "./transactions_actions_FunctionCall";
import { neardata_transfer_action_interface_z_const } from "./transactions_actions_Transfer";
import { neardata_create_account_action_interface_z_const } from "./transactions_actions_CreateAccount";
import { neardata_add_key_action_interface_z_const } from "./transactions_actions_AddKey";

// =================================================
// ====== neardata_delegate_action_inner_action_interface =======

export const neardata_delegate_action_inner_action_interface_z_const = z
  .object({
    CreateAccount: neardata_create_account_action_interface_z_const.optional(),
    AddKey: neardata_add_key_action_interface_z_const.optional(),
    FunctionCall: neardata_function_call_action_interface_z_const.optional(),
    Transfer: neardata_transfer_action_interface_z_const.optional(),
  })
  .catchall(
    z.any(),
  ) satisfies z.ZodType<neardata_delegate_action_inner_action_interface>;

// =================================================
// ====== neardata_delegate_action_interface =======

export const neardata_delegate_action_interface_z_const = z.object({
  delegate_action: z.object({
    sender_id: z.string(),
    receiver_id: z.string(),
    actions: z.array(neardata_delegate_action_inner_action_interface_z_const),
    nonce: z.number(),
    max_block_height: z.number(),
    public_key: z.string(),
  }),
  signature: z.string(),
}) satisfies z.ZodType<neardata_delegate_action_interface>;

// ==============================================
// copyright 2025 by sleet.near
