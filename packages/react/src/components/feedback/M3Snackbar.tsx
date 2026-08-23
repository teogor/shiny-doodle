import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { cx } from '../shared/utils';
export interface M3SnackbarProps { open:boolean; message:string; actionLabel?:string; onAction?:()=>void; onClose:()=>void; durationMs?:number; className?:string; }
/** Optics: Heavy Frosted Shell. Portal-rendered above app content. */
export function M3Snackbar({ open,message,actionLabel,onAction,onClose,durationMs=4000,className }: M3SnackbarProps) { useEffect(()=>{if(!open)return; const timer=setTimeout(onClose,durationMs); return ()=>clearTimeout(timer);},[open,durationMs,onClose]); if(!open)return null; return typeof document==='undefined'?null:createPortal(<div className={cx('m3-snackbar','m3-glass-shell',className)} role="status"><span className="m3-snackbar__message">{message}</span>{actionLabel&&<button className="m3-snackbar__action" onClick={onAction}>{actionLabel}</button>}</div>,document.body); }
