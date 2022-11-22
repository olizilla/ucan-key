import * as Signer from '@ucanto/principal/ed25519'

export async function generate () {
  const signer = await Signer.generate()
  return { did: signer.did(), key: Signer.format(signer) }
}
