import React from 'react';
import { cx } from '../shared/utils';
export interface M3NavigationRailItem {key:string;icon:React.ReactNode;label:string;}
export interface M3NavigationRailProps {items:M3NavigationRailItem[];activeKey:string;onSelect:(key:string)=>void;header?:React.ReactNode;className?:string;}
/** Optics: Heavy Frosted Shell. */
export function M3NavigationRail({items,activeKey,onSelect,header,className}:M3NavigationRailProps){return <nav className={cx('m3-navigation-rail','m3-glass-shell',className)} aria-label="Primary">{header&&<div className="m3-navigation-rail__header">{header}</div>}{items.map(item=><button key={item.key} className={cx('m3-navigation-rail__item',item.key===activeKey&&'m3-navigation-rail__item--active')} aria-current={item.key===activeKey?'page':undefined} onClick={()=>onSelect(item.key)}><span className="m3-navigation-rail__icon">{item.icon}</span><span className="m3-navigation-rail__label">{item.label}</span></button>)}</nav>}
