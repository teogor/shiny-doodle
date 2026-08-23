import React from 'react';
import { cx } from '../shared/utils';
export interface M3FabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { icon: React.ReactNode; size?: 'small' | 'default' | 'large'; 'aria-label': string; }
/** Optics: Liquid Gloss Sheen. */
export function M3Fab({ icon, size = 'default', className, ...rest }: M3FabProps) { return <button className={cx('m3-fab', `m3-fab--${size}`, 'm3-liquid-gloss', className)} {...rest}>{icon}</button>; }
