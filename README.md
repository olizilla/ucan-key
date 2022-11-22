# ⁂ ucan-key

Generate a keypair to sign your [UCAN]s. Built on [ucanto].

## Usage

Install it globally `npm i -g ucan-key` or run it directly with `npx`

```bash
$ npx ucan-key ed
# did:key:z6Mkrxitw7vFt19yWdsUZVBR3Br5Ctb2cYjKWTa1HnogrxbM
MgCZ9PrPux+I1Ijt3iicH49WOnBWY3CqcYsKUjXdtWlGnHO0BudhyYagJvRO1tRbs1/Z9ZG5fckaZcCwjqVhJs39pp5w=

$ npx ucan-key ed --json
{ 
  "did": "did:key:z6Mkrxitw7vFt19yWdsUZVBR3Br5Ctb2cYjKWTa1HnogrxbM"
  "key": "MgCZ9PrPux+I1Ijt3iicH49WOnBWY3CqcYsKUjXdtWlGnHO0BudhyYagJvRO1tRbs1/Z9ZG5fckaZcCwjqVhJs39pp5w="
}
```

You might store the key string in a secrets manager or ENV var and parse it programmatically like:

```js
import * as Signer from '@ucanto/principal/ed25519'
const key = process.env.KEY // "MgCZ9PrPux+I1Ijt..."
const signer = Signer.parse(key)
// now go sign some UCANs!
```

[ucan]: https://github.com/ucan-wg/spec/
[ucanto]: https://github.com/web3-storage/ucanto
