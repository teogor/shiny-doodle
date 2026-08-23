import React from 'react';
import { cx } from '../shared/utils';
export interface M3SwitchProps {checked:boolean;onChange:(checked:boolean)=>void;label?:string;disabled?:boolean;className?:string;}
/** Optics: track is Recessed Inner Glass; thumb carries Liquid Gloss highlight when on. */
export function M3Switch({checked,onChange,label,disabled,className}:M3SwitchProps){return <label className={cx('m3-switch',disabled&&'m3-switch--disabled',className)}><span className={cx('m3-switch__track','m3-glass-recessed',checked&&'m3-switch__track--on')} role="switch" aria-checked={checked} aria-disabled={disabled} onClick={()=>!disabled&&onChange(!checked)}><span className={cx('m3-switch__thumb',checked&&'m3-liquid-gloss')}/></span>{label&&<span className="m3-switch__label">{label}</span>}</label>}
