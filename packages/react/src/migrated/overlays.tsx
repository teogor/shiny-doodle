import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { cx, useUniqueId } from './shared.js';

// --- M3BottomSheet.tsx ---
export interface M3BottomSheetProps{open:boolean;onClose:()=>void;children:React.ReactNode;className?:string;}
/** Optics: Heavy Frosted Shell. Portal-rendered. */
export function M3BottomSheet({open,onClose,children,className}:M3BottomSheetProps){if(!open)return null;return typeof document==='undefined'?null:createPortal(<div className="m3-bottom-sheet__scrim" onClick={onClose}><div className={cx('m3-bottom-sheet','m3-glass-shell',className)} role="dialog" aria-modal="true" onClick={e=>e.stopPropagation()}><div className="m3-bottom-sheet__handle"/>{children}</div></div>,document.body)}

// --- M3Dialog.tsx ---
export interface M3DialogProps{open:boolean;onClose:()=>void;title:string;children:React.ReactNode;actions?:React.ReactNode;className?:string;}
/** Optics: Heavy Frosted Shell. Portal-rendered above nested glass ancestors. */
export function M3Dialog({open,onClose,title,children,actions,className}:M3DialogProps){if(!open)return null;return typeof document==='undefined'?null:createPortal(<div className="m3-dialog__scrim" onClick={onClose}><div className={cx('m3-dialog','m3-glass-shell',className)} role="dialog" aria-modal="true" aria-label={title} onClick={e=>e.stopPropagation()}><h2 className="m3-dialog__title">{title}</h2><div className="m3-dialog__content">{children}</div>{actions&&<div className="m3-dialog__actions">{actions}</div>}</div></div>,document.body)}

// --- M3Menu.tsx ---
export interface M3MenuItem{label:string;onSelect:()=>void;icon?:React.ReactNode;destructive?:boolean;}
export interface M3MenuProps{open:boolean;onClose:()=>void;anchorRect:{top:number;left:number}|null;items:M3MenuItem[];className?:string;}
/** Optics: Heavy Frosted Shell. */
export function M3Menu({open,onClose,anchorRect,items,className}:M3MenuProps){if(!open||!anchorRect)return null;return typeof document==='undefined'?null:createPortal(<><div className="m3-menu__scrim" onClick={onClose}/><ul className={cx('m3-menu','m3-glass-shell',className)} role="menu" style={{position:'fixed',top:anchorRect.top,left:anchorRect.left}}>{items.map(item=><li key={item.label} role="menuitem"><button className={cx('m3-menu__item',item.destructive&&'m3-menu__item--destructive')} onClick={()=>{item.onSelect();onClose()}}>{item.icon}{item.label}</button></li>)}</ul></>,document.body)}

// --- M3Popover.tsx ---
export interface M3PopoverProps{open:boolean;onClose:()=>void;anchorRect:{top:number;left:number}|null;children:React.ReactNode;className?:string;}
/** Optics: Heavy Frosted Shell. Portal-rendered. */
export function M3Popover({open,onClose,anchorRect,children,className}:M3PopoverProps){if(!open||!anchorRect)return null;return typeof document==='undefined'?null:createPortal(<><div className="m3-popover__scrim" onClick={onClose}/><div className={cx('m3-popover','m3-glass-shell',className)} role="dialog" style={{position:'fixed',top:anchorRect.top,left:anchorRect.left}}>{children}</div></>,document.body)}

// --- M3SideSheet.tsx ---
export interface M3SideSheetProps{open:boolean;onClose:()=>void;title?:string;side?:'left'|'right';children:React.ReactNode;className?:string;}
/** Optics: Heavy Frosted Shell. Portal-rendered. */
export function M3SideSheet({open,onClose,title,side='right',children,className}:M3SideSheetProps){if(!open)return null;return typeof document==='undefined'?null:createPortal(<div className="m3-side-sheet__scrim" onClick={onClose}><aside className={cx('m3-side-sheet',`m3-side-sheet--${side}`,'m3-glass-shell',className)} role="dialog" aria-modal="true" aria-label={title} onClick={e=>e.stopPropagation()}>{title&&<h2 className="m3-side-sheet__title">{title}</h2>}<div className="m3-side-sheet__content">{children}</div></aside></div>,document.body)}

// --- M3Tooltip.tsx ---
export interface M3TooltipProps{label:string;children:React.ReactElement;className?:string;}
/** Optics: Strict Opaque Shield. */
export function M3Tooltip({label,children,className}:M3TooltipProps){const[visible,setVisible]=useState(false);return <span className="m3-tooltip-wrapper" onMouseEnter={()=>setVisible(true)} onMouseLeave={()=>setVisible(false)} onFocus={()=>setVisible(true)} onBlur={()=>setVisible(false)}>{children}{visible&&<span role="tooltip" className={cx('m3-tooltip','m3-opaque',className)}>{label}</span>}</span>}
