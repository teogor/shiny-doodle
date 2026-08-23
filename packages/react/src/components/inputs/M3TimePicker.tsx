import React, { useState } from 'react';
import { cx } from '../shared/utils';
export interface M3TimePickerProps {label:string;value:string;onChange:(time:string)=>void;className?:string;}
/** Optics: input field is Recessed Inner Glass; dial popover is a Heavy Frosted Shell. */
export function M3TimePicker({label,value,onChange,className}:M3TimePickerProps){const[open,setOpen]=useState(false);return <div className={cx('m3-time-picker',className)}><button type="button" className="m3-time-picker__field m3-glass-recessed" onClick={()=>setOpen(v=>!v)}><span className="m3-time-picker__label">{label}</span><span className="m3-time-picker__value">{value||'--:--'}</span><span aria-hidden>🕐</span></button>{open&&<div className="m3-time-picker__popover m3-glass-shell" role="dialog" aria-label="Choose time"><input type="time" className="m3-time-picker__native" value={value} onChange={e=>{onChange(e.target.value);setOpen(false)}}/></div>}</div>}
