import React from 'react';
import { createPortal } from 'react-dom';
import { cx } from '../shared/utils';
export interface M3DialogProps{open:boolean;onClose:()=>void;title:string;children:React.ReactNode;actions?:React.ReactNode;className?:string;}
/** Optics: Heavy Frosted Shell. Portal-rendered above nested glass ancestors. */
export function M3Dialog({open,onClose,title,children,actions,className}:M3DialogProps){if(!open)return null;return typeof document==='undefined'?null:createPortal(<div className="m3-dialog__scrim" onClick={onClose}><div className={cx('m3-dialog','m3-glass-shell',className)} role="dialog" aria-modal="true" aria-label={title} onClick={e=>e.stopPropagation()}><h2 className="m3-dialog__title">{title}</h2><div className="m3-dialog__content">{children}</div>{actions&&<div className="m3-dialog__actions">{actions}</div>}</div></div>,document.body)}
