import React from 'react';
import { cx } from '../shared/utils';
export interface M3DividerProps { orientation?: 'horizontal'|'vertical'; inset?: boolean; className?: string; }
/** Optics: Strict Opaque Shield — a divider must never look like it's fading into glass blur. */
export function M3Divider({ orientation='horizontal', inset, className }: M3DividerProps) { return <hr className={cx('m3-divider',`m3-divider--${orientation}`,inset&&'m3-divider--inset','m3-opaque',className)}/>; }
