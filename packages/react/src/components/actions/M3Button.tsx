import React from 'react';
import { cx } from '../shared/utils';

export type M3ButtonVariant = 'filled' | 'tonal' | 'outlined' | 'text';

export interface M3ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: M3ButtonVariant;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

/** Optics: Liquid Gloss Sheen (filled/tonal only — outlined/text stay flat). */
export function M3Button({ variant = 'filled', icon, fullWidth, className, children, ...rest }: M3ButtonProps) {
  const glossy = variant === 'filled' || variant === 'tonal';
  return (
    <button className={cx('m3-button', `m3-button--${variant}`, glossy && 'm3-liquid-gloss', fullWidth && 'm3-button--full', className)} {...rest}>
      {icon && <span className="m3-button__icon">{icon}</span>}
      <span className="m3-button__label">{children}</span>
    </button>
  );
}
