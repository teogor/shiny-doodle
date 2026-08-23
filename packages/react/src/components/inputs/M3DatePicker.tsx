import React, { useState } from 'react';
import { cx } from '../shared/utils';
export interface M3DatePickerProps {label:string;value:string;onChange:(isoDate:string)=>void;className?:string;}
/** Optics: input field is Recessed Inner Glass; calendar popover is a Heavy Frosted Shell. */
export function M3DatePicker({label,value,onChange,className}:M3DatePickerProps){const[open,setOpen]=useState(false);return <div className={cx('m3-date-picker',className)}><button type="button" className="m3-date-picker__field m3-glass-recessed" onClick={()=>setOpen(v=>!v)}><span className="m3-date-picker__label">{label}</span><span className="m3-date-picker__value">{value||'Select date'}</span><span aria-hidden>📅</span></button>{open&&<div className="m3-date-picker__popover m3-glass-shell" role="dialog" aria-label="Choose date"><input type="date" className="m3-date-picker__native" value={value} onChange={e=>{onChange(e.target.value);setOpen(false)}}/></div>}</div>}
