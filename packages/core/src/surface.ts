export type SurfaceKind = 'glass' | 'recessed' | 'opaque';
export type SurfaceElevation = 0 | 1 | 2 | 3 | 4 | 5;

export interface SurfaceOptions {
  kind?: SurfaceKind;
  elevation?: SurfaceElevation;
  interactive?: boolean;
  disabled?: boolean;
}

export interface SurfaceState {
  kind: SurfaceKind;
  elevation: SurfaceElevation;
  interactive: boolean;
  disabled: boolean;
}

export function createSurfaceState(options: SurfaceOptions = {}): SurfaceState {
  return {
    kind: options.kind ?? 'glass',
    elevation: options.elevation ?? 1,
    interactive: options.interactive ?? false,
    disabled: options.disabled ?? false,
  };
}

export function getSurfaceClassNames(state: SurfaceState): string[] {
  const classes = ['m3-surface'];

  if (state.kind === 'glass') classes.push('m3-glass');
  if (state.kind === 'recessed') classes.push('m3-recessed');
  if (state.kind === 'opaque') classes.push('m3-opaque-shield');

  classes.push(`m3-elevation-${state.elevation}`);
  if (state.interactive) classes.push('m3-surface--interactive');
  if (state.disabled) classes.push('m3-surface--disabled');

  return classes;
}
