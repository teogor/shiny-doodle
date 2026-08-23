import React from 'react';
import { cx } from '../shared/utils';
export interface M3BottomAppBarProps {children:React.ReactNode;fab?:React.ReactNode;className?:string;}
/** Optics: Heavy Frosted Shell. */
export function M3BottomAppBar({children,fab,className}:M3BottomAppBarProps){return <footer className={cx('m3-bottom-app-bar','m3-glass-shell',className)}><div className="m3-bottom-app-bar__actions">{children}</div>{fab&&<div className="m3-bottom-app-bar__fab">{fab}</div>}</footer>}
