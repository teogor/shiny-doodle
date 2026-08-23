import React from 'react';
import { cx } from '../shared/utils';
export interface M3BadgeProps { count?: number; max?: number; dot?: boolean; className?: string; }
/** Optics: Strict Opaque Shield — a badge's number must always be pin-sharp. */
export function M3Badge({ count,max=99,dot,className }: M3BadgeProps) { if(dot) return <span className={cx('m3-badge','m3-badge--dot','m3-opaque',className}/>; const display=count!==undefined&&count>max?`${max}+`:count; return <span className={cx('m3-badge','m3-opaque',className)} aria-label={`${count} notifications`}>{display}</span>; }
