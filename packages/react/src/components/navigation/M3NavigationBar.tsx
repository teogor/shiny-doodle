import React from 'react';
import { cx } from '../shared/utils';
export interface M3NavigationBarItem {key:string;icon:React.ReactNode;label:string;badgeCount?:number;}
export interface M3NavigationBarProps {items:M3NavigationBarItem[];activeKey:string;onSelect:(key:string)=>void;className?:string;}
/** Optics: Heavy Frosted Shell. */
export function M3NavigationBar({items,activeKey,onSelect,className}:M3NavigationBarProps){return <nav className={cx('m3-navigation-bar','m3-glass-shell',className)} aria-label="Primary">{items.map(item=><button key={item.key} className={cx('m3-navigation-bar__item',item.key===activeKey&&'m3-navigation-bar__item--active')} aria-current={item.key===activeKey?'page':undefined} onClick={()=>onSelect(item.key)}><span className="m3-navigation-bar__icon">{item.icon}{!!item.badgeCount&&<span className="m3-navigation-bar__badge m3-opaque">{item.badgeCount}</span>}</span><span className="m3-navigation-bar__label">{item.label}</span></button>)}</nav>}
