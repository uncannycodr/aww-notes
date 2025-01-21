// uno.config.ts - unocss config

import { defineConfig, presetUno, presetWind } from 'unocss';

export default defineConfig({
  presets: [
    presetUno({
      prefix: 't-',
    }),
    presetWind(),
  ],
});
