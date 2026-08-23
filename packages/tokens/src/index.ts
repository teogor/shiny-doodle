export const color = {
  light: { primary: '#415f91', onPrimary: '#ffffff', surface: '#f9f9ff', onSurface: '#1a1b20' },
  dark: { primary: '#aac7ff', onPrimary: '#0a305f', surface: '#111318', onSurface: '#e2e2e9' }
} as const;

export const shape = { none: 0, xs: 4, sm: 8, md: 12, lg: 16, xl: 28, full: 9999 } as const;
export const space = { 1: 4, 2: 8, 3: 12, 4: 16, 5: 24, 6: 32, 7: 48, 8: 64 } as const;
export const glass = { subtle: { blur: 12, opacity: 0.76 }, standard: { blur: 24, opacity: 0.68 }, strong: { blur: 40, opacity: 0.56 } } as const;
export type GlassVariant = keyof typeof glass;
