import React from 'react';
import { cx } from '../shared/utils';
export interface M3DockedToolbarProps {children:React.ReactNode;position?:'top'|'bottom'|'floating';className?:string;}
/** Optics: Heavy Frosted Shell. */
export function M3DockedToolbar({children,position='floating',className}:M3DockedToolbarProps){return <div className={cx('m3-docked-toolbar',`m3-docked-toolbar--${position}`,'m3-glass-shell',className)}>{children}</div>}
