# neardata types test

bin for testing near data types

---

neardata

- https://mainnet.neardata.xyz/
- https://testnet.neardata.xyz/

the stream bin depends on "https://github.com/sleetdata/near-stream", must set up your own near-stream, and set env "NEAR_STREAM_URL"

---

bin

```sh
# test that fnal block matches type
bun run bin/final.ts


# stream
source .env
bun run bin/stream.ts
```

---

copyright 2026 by sleet.near
