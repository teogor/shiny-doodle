import * as React from 'react';
import { cx } from '@m3-glass/core';

export type ButtonVariant = 'filled' | 'tonal' | 'outlined' | 'text' | 'glass';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'filled', className, disabled, type = 'button', children, ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled}
      className={cx('m3-button', `m3-button--${variant}`, 'm3-focus-ring', className)}
      {...props}
    >
      {children}
    </button>
  );
});
