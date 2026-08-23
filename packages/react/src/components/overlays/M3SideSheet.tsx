import React from 'react';
import { createPortal } from 'react-dom';
import { cx } from '../shared/utils';
export interface M3SideSheetProps{open:boolean;onClose:()=>void;title?:string;side?:'left'|'right';children:React.ReactNode;className?:string;}
/** Optics: Heavy Frosted Shell. Portal-rendered. */
export function M3SideSheet({open,onClose,title,side='right',children,className}:M3SideSheetProps){if(!open)return null;return typeof document==='undefined'?null:createPortal(<div className="m3-side-sheet__scrim" onClick={onClose}><aside className={cx('m3-side-sheet',`m3-side-sheet--${side}`,'m3-glass-shell',className)} role="dialog" aria-modal="true" aria-label={title} onClick={e=>e.stopPropagation()}>{title&&<h2 className="m3-side-sheet__title">{title}</h2>}<div className="m3-side-sheet__content">{children}</div></aside></div>,document.body)}
