import React, { useState } from 'react';
import { cx, useUniqueId } from './shared.js';
const useId = React.useId;

// --- M3Checkbox.tsx ---
export interface M3CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>,'type'>{label?:string;indeterminate?:boolean;}
/** Optics: Strict Opaque Shield — glyph legibility over decoration. */
export function M3Checkbox({label,indeterminate,className,id,...rest}:M3CheckboxProps){const autoId=useId();const checkboxId=id??autoId;const ref=React.useRef<HTMLInputElement>(null);React.useEffect(()=>{if(ref.current)ref.current.indeterminate=!!indeterminate},[indeterminate]);return <span className={cx('m3-checkbox','m3-opaque',className)}><input ref={ref} id={checkboxId} type="checkbox" className="m3-checkbox__input" {...rest}/>{label&&<label htmlFor={checkboxId}>{label}</label>}</span>}

// --- M3Chip.tsx ---
export interface M3ChipProps {label:string;icon?:React.ReactNode;selected?:boolean;onClick?:()=>void;onRemove?:()=>void;className?:string;}
/** Optics: Recessed Inner Glass — chips read as input material, not action material. */
export function M3Chip({label,icon,selected,onClick,onRemove,className}:M3ChipProps){return <span className={cx('m3-chip','m3-glass-recessed',selected&&'m3-chip--selected',className)} onClick={onClick} role={onClick?'button':undefined}>{icon&&<span className="m3-chip__icon">{icon}</span>}{label}{onRemove&&<button type="button" className="m3-chip__remove" aria-label={`Remove ${label}`} onClick={e=>{e.stopPropagation();onRemove()}}>✕</button>}</span>}

// --- M3DatePicker.tsx ---
export interface M3DatePickerProps {label:string;value:string;onChange:(isoDate:string)=>void;className?:string;}
/** Optics: input field is Recessed Inner Glass; calendar popover is a Heavy Frosted Shell. */
export function M3DatePicker({label,value,onChange,className}:M3DatePickerProps){const[open,setOpen]=useState(false);return <div className={cx('m3-date-picker',className)}><button type="button" className="m3-date-picker__field m3-glass-recessed" onClick={()=>setOpen(v=>!v)}><span className="m3-date-picker__label">{label}</span><span className="m3-date-picker__value">{value||'Select date'}</span><span aria-hidden>📅</span></button>{open&&<div className="m3-date-picker__popover m3-glass-shell" role="dialog" aria-label="Choose date"><input type="date" className="m3-date-picker__native" value={value} onChange={e=>{onChange(e.target.value);setOpen(false)}}/></div>}</div>}

// --- M3Dropdown.tsx ---
export interface M3DropdownOption {value:string;label:string;}
export interface M3DropdownProps {label:string;value:string;options:M3DropdownOption[];onChange:(value:string)=>void;className?:string;}
/** Optics: field is Recessed Inner Glass; open menu is a Heavy Frosted Shell. */
export function M3Dropdown({label,value,options,onChange,className}:M3DropdownProps){const[open,setOpen]=useState(false);const selectedLabel=options.find(o=>o.value===value)?.label??'';return <div className={cx('m3-dropdown',className)}><button type="button" className="m3-dropdown__field m3-glass-recessed" aria-haspopup="listbox" aria-expanded={open} onClick={()=>setOpen(v=>!v)}><span className="m3-dropdown__label">{label}</span><span className="m3-dropdown__value">{selectedLabel}</span><span className="m3-dropdown__caret" aria-hidden>▾</span></button>{open&&<ul className="m3-dropdown__menu m3-glass-shell" role="listbox">{options.map(opt=><li key={opt.value} role="option" aria-selected={opt.value===value}><button onClick={()=>{onChange(opt.value);setOpen(false)}}>{opt.label}</button></li>)}</ul>}</div>}

// --- M3Input.tsx ---
export interface M3InputProps extends React.InputHTMLAttributes<HTMLInputElement>{label:string;supportingText?:string;error?:boolean;leadingIcon?:React.ReactNode;trailingIcon?:React.ReactNode;}
/** Optics: Recessed Inner Glass — never blurred, carved via inset shadow. */
export function M3Input({label,supportingText,error,leadingIcon,trailingIcon,className,id,...rest}:M3InputProps){const autoId=useId();const inputId=id??autoId;return <div className={cx('m3-input',error&&'m3-input--error',className)}><div className="m3-input__field m3-glass-recessed">{leadingIcon&&<span className="m3-input__icon">{leadingIcon}</span>}<input id={inputId} className="m3-input__control" placeholder=" " {...rest}/><label htmlFor={inputId} className="m3-input__label">{label}</label>{trailingIcon&&<span className="m3-input__icon">{trailingIcon}</span>}</div>{supportingText&&<p className="m3-input__supporting-text">{supportingText}</p>}</div>}

