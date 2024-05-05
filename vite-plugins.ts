import { PluginEntry } from '@quasar/app-vite/types/configuration/build';
import UnoCSS from 'unocss/vite';

export const vitePlugins: PluginEntry[] = [
  [
    'vite-plugin-checker',
    {
      vueTsc: {
        tsconfigPath: 'tsconfig.vue-tsc.json',
      },
      eslint: {
        lintCommand: 'eslint "./**/*.{js,ts,mjs,cjs,vue}"',
      },
    },
    { server: false },
  ],

  ...UnoCSS({
    configFile: './uno.config.ts',
  }),
];
