import type { M3GlassTheme } from './types.js';

export const darkTheme: M3GlassTheme = {
  mode: 'dark',
  colorScheme: 'dark',
  tokens: {
    '--m3-surface': '#111318',
    '--m3-on-surface': '#e2e2e9',
    '--m3-primary': '#aac7ff',
    '--m3-focus': '#aac7ff',
    '--m3-glass-fill': 'rgb(17 19 24 / 0.62)',
    '--m3-glass-edge': 'rgb(226 226 233 / 0.14)',
    '--m3-glass-specular': 'rgb(255 255 255 / 0.13)',
    '--m3-glass-top-rim': 'rgb(255 255 255 / 0.18)',
    '--m3-recessed-fill': 'rgb(0 0 0 / 0.26)',
    '--m3-recessed-edge': 'rgb(255 255 255 / 0.09)',
    '--m3-shield-fill': '#111318',
    '--m3-shield-on-fill': '#e2e2e9',
  },
};
