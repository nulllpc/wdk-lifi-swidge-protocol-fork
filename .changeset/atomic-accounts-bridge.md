---
"@lifi/wdk-protocol-swidge-lifi": patch
---

Batch ERC-4337 allowance reset, approval, and LI.FI bridge calls into one UserOperation. This prevents bridge submission from racing a pending approval with the same account nonce (`AA25 invalid account nonce`) and avoids leaving a standalone approval behind when batch estimation fails.
