export type InteractionState = 'idle' | 'hover' | 'focus' | 'pressed' | 'disabled';

export interface InteractionOptions {
  disabled?: boolean;
  pressed?: boolean;
  hovered?: boolean;
  focused?: boolean;
}

export function resolveInteractionState(options: InteractionOptions = {}): InteractionState {
  if (options.disabled) return 'disabled';
  if (options.pressed) return 'pressed';
  if (options.focused) return 'focus';
  if (options.hovered) return 'hover';
  return 'idle';
}

export function getInteractionClassName(state: InteractionState): string {
  return `m3-state--${state}`;
}
