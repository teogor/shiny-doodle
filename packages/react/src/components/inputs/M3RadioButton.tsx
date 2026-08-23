import React, { useId } from 'react';
import { cx } from '../shared/utils';
export interface M3RadioButtonProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>,'type'>{label?:string;}
/** Optics: Strict Opaque Shield. */
export function M3RadioButton({label,className,id,...rest}:M3RadioButtonProps){const autoId=useId();const radioId=id??autoId;return <span className={cx('m3-radio','m3-opaque',className)}><input id={radioId} type="radio" className="m3-radio__input" {...rest}/>{label&&<label htmlFor={radioId}>{label}</label>}</span>}
