import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig } from 'vitest/config'
import svgLoader from 'vite-svg-loader'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    plugins: [svgLoader()],
    test: {
      globals: true,
      environment: 'jsdom',
      include: ['**/*.spec.ts'],
      exclude: [
        './dist/**',
        'node_modules',
      ],
      setupFiles: ['./vitest.setup.ts'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      deps: {
        optimizer: {
          web: {
            // https://github.com/vitest-dev/vitest/issues/4074
            exclude: ['vue'],
          },
        },
      },
    },
  }),
)
