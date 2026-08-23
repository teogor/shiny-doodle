import React from 'react';
import { cx } from '../shared/utils';
export interface M3EmptyStateProps{icon?:React.ReactNode;title:string;description?:string;action?:React.ReactNode;className?:string;}
/** Optics: Heavy Frosted Shell. */
export function M3EmptyState({icon,title,description,action,className}:M3EmptyStateProps){return <div className={cx('m3-empty-state','m3-glass-shell',className)}>{icon&&<div className="m3-empty-state__icon">{icon}</div>}<h3 className="m3-empty-state__title">{title}</h3>{description&&<p className="m3-empty-state__description">{description}</p>}{action&&<div className="m3-empty-state__action">{action}</div>}</div>}
