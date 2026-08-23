import React from 'react';
import { cx } from '../shared/utils';
export interface M3TabItem {key:string;label:string;icon?:React.ReactNode;}
export interface M3TabsProps {tabs:M3TabItem[];activeKey:string;onSelect:(key:string)=>void;className?:string;}
/** Optics: Heavy Frosted Shell wrapper; active indicator uses Liquid Gloss. */
export function M3Tabs({tabs,activeKey,onSelect,className}:M3TabsProps){return <div className={cx('m3-tabs','m3-glass-shell',className)} role="tablist">{tabs.map(tab=>{const active=tab.key===activeKey;return <button key={tab.key} role="tab" aria-selected={active} className={cx('m3-tabs__tab',active&&'m3-tabs__tab--active')} onClick={()=>onSelect(tab.key)}>{tab.icon}{tab.label}{active&&<span className="m3-tabs__indicator m3-liquid-gloss"/>}</button>})}</div>}
