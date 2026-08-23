import React from 'react';
import { createPortal } from 'react-dom';
import { cx } from '../shared/utils';
export interface M3BottomSheetProps{open:boolean;onClose:()=>void;children:React.ReactNode;className?:string;}
/** Optics: Heavy Frosted Shell. Portal-rendered. */
export function M3BottomSheet({open,onClose,children,className}:M3BottomSheetProps){if(!open)return null;return typeof document==='undefined'?null:createPortal(<div className="m3-bottom-sheet__scrim" onClick={onClose}><div className={cx('m3-bottom-sheet','m3-glass-shell',className)} role="dialog" aria-modal="true" onClick={e=>e.stopPropagation()}><div className="m3-bottom-sheet__handle"/>{children}</div></div>,document.body)}
