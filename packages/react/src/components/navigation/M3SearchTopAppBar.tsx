import React from 'react';
import { cx } from '../shared/utils';
import { M3SearchField } from '../inputs/M3SearchField';
export interface M3SearchTopAppBarProps {query:string;onQueryChange:(value:string)=>void;leading?:React.ReactNode;trailing?:React.ReactNode;className?:string;}
/** Optics: bar shell is Heavy Frosted Shell; embedded field stays Recessed Inner Glass. */
export function M3SearchTopAppBar({query,onQueryChange,leading,trailing,className}:M3SearchTopAppBarProps){return <header className={cx('m3-search-top-app-bar','m3-glass-shell',className)}>{leading}<M3SearchField value={query} onChange={onQueryChange} className="m3-search-top-app-bar__field"/>{trailing}</header>}
