import React from 'react';
import { cx } from '../shared/utils';
export interface M3IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { icon: React.ReactNode; selected?: boolean; variant?: 'standard' | 'filled' | 'tonal'; 'aria-label': string; }
/** Optics: Liquid Gloss Sheen when filled/tonal; plain otherwise. */
export function M3IconButton({ icon, selected, variant = 'standard', className, ...rest }: M3IconButtonProps) { const glossy = variant !== 'standard'; return <button className={cx('m3-icon-button', `m3-icon-button--${variant}`, glossy && 'm3-liquid-gloss', selected && 'm3-icon-button--selected', className)} aria-pressed={selected} {...rest}>{icon}</button>; }
