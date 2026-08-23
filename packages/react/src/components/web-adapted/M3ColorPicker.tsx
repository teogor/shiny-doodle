import React from 'react';
import { cx } from '../shared/utils';
export interface M3ColorPickerProps{value:string;onChange:(hex:string)=>void;swatches?:string[];className?:string;}
/** Optics: panel Heavy Frosted Shell; hex input Recessed Inner Glass; swatches Strict Opaque Shield. */
export function M3ColorPicker({value,onChange,swatches=[],className}:M3ColorPickerProps){return <div className={cx('m3-color-picker','m3-glass-shell',className)}><div className="m3-color-picker__preview m3-opaque" style={{background:value}}/><input className="m3-color-picker__hex m3-glass-recessed" value={value} onChange={e=>onChange(e.target.value)} aria-label="Hex color value"/>{swatches.length>0&&<div className="m3-color-picker__swatches">{swatches.map(swatch=><button key={swatch} className="m3-color-picker__swatch m3-opaque" style={{background:swatch}} aria-label={`Use color ${swatch}`} onClick={()=>onChange(swatch)}/>)}</div>}</div>}
