import React from 'react';
import { cx } from '../shared/utils';
export interface M3StateLayerProps { children:React.ReactNode; className?:string; }
/** Optics: Recessed Inner Glass. */
export function M3StateLayer({ children,className }: M3StateLayerProps) { return <span className={cx('m3-state-layer','m3-glass-recessed',className)}>{children}</span>; }
