import React from 'react';
import { cx } from '../shared/utils';
export interface M3SkeletonProps { width?: number|string; height?: number|string; variant?: 'text'|'rect'|'circle'; className?: string; }
/** Optics: Heavy Frosted Shell — a loading placeholder should already look like the glass surface it fills. */
export function M3Skeleton({ width='100%',height=16,variant='rect',className }: M3SkeletonProps) { return <div className={cx('m3-skeleton',`m3-skeleton--${variant}`,'m3-glass-shell',className)} style={{width,height}} aria-hidden/>; }
