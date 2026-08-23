import React from 'react';
import { cx } from '../shared/utils';

export interface M3ExtendedFabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
}

/** Optics: Liquid Gloss Sheen. */
export function M3ExtendedFab({ icon, className, children, ...rest }: M3ExtendedFabProps) {
  return (
    <button className={cx('m3-extended-fab', 'm3-liquid-gloss', className)} {...rest}>
      {icon && <span className="m3-extended-fab__icon">{icon}</span>}
      <span className="m3-extended-fab__label">{children}</span>
    </button>
  );
}
