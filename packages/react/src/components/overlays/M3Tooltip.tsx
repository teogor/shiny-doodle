import React, { useState } from 'react';
import { cx } from '../shared/utils';
export interface M3TooltipProps{label:string;children:React.ReactElement;className?:string;}
/** Optics: Strict Opaque Shield. */
export function M3Tooltip({label,children,className}:M3TooltipProps){const[visible,setVisible]=useState(false);return <span className="m3-tooltip-wrapper" onMouseEnter={()=>setVisible(true)} onMouseLeave={()=>setVisible(false)} onFocus={()=>setVisible(true)} onBlur={()=>setVisible(false)}>{children}{visible&&<span role="tooltip" className={cx('m3-tooltip','m3-opaque',className)}>{label}</span>}</span>}
