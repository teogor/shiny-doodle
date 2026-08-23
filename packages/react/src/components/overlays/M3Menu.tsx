import React from 'react';
import { createPortal } from 'react-dom';
import { cx } from '../shared/utils';
export interface M3MenuItem{label:string;onSelect:()=>void;icon?:React.ReactNode;destructive?:boolean;}
export interface M3MenuProps{open:boolean;onClose:()=>void;anchorRect:{top:number;left:number}|null;items:M3MenuItem[];className?:string;}
/** Optics: Heavy Frosted Shell. */
export function M3Menu({open,onClose,anchorRect,items,className}:M3MenuProps){if(!open||!anchorRect)return null;return typeof document==='undefined'?null:createPortal(<><div className="m3-menu__scrim" onClick={onClose}/><ul className={cx('m3-menu','m3-glass-shell',className)} role="menu" style={{position:'fixed',top:anchorRect.top,left:anchorRect.left}}>{items.map(item=><li key={item.label} role="menuitem"><button className={cx('m3-menu__item',item.destructive&&'m3-menu__item--destructive')} onClick={()=>{item.onSelect();onClose()}}>{item.icon}{item.label}</button></li>)}</ul></>,document.body)}
