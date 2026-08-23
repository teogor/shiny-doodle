import React, { useState } from 'react';
import { cx } from '../shared/utils';
export interface M3DropdownOption {value:string;label:string;}
export interface M3DropdownProps {label:string;value:string;options:M3DropdownOption[];onChange:(value:string)=>void;className?:string;}
/** Optics: field is Recessed Inner Glass; open menu is a Heavy Frosted Shell. */
export function M3Dropdown({label,value,options,onChange,className}:M3DropdownProps){const[open,setOpen]=useState(false);const selectedLabel=options.find(o=>o.value===value)?.label??'';return <div className={cx('m3-dropdown',className)}><button type="button" className="m3-dropdown__field m3-glass-recessed" aria-haspopup="listbox" aria-expanded={open} onClick={()=>setOpen(v=>!v)}><span className="m3-dropdown__label">{label}</span><span className="m3-dropdown__value">{selectedLabel}</span><span className="m3-dropdown__caret" aria-hidden>▾</span></button>{open&&<ul className="m3-dropdown__menu m3-glass-shell" role="listbox">{options.map(opt=><li key={opt.value} role="option" aria-selected={opt.value===value}><button onClick={()=>{onChange(opt.value);setOpen(false)}}>{opt.label}</button></li>)}</ul>}</div>}
