import type { M3GlassTheme } from './types.js';

export const lightTheme: M3GlassTheme = {
  mode: 'light',
  colorScheme: 'light',
  tokens: {
    '--m3-surface': '#f9f9ff',
    '--m3-on-surface': '#1a1b20',
    '--m3-primary': '#415f91',
    '--m3-focus': '#415f91',
    '--m3-glass-fill': 'rgb(249 249 255 / 0.68)',
    '--m3-glass-edge': 'rgb(26 27 32 / 0.12)',
    '--m3-glass-specular': 'rgb(255 255 255 / 0.26)',
    '--m3-glass-top-rim': 'rgb(255 255 255 / 0.38)',
    '--m3-recessed-fill': 'rgb(65 95 145 / 0.055)',
    '--m3-recessed-edge': 'rgb(255 255 255 / 0.42)',
    '--m3-shield-fill': '#f9f9ff',
    '--m3-shield-on-fill': '#1a1b20',
  },
};
