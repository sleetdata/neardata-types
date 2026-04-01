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
bun run bin/final.ts > ./tmp/neardata_output.txt
bun run bin/final.ts > ./tmp/neardata_output.txt 2>&1 && echo "SUCCESS"

# stream
source .env
bun run bin/stream.ts
bun run bin/stream.ts > ./tmp/stream_output.txt 2>&1 && echo "CHECK TEST OUTPUT FILE"
bun run bin/stream.ts > ./tmp/stream_output2.txt 2>&1 && echo "CHECK TEST OUTPUT FILE"
gtimeout 15s bun run bin/stream.ts > ./tmp/stream_output.txt 2>&1 && echo "CHECK TEST OUTPUT FILE"
```

---

copyright 2026 by sleet.near
