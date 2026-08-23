import React, { useId } from 'react';
import { cx } from '../shared/utils';
export interface M3CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>,'type'>{label?:string;indeterminate?:boolean;}
/** Optics: Strict Opaque Shield — glyph legibility over decoration. */
export function M3Checkbox({label,indeterminate,className,id,...rest}:M3CheckboxProps){const autoId=useId();const checkboxId=id??autoId;const ref=React.useRef<HTMLInputElement>(null);React.useEffect(()=>{if(ref.current)ref.current.indeterminate=!!indeterminate},[indeterminate]);return <span className={cx('m3-checkbox','m3-opaque',className)}><input ref={ref} id={checkboxId} type="checkbox" className="m3-checkbox__input" {...rest}/>{label&&<label htmlFor={checkboxId}>{label}</label>}</span>}
