import { z } from "zod";
import type { neardata_transfer_action_interface } from "../interface/transactions_actions_Transfer";

// ======================================================
// ========= neardata_transfer_action_interface =========

export const neardata_transfer_action_interface_z_const = z.object({
  deposit: z.string(),
}) satisfies z.ZodType<neardata_transfer_action_interface>;

// ==============================================
// copyright 2025 by sleet.near
