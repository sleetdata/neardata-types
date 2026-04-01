# neardata types test

bin for testing near data types

---

neardata

- https://mainnet.neardata.xyz/
- https://testnet.neardata.xyz/

---

bin

```sh
# test that fnal block matches type
bun run bin/final.ts
bun run bin/final.ts > ./tmp/neardata_output.txt
bun run bin/final.ts > ./tmp/neardata_output.txt 2>&1 && echo "SUCCESS"
```

---

copyright 2026 by sleet.near
