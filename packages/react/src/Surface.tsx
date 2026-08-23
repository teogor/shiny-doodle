import * as React from 'react';
import { createSurfaceState, getSurfaceClassNames, cx, type SurfaceElevation, type SurfaceKind } from '@m3-glass/core';

export interface SurfaceProps extends React.HTMLAttributes<HTMLDivElement> {
  kind?: SurfaceKind;
  elevation?: SurfaceElevation;
  interactive?: boolean;
  disabled?: boolean;
}

export const Surface = React.forwardRef<HTMLDivElement, SurfaceProps>(function Surface(
  { kind, elevation, interactive = false, disabled = false, className, children, ...props },
  ref,
) {
  const state = createSurfaceState({ kind, elevation, interactive, disabled });
  return (
    <div
      ref={ref}
      className={cx(...getSurfaceClassNames(state), className)}
      data-surface={state.kind}
      data-elevation={String(state.elevation)}
      aria-disabled={disabled || undefined}
      {...props}
    >
      {children}
    </div>
  );
});
