#!/usr/bin/env node
import sade from 'sade'
import * as ed from './ed25519.js'

const cli = sade('ucan-key')

cli
  .command('ed')
  .describe('Generate ed25519 keypair')
  .option('--json', 'output json')
  .action(async (opts) => {
    const out = await ed.generate()
    if (opts.json) {
      console.log(JSON.stringify(out, null, 2))
    } else {
      console.log(`# ${out.did}`)
      console.log(out.key)
    }
  })

cli.parse(process.argv)
