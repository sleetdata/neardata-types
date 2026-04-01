import { z } from "zod";
import type { neardata_function_call_action_interface } from "../interface/transactions_actions_FunctionCall";

// ======================================================
// ====== neardata_function_call_action_interface =======

export const neardata_function_call_action_interface_z_const = z.object({
  method_name: z.string(),
  args: z.string(),
  gas: z.number(),
  deposit: z.string(),
}) satisfies z.ZodType<neardata_function_call_action_interface>;

// ==============================================
// copyright 2025 by sleet.near
