import React from 'react';
import { cx } from '../shared/utils';
export interface M3TopAppBarProps {title:string;leading?:React.ReactNode;trailing?:React.ReactNode;className?:string;}
/** Optics: Heavy Frosted Shell. */
export function M3TopAppBar({title,leading,trailing,className}:M3TopAppBarProps){return <header className={cx('m3-top-app-bar','m3-glass-shell',className)}>{leading&&<div className="m3-top-app-bar__leading">{leading}</div>}<h1 className="m3-top-app-bar__title">{title}</h1>{trailing&&<div className="m3-top-app-bar__trailing">{trailing}</div>}</header>}
