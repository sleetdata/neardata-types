import type { neardata_function_call_action_interface } from "./transactions_actions_FunctionCall";
import type { neardata_transfer_action_interface } from "./transactions_actions_Transfer";
import type { neardata_create_account_action_interface } from "./transactions_actions_CreateAccount";
import type { neardata_add_key_action_interface } from "./transaction_actions_AddKey";

// =================================================
// ====== neardata_delegate_action_inner_action_interface =======

// Define the action interface for actions inside delegate actions
// This includes all action types except Delegate to avoid circular dependency
export interface neardata_delegate_action_inner_action_interface {
  CreateAccount?: neardata_create_account_action_interface;
  AddKey?: neardata_add_key_action_interface;
  FunctionCall?: neardata_function_call_action_interface;
  Transfer?: neardata_transfer_action_interface;

  // Fallback: allow any other action key with any payload
  [actionName: string]: unknown;
}

// =================================================
// ====== neardata_delegate_action_interface =======


export interface neardata_delegate_action_interface {
  delegate_action: {
    sender_id: string;
    receiver_id: string;
    actions: neardata_delegate_action_inner_action_interface[];
    nonce: number;
    max_block_height: number;
    public_key: string;
  };
  signature: string;
}


// ==============================================
// copyright 2025 by sleet.near