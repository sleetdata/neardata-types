// Transaction-related types for the NEAR blockchain
//
// imports
import type { neardata_transactions_outcome_interface } from "./transactions_outcome_interface";
import type { neardata_function_call_action_interface } from "./transactions_actions_FunctionCall";
import type { neardata_transfer_action_interface } from "./transactions_actions_Transfer";
import type { neardata_delegate_action_interface } from "./transactions_actions_Delegate";
import type { neardata_add_key_action_interface } from "./transaction_actions_AddKey";
import type { neardata_delete_account_action_interface } from "./transactions_actions_DeleteAccount";

// ==============================================
// ====== neardata_transaction_interface =======

export interface neardata_transactions_interface {
  transaction: neardata_transactions_transaction_interface;
  outcome: neardata_transactions_outcome_interface;
}

export interface neardata_transactions_transaction_interface {
  signer_id: string;
  public_key: string;
  nonce: number;
  receiver_id: string;
  actions: neardata_action_interface[];
  priority_fee: number;
  signature: string;
  hash: string;
}

// ==============================================
// ========= neardata_action_interface =========

export interface neardata_action_interface {
  CreateAccount?: {}; // no fields
  DeleteAccount?: neardata_delete_account_action_interface;
  AddKey?: neardata_add_key_action_interface;
  FunctionCall?: neardata_function_call_action_interface;
  Transfer?: neardata_transfer_action_interface;
  Delegate?: neardata_delegate_action_interface;

  // Fallback: allow any other action key with any payload
  [actionName: string]: unknown;
}

// ==============================================
// copyright 2025 by sleet.near
