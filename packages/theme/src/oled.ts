import type { M3GlassTheme } from './types.js';

export const oledTheme: M3GlassTheme = {
  mode: 'oled',
  colorScheme: 'dark',
  tokens: {
    '--m3-surface': '#000000',
    '--m3-on-surface': '#e6e1e9',
    '--m3-primary': '#d0bcff',
    '--m3-focus': '#d0bcff',
    '--m3-glass-fill': 'rgb(12 12 14 / 0.72)',
    '--m3-glass-edge': 'rgb(255 255 255 / 0.14)',
    '--m3-glass-specular': 'rgb(255 255 255 / 0.11)',
    '--m3-glass-top-rim': 'rgb(255 255 255 / 0.18)',
    '--m3-recessed-fill': 'rgb(0 0 0 / 0.72)',
    '--m3-recessed-edge': 'rgb(255 255 255 / 0.08)',
    '--m3-shield-fill': '#000000',
    '--m3-shield-on-fill': '#e6e1e9',
  },
};
