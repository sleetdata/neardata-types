import { z } from "zod";
import type { neardata_add_key_action_interface } from "../interface/transactions_actions_AddKey";

// ======================================================
// ====== neardata_add_key_action_interface =======

export const neardata_add_key_action_interface_z_const = z.object({
  public_key: z.string(),
  access_key: z.object({
    nonce: z.number(),
    permission: z.union([
      z.string(),
      z.object({
        permission_kind: z.string(),
        allowance: z.string().optional(),
        receiver_id: z.string().optional(),
        method_names: z.array(z.string()).optional(),
      }),
    ]),
  }),
}) satisfies z.ZodType<neardata_add_key_action_interface>;

// ======================================================
// copyright 2025 by sleet.near
