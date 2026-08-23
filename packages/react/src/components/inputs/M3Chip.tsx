import React from 'react';
import { cx } from '../shared/utils';
export interface M3ChipProps {label:string;icon?:React.ReactNode;selected?:boolean;onClick?:()=>void;onRemove?:()=>void;className?:string;}
/** Optics: Recessed Inner Glass — chips read as input material, not action material. */
export function M3Chip({label,icon,selected,onClick,onRemove,className}:M3ChipProps){return <span className={cx('m3-chip','m3-glass-recessed',selected&&'m3-chip--selected',className)} onClick={onClick} role={onClick?'button':undefined}>{icon&&<span className="m3-chip__icon">{icon}</span>}{label}{onRemove&&<button type="button" className="m3-chip__remove" aria-label={`Remove ${label}`} onClick={e=>{e.stopPropagation();onRemove()}}>✕</button>}</span>}
