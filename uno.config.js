// uno.config.js

import { defineConfig, presetAttributify, presetUno } from 'unocss';
import transformerDirective from '@unocss/transformer-directives';
import transformerVariantGroup from '@unocss/transformer-variant-group';
import presetIcons from '@unocss/preset-icons';
import { colors } from './uno.colors';

export default defineConfig({
  transformers: [transformerDirective(), transformerVariantGroup()],
  presets: [
    presetAttributify({ trueToNonValued: true, nonValuedAttribute: true }),
    presetIcons({
      autoInstall: false,
    }),
    presetUno(),
  ],
  shortcuts: {
    'h-btn':
      'mt-5 ml-2 w-1/2 py-2 px-4 font-semibold rounded-lg shadow-md bg-green hover:bg-red',
    fcr: 'flex flex-col lg:flex-row',
    fcrr: 'flex flex-col-reverse lg:flex-row',
    fc: 'flex flex-col',
    'border-container': 'p-4 border border-accent rounded-lg',
    pxs: 'text-xs font-300 opacity-50',
  },
  safelist: ['p-10'],
  theme: {
    colors,
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xl2: '1600px',
    },
  },
});
