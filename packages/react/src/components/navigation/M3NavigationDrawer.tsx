import React from 'react';
import { cx } from '../shared/utils';
export interface M3NavigationDrawerSection {title?:string;items:{key:string;icon?:React.ReactNode;label:string}[];}
export interface M3NavigationDrawerProps {sections:M3NavigationDrawerSection[];activeKey:string;onSelect:(key:string)=>void;open:boolean;onClose:()=>void;className?:string;}
/** Optics: Heavy Frosted Shell. */
export function M3NavigationDrawer({sections,activeKey,onSelect,open,onClose,className}:M3NavigationDrawerProps){if(!open)return null;return <><div className="m3-navigation-drawer__scrim" onClick={onClose}/><nav className={cx('m3-navigation-drawer','m3-glass-shell',className)} aria-label="Navigation drawer">{sections.map((section,i)=><div className="m3-navigation-drawer__section" key={section.title??i}>{section.title&&<h3 className="m3-navigation-drawer__title">{section.title}</h3>}{section.items.map(item=><button key={item.key} className={cx('m3-navigation-drawer__item',item.key===activeKey&&'m3-navigation-drawer__item--active')} onClick={()=>onSelect(item.key)}>{item.icon}{item.label}</button>)}</div>)}</nav></>}
