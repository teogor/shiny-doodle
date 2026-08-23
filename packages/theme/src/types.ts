export type M3GlassThemeMode = 'light' | 'dark' | 'oled';

export interface M3GlassTheme {
  mode: M3GlassThemeMode;
  colorScheme: 'light' | 'dark';
  tokens: Record<string, string>;
}

export interface ThemeTarget {
  setProperty(name: string, value: string): void;
  removeProperty(name: string): void;
}
