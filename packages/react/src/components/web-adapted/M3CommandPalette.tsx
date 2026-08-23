import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { cx } from '../shared/utils';
export interface M3CommandPaletteItem{key:string;label:string;hint?:string;onRun:()=>void;}
export interface M3CommandPaletteProps{open:boolean;onClose:()=>void;items:M3CommandPaletteItem[];className?:string;}
/** Optics: shell Heavy Frosted Shell; search input Recessed Inner Glass. */
export function M3CommandPalette({open,onClose,items,className}:M3CommandPaletteProps){const[query,setQuery]=useState('');if(!open)return null;const filtered=items.filter(item=>item.label.toLowerCase().includes(query.toLowerCase()));return typeof document==='undefined'?null:createPortal(<div className="m3-command-palette__scrim" onClick={onClose}><div className={cx('m3-command-palette','m3-glass-shell',className)} role="dialog" aria-label="Command palette" onClick={e=>e.stopPropagation()}><input autoFocus className="m3-command-palette__input m3-glass-recessed" placeholder="Type a command…" value={query} onChange={e=>setQuery(e.target.value)}/><ul className="m3-command-palette__list">{filtered.map(item=><li key={item.key}><button onClick={()=>{item.onRun();onClose()}}><span>{item.label}</span>{item.hint&&<span className="m3-command-palette__hint">{item.hint}</span>}</button></li>)}</ul></div></div>,document.body)}
