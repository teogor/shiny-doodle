import React from 'react';
import { cx, useUniqueId } from './shared.js';
import { M3SearchField } from './inputs.js';

// --- M3BottomAppBar.tsx ---
export interface M3BottomAppBarProps {children:React.ReactNode;fab?:React.ReactNode;className?:string;}
/** Optics: Heavy Frosted Shell. */
export function M3BottomAppBar({children,fab,className}:M3BottomAppBarProps){return <footer className={cx('m3-bottom-app-bar','m3-glass-shell',className)}><div className="m3-bottom-app-bar__actions">{children}</div>{fab&&<div className="m3-bottom-app-bar__fab">{fab}</div>}</footer>}

// --- M3DockedToolbar.tsx ---
export interface M3DockedToolbarProps {children:React.ReactNode;position?:'top'|'bottom'|'floating';className?:string;}
/** Optics: Heavy Frosted Shell. */
export function M3DockedToolbar({children,position='floating',className}:M3DockedToolbarProps){return <div className={cx('m3-docked-toolbar',`m3-docked-toolbar--${position}`,'m3-glass-shell',className)}>{children}</div>}

// --- M3NavigationBar.tsx ---
export interface M3NavigationBarItem {key:string;icon:React.ReactNode;label:string;badgeCount?:number;}
export interface M3NavigationBarProps {items:M3NavigationBarItem[];activeKey:string;onSelect:(key:string)=>void;className?:string;}
/** Optics: Heavy Frosted Shell. */
export function M3NavigationBar({items,activeKey,onSelect,className}:M3NavigationBarProps){return <nav className={cx('m3-navigation-bar','m3-glass-shell',className)} aria-label="Primary">{items.map(item=><button key={item.key} className={cx('m3-navigation-bar__item',item.key===activeKey&&'m3-navigation-bar__item--active')} aria-current={item.key===activeKey?'page':undefined} onClick={()=>onSelect(item.key)}><span className="m3-navigation-bar__icon">{item.icon}{!!item.badgeCount&&<span className="m3-navigation-bar__badge m3-opaque">{item.badgeCount}</span>}</span><span className="m3-navigation-bar__label">{item.label}</span></button>)}</nav>}

// --- M3NavigationDrawer.tsx ---
export interface M3NavigationDrawerSection {title?:string;items:{key:string;icon?:React.ReactNode;label:string}[];}
export interface M3NavigationDrawerProps {sections:M3NavigationDrawerSection[];activeKey:string;onSelect:(key:string)=>void;open:boolean;onClose:()=>void;className?:string;}
/** Optics: Heavy Frosted Shell. */
export function M3NavigationDrawer({sections,activeKey,onSelect,open,onClose,className}:M3NavigationDrawerProps){if(!open)return null;return <><div className="m3-navigation-drawer__scrim" onClick={onClose}/><nav className={cx('m3-navigation-drawer','m3-glass-shell',className)} aria-label="Navigation drawer">{sections.map((section,i)=><div className="m3-navigation-drawer__section" key={section.title??i}>{section.title&&<h3 className="m3-navigation-drawer__title">{section.title}</h3>}{section.items.map(item=><button key={item.key} className={cx('m3-navigation-drawer__item',item.key===activeKey&&'m3-navigation-drawer__item--active')} onClick={()=>onSelect(item.key)}>{item.icon}{item.label}</button>)}</div>)}</nav></>}

// --- M3NavigationRail.tsx ---
export interface M3NavigationRailItem {key:string;icon:React.ReactNode;label:string;}
export interface M3NavigationRailProps {items:M3NavigationRailItem[];activeKey:string;onSelect:(key:string)=>void;header?:React.ReactNode;className?:string;}
/** Optics: Heavy Frosted Shell. */
export function M3NavigationRail({items,activeKey,onSelect,header,className}:M3NavigationRailProps){return <nav className={cx('m3-navigation-rail','m3-glass-shell',className)} aria-label="Primary">{header&&<div className="m3-navigation-rail__header">{header}</div>}{items.map(item=><button key={item.key} className={cx('m3-navigation-rail__item',item.key===activeKey&&'m3-navigation-rail__item--active')} aria-current={item.key===activeKey?'page':undefined} onClick={()=>onSelect(item.key)}><span className="m3-navigation-rail__icon">{item.icon}</span><span className="m3-navigation-rail__label">{item.label}</span></button>)}</nav>}

// --- M3SearchTopAppBar.tsx ---
export interface M3SearchTopAppBarProps {query:string;onQueryChange:(value:string)=>void;leading?:React.ReactNode;trailing?:React.ReactNode;className?:string;}
/** Optics: bar shell is Heavy Frosted Shell; embedded field stays Recessed Inner Glass. */
export function M3SearchTopAppBar({query,onQueryChange,leading,trailing,className}:M3SearchTopAppBarProps){return <header className={cx('m3-search-top-app-bar','m3-glass-shell',className)}>{leading}<M3SearchField value={query} onChange={onQueryChange} className="m3-search-top-app-bar__field"/>{trailing}</header>}

// --- M3Tabs.tsx ---
export interface M3TabItem {key:string;label:string;icon?:React.ReactNode;}
export interface M3TabsProps {tabs:M3TabItem[];activeKey:string;onSelect:(key:string)=>void;className?:string;}
/** Optics: Heavy Frosted Shell wrapper; active indicator uses Liquid Gloss. */
export function M3Tabs({tabs,activeKey,onSelect,className}:M3TabsProps){return <div className={cx('m3-tabs','m3-glass-shell',className)} role="tablist">{tabs.map(tab=>{const active=tab.key===activeKey;return <button key={tab.key} role="tab" aria-selected={active} className={cx('m3-tabs__tab',active&&'m3-tabs__tab--active')} onClick={()=>onSelect(tab.key)}>{tab.icon}{tab.label}{active&&<span className="m3-tabs__indicator m3-liquid-gloss"/>}</button>})}</div>}

// --- M3TopAppBar.tsx ---
export interface M3TopAppBarProps {title:string;leading?:React.ReactNode;trailing?:React.ReactNode;className?:string;}
/** Optics: Heavy Frosted Shell. */
export function M3TopAppBar({title,leading,trailing,className}:M3TopAppBarProps){return <header className={cx('m3-top-app-bar','m3-glass-shell',className)}>{leading&&<div className="m3-top-app-bar__leading">{leading}</div>}<h1 className="m3-top-app-bar__title">{title}</h1>{trailing&&<div className="m3-top-app-bar__trailing">{trailing}</div>}</header>}
