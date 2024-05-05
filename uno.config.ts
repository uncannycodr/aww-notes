// uno.config.ts - unocss config

import { defineConfig, presetUno } from 'unocss';

export default defineConfig({
  presets: [
    presetUno({
      prefix: 't-',
    }),
  ],
});
