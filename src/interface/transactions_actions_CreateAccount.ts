// ======================================================
// ====== neardata_create_account_action_interface =======

export interface neardata_create_account_action_interface {
  // CreateAccount action has no fields
}

// ======================================================
// ====== neardata_action_interface =====================

// Note: Actions can be represented as either:
// - An object with the action type as key (e.g., { CreateAccount: {} })
// - A string for actions with no fields (e.g., "CreateAccount")
// This is handled in the zod schema via union types

// ======================================================
// copyright 2025 by sleet.near
