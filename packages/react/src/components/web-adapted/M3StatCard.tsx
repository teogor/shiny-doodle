import React from 'react';
import { cx } from '../shared/utils';
export interface M3StatCardProps{label:string;value:string|number;delta?:{value:string;direction:'up'|'down'|'flat'};icon?:React.ReactNode;className?:string;}
/** Optics: Heavy Frosted Shell. */
export function M3StatCard({label,value,delta,icon,className}:M3StatCardProps){return <div className={cx('m3-stat-card','m3-glass-shell',className)}><div className="m3-stat-card__header"><span className="m3-stat-card__label">{label}</span>{icon}</div><div className="m3-stat-card__value">{value}</div>{delta&&<span className={cx('m3-stat-card__delta',`m3-stat-card__delta--${delta.direction}`)}>{delta.direction==='up'?'▲':delta.direction==='down'?'▼':'—'} {delta.value}</span>}</div>}
