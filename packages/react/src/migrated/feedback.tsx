import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { cx, useUniqueId } from './shared.js';

// --- M3Badge.tsx ---
export interface M3BadgeProps { count?: number; max?: number; dot?: boolean; className?: string; }
/** Optics: Strict Opaque Shield — a badge's number must always be pin-sharp. */
export function M3Badge({ count,max=99,dot,className }: M3BadgeProps) { if(dot) return <span className={cx('m3-badge','m3-badge--dot','m3-opaque',className}/>; const display=count!==undefined&&count>max?`${max}+`:count; return <span className={cx('m3-badge','m3-opaque',className)} aria-label={`${count} notifications`}>{display}</span>; }

// --- M3Progress.tsx ---
export interface M3ProgressProps { value?: number; indeterminate?: boolean; className?: string; }
/** Optics: track is Recessed Inner Glass; the fill is Liquid Gloss. */
export function M3Progress({ value=0,indeterminate,className }: M3ProgressProps) { return <div className={cx('m3-progress','m3-glass-recessed',className)} role="progressbar" aria-valuenow={indeterminate?undefined:value} aria-valuemin={0} aria-valuemax={100}><div className={cx('m3-progress__fill','m3-liquid-gloss',indeterminate&&'m3-progress__fill--indeterminate')} style={indeterminate?undefined:{width:`${value}%`}}/></div>; }

// --- M3Skeleton.tsx ---
export interface M3SkeletonProps { width?: number|string; height?: number|string; variant?: 'text'|'rect'|'circle'; className?: string; }
/** Optics: Heavy Frosted Shell — a loading placeholder should already look like the glass surface it fills. */
export function M3Skeleton({ width='100%',height=16,variant='rect',className }: M3SkeletonProps) { return <div className={cx('m3-skeleton',`m3-skeleton--${variant}`,'m3-glass-shell',className)} style={{width,height}} aria-hidden/>; }

// --- M3Snackbar.tsx ---
export interface M3SnackbarProps { open:boolean; message:string; actionLabel?:string; onAction?:()=>void; onClose:()=>void; durationMs?:number; className?:string; }
/** Optics: Heavy Frosted Shell. Portal-rendered above app content. */
export function M3Snackbar({ open,message,actionLabel,onAction,onClose,durationMs=4000,className }: M3SnackbarProps) { useEffect(()=>{if(!open)return; const timer=setTimeout(onClose,durationMs); return ()=>clearTimeout(timer);},[open,durationMs,onClose]); if(!open)return null; return typeof document==='undefined'?null:createPortal(<div className={cx('m3-snackbar','m3-glass-shell',className)} role="status"><span className="m3-snackbar__message">{message}</span>{actionLabel&&<button className="m3-snackbar__action" onClick={onAction}>{actionLabel}</button>}</div>,document.body); }

// --- M3StateLayer.tsx ---
export interface M3StateLayerProps { children:React.ReactNode; className?:string; }
/** Optics: Recessed Inner Glass. */
export function M3StateLayer({ children,className }: M3StateLayerProps) { return <span className={cx('m3-state-layer','m3-glass-recessed',className)}>{children}</span>; }
