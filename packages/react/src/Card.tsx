import * as React from 'react';
import { Surface, type SurfaceProps } from './Surface.js';
import { cx } from '@m3-glass/core';

export interface CardProps extends Omit<SurfaceProps, 'kind'> {
  variant?: 'elevated' | 'filled' | 'outlined' | 'glass';
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(function Card(
  { variant = 'glass', className, elevation, interactive, ...props },
  ref,
) {
  const kind = variant === 'filled' ? 'opaque' : 'glass';
  return (
    <Surface
      ref={ref}
      kind={kind}
      elevation={variant === 'outlined' ? 0 : elevation ?? 1}
      interactive={interactive}
      className={cx('m3-card', `m3-card--${variant}`, className)}
      {...props}
    />
  );
});
