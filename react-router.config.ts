import type { Config } from '@react-router/dev/config'
import { writeFile } from 'node:fs/promises'

export default {
  ssr: true,

  appDirectory: 'src',
  // assetsBuildDirectory: "public/build",

  serverModuleFormat: 'esm',
  buildDirectory: 'dist',
  prerender: true,
  async buildEnd({ buildManifest }) {
    await writeFile(
      'dist/manifest.json',
      JSON.stringify(buildManifest, null, 2),
      'utf-8'
    )
  },
} satisfies Config
