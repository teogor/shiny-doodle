import React from 'react';
import { cx } from '../shared/utils';
export interface M3CardProps extends React.HTMLAttributes<HTMLDivElement> { variant?: 'elevated' | 'filled' | 'outlined'; }
/** Optics: Heavy Frosted Shell. */
export function M3Card({ variant='elevated', className, children, ...rest }: M3CardProps) { return <div className={cx('m3-card',`m3-card--${variant}`,'m3-glass-shell',className)} {...rest}>{children}</div>; }
