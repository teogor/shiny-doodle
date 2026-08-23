import React, { useState } from 'react';
import { cx } from '../shared/utils';
export interface M3ComparisonSliderProps{before:React.ReactNode;after:React.ReactNode;className?:string;}
/** Optics: frame Heavy Frosted Shell; handle track Recessed Inner Glass. */
export function M3ComparisonSlider({before,after,className}:M3ComparisonSliderProps){const[position,setPosition]=useState(50);return <div className={cx('m3-comparison-slider','m3-glass-shell',className)}><div className="m3-comparison-slider__after">{after}</div><div className="m3-comparison-slider__before" style={{clipPath:`inset(0 ${100-position}% 0 0)`}}>{before}</div><div className="m3-comparison-slider__handle-track m3-glass-recessed"><input type="range" min={0} max={100} value={position} onChange={e=>setPosition(Number(e.target.value))} aria-label="Comparison position"/></div></div>}
