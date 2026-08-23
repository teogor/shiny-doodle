import React from 'react';
import { cx } from '../shared/utils';
export interface M3SearchFieldProps {value:string;onChange:(value:string)=>void;placeholder?:string;onSubmit?:()=>void;className?:string;}
/** Optics: Recessed Inner Glass. */
export function M3SearchField({value,onChange,placeholder='Search',onSubmit,className}:M3SearchFieldProps){return <form className={cx('m3-search-field','m3-glass-recessed',className)} onSubmit={e=>{e.preventDefault();onSubmit?.()}} role="search"><span className="m3-search-field__icon" aria-hidden>🔍</span><input className="m3-search-field__control" value={value} onChange={e=>onChange(e.target.value)} placeholder={placeholder} aria-label={placeholder}/>{value&&<button type="button" className="m3-search-field__clear" aria-label="Clear search" onClick={()=>onChange('')}>✕</button>}</form>}