// --- M3RadioButton.tsx ---
export interface M3RadioButtonProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>,'type'>{label?:string;}
/** Optics: Strict Opaque Shield. */
export function M3RadioButton({label,className,id,...rest}:M3RadioButtonProps){const autoId=useId();const radioId=id??autoId;return <span className={cx('m3-radio','m3-opaque',className)}><input id={radioId} type="radio" className="m3-radio__input" {...rest}/>{label&&<label htmlFor={radioId}>{label}</label>}</span>}

// --- M3SearchField.tsx ---
export interface M3SearchFieldProps {value:string;onChange:(value:string)=>void;placeholder?:string;onSubmit?:()=>void;className?:string;}
/** Optics: Recessed Inner Glass. */
export function M3SearchField({value,onChange,placeholder='Search',onSubmit,className}:M3SearchFieldProps){return <form className={cx('m3-search-field','m3-glass-recessed',className)} onSubmit={e=>{e.preventDefault();onSubmit?.()}} role="search"><span className="m3-search-field__icon" aria-hidden>🔍</span><input className="m3-search-field__control" value={value} onChange={e=>onChange(e.target.value)} placeholder={placeholder} aria-label={placeholder}/>{value&&<button type="button" className="m3-search-field__clear" aria-label="Clear search" onClick={()=>onChange('')}>✕</button>}</form>}

// --- M3Slider.tsx ---
export interface M3SliderProps {value:number;min?:number;max?:number;step?:number;onChange:(value:number)=>void;label?:string;className?:string;}
/** Optics: track is Recessed Inner Glass; filled portion + handle use Liquid Gloss. */
export function M3Slider({value,min=0,max=100,step=1,onChange,label,className}:M3SliderProps){const percent=((value-min)/(max-min))*100;return <div className={cx('m3-slider',className)}>{label&&<span className="m3-slider__label">{label}</span>}<div className="m3-slider__track m3-glass-recessed"><div className="m3-slider__fill m3-liquid-gloss" style={{width:`${percent}%`}}/><input type="range" className="m3-slider__input" value={value} min={min} max={max} step={step} onChange={e=>onChange(Number(e.target.value))} aria-label={label}/></div></div>}

// --- M3Switch.tsx ---
export interface M3SwitchProps {checked:boolean;onChange:(checked:boolean)=>void;label?:string;disabled?:boolean;className?:string;}
/** Optics: track is Recessed Inner Glass; thumb carries Liquid Gloss highlight when on. */
export function M3Switch({checked,onChange,label,disabled,className}:M3SwitchProps){return <label className={cx('m3-switch',disabled&&'m3-switch--disabled',className)}><span className={cx('m3-switch__track','m3-glass-recessed',checked&&'m3-switch__track--on')} role="switch" aria-checked={checked} aria-disabled={disabled} onClick={()=>!disabled&&onChange(!checked)}><span className={cx('m3-switch__thumb',checked&&'m3-liquid-gloss')}/></span>{label&&<span className="m3-switch__label">{label}</span>}</label>}

// --- M3TimePicker.tsx ---
export interface M3TimePickerProps {label:string;value:string;onChange:(time:string)=>void;className?:string;}
/** Optics: input field is Recessed Inner Glass; dial popover is a Heavy Frosted Shell. */
export function M3TimePicker({label,value,onChange,className}:M3TimePickerProps){const[open,setOpen]=useState(false);return <div className={cx('m3-time-picker',className)}><button type="button" className="m3-time-picker__field m3-glass-recessed" onClick={()=>setOpen(v=>!v)}><span className="m3-time-picker__label">{label}</span><span className="m3-time-picker__value">{value||'--:--'}</span><span aria-hidden>🕐</span></button>{open&&<div className="m3-time-picker__popover m3-glass-shell" role="dialog" aria-label="Choose time"><input type="time" className="m3-time-picker__native" value={value} onChange={e=>{onChange(e.target.value);setOpen(false)}}/></div>}</div>}
