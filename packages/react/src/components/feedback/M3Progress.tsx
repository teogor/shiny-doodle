import React from 'react';
import { cx } from '../shared/utils';
export interface M3ProgressProps { value?: number; indeterminate?: boolean; className?: string; }
/** Optics: track is Recessed Inner Glass; the fill is Liquid Gloss. */
export function M3Progress({ value=0,indeterminate,className }: M3ProgressProps) { return <div className={cx('m3-progress','m3-glass-recessed',className)} role="progressbar" aria-valuenow={indeterminate?undefined:value} aria-valuemin={0} aria-valuemax={100}><div className={cx('m3-progress__fill','m3-liquid-gloss',indeterminate&&'m3-progress__fill--indeterminate')} style={indeterminate?undefined:{width:`${value}%`}}/></div>; }
