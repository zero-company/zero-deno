import { build, emptyDir } from 'dnt'

const version = Deno.args[0]?.replace(/^v/, '')
const outDir = `./.zero/zero-utilities/buildNpmV1/${version}`
await emptyDir(outDir)

await build({
  entryPoints: ['./mod.ts'],
  outDir,
  shims: {
    deno: true,
  },
  package: {
    name: 'zero',
    version,
    description: 'Zero - Collection of Deno Modules ',
    license: 'MIT',
    repository: {
      type: 'git',
      url: 'git+https://github.com/zero-company/zero-deno.git',
    },
  },
})

Deno.copyFileSync('LICENSE', `${outDir}/LICENSE`)
Deno.copyFileSync('README.md', `${outDir}/README.md`)
