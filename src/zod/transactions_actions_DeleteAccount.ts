import { z } from "zod";
import type { neardata_delete_account_action_interface } from "../interface/transactions_actions_DeleteAccount";

// ======================================================
// ====== neardata_delete_account_action_interface =======

export const neardata_delete_account_action_interface_Z_CONST = z.object({
  beneficiary_id: z.string(),
}) satisfies z.ZodType<neardata_delete_account_action_interface>;

// ======================================================
// copyright 2025 by sleet.near
