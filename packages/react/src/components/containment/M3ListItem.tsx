import React from 'react';
import { cx } from '../shared/utils';
export interface M3ListItemProps { headline: string; supportingText?: string; leading?: React.ReactNode; trailing?: React.ReactNode; onClick?: ()=>void; className?: string; }
/** Optics: Heavy Frosted Shell (rows in a frosted list surface). */
export function M3ListItem({ headline,supportingText,leading,trailing,onClick,className }: M3ListItemProps) { const Component:any=onClick?'button':'div'; return <Component className={cx('m3-list-item','m3-glass-shell',className)} onClick={onClick}>{leading&&<span className="m3-list-item__leading">{leading}</span>}<span className="m3-list-item__text"><span className="m3-list-item__headline">{headline}</span>{supportingText&&<span className="m3-list-item__supporting">{supportingText}</span>}</span>{trailing&&<span className="m3-list-item__trailing">{trailing}</span>}</Component>; }
