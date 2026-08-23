import { darkTheme } from './dark.js';
import { lightTheme } from './light.js';
import { oledTheme } from './oled.js';
import type { M3GlassTheme, M3GlassThemeMode, ThemeTarget } from './types.js';

export { darkTheme, lightTheme, oledTheme };
export type { M3GlassTheme, M3GlassThemeMode, ThemeTarget };

export const themes: Record<M3GlassThemeMode, M3GlassTheme> = {
  light: lightTheme,
  dark: darkTheme,
  oled: oledTheme,
};

export function getTheme(mode: M3GlassThemeMode): M3GlassTheme {
  return themes[mode];
}

export function applyTheme(theme: M3GlassTheme, target: ThemeTarget): void {
  for (const [name, value] of Object.entries(theme.tokens)) {
    target.setProperty(name, value);
  }
}

export function applyThemeToDocument(theme: M3GlassTheme): void {
  if (typeof document === 'undefined') return;

  const root = document.documentElement;
  root.dataset.theme = theme.mode;
  root.style.colorScheme = theme.colorScheme;
  applyTheme(theme, root.style);
}
