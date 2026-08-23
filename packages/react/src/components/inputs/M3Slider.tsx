import React from 'react';
import { cx } from '../shared/utils';
export interface M3SliderProps {value:number;min?:number;max?:number;step?:number;onChange:(value:number)=>void;label?:string;className?:string;}
/** Optics: track is Recessed Inner Glass; filled portion + handle use Liquid Gloss. */
export function M3Slider({value,min=0,max=100,step=1,onChange,label,className}:M3SliderProps){const percent=((value-min)/(max-min))*100;return <div className={cx('m3-slider',className)}>{label&&<span className="m3-slider__label">{label}</span>}<div className="m3-slider__track m3-glass-recessed"><div className="m3-slider__fill m3-liquid-gloss" style={{width:`${percent}%`}}/><input type="range" className="m3-slider__input" value={value} min={min} max={max} step={step} onChange={e=>onChange(Number(e.target.value))} aria-label={label}/></div></div>}
