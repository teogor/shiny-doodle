import React from 'react';
import { createPortal } from 'react-dom';
import { cx } from '../shared/utils';
export interface M3PopoverProps{open:boolean;onClose:()=>void;anchorRect:{top:number;left:number}|null;children:React.ReactNode;className?:string;}
/** Optics: Heavy Frosted Shell. Portal-rendered. */
export function M3Popover({open,onClose,anchorRect,children,className}:M3PopoverProps){if(!open||!anchorRect)return null;return typeof document==='undefined'?null:createPortal(<><div className="m3-popover__scrim" onClick={onClose}/><div className={cx('m3-popover','m3-glass-shell',className)} role="dialog" style={{position:'fixed',top:anchorRect.top,left:anchorRect.left}}>{children}</div></>,document.body)}
