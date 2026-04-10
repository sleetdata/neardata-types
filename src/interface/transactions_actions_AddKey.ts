// ======================================================
// ====== neardata_add_key_action_interface =======

export interface neardata_add_key_action_interface {
  public_key: string;
  access_key: {
    nonce: number;
    permission:
      | string
      | {
          permission_kind?: string;
          allowance?: string;
          receiver_id?: string;
          method_names?: string[];
        };
  };
}

// ======================================================
// copyright 2025 by sleet.near
