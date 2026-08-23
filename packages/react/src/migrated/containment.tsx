import React, { useState } from 'react';
import { cx, useUniqueId } from './shared.js';

// --- M3Accordion.tsx ---
export interface M3AccordionSection { key: string; title: string; content: React.ReactNode; }
export interface M3AccordionProps { sections: M3AccordionSection[]; className?: string; }
/** Optics: Heavy Frosted Shell. */
export function M3Accordion({ sections, className }: M3AccordionProps) { const [openKey, setOpenKey] = useState<string | null>(sections[0]?.key ?? null); return <div className={cx('m3-accordion','m3-glass-shell',className)}>{sections.map(section => { const open=openKey===section.key; return <div className="m3-accordion__section" key={section.key}><button className="m3-accordion__header" aria-expanded={open} onClick={()=>setOpenKey(open?null:section.key)}>{section.title}<span className={cx('m3-accordion__chevron',open&&'m3-accordion__chevron--open')}>▾</span></button>{open&&<div className="m3-accordion__content">{section.content}</div>}</div>;})}</div>; }

// --- M3Card.tsx ---
export interface M3CardProps extends React.HTMLAttributes<HTMLDivElement> { variant?: 'elevated' | 'filled' | 'outlined'; }
/** Optics: Heavy Frosted Shell. */
export function M3Card({ variant='elevated', className, children, ...rest }: M3CardProps) { return <div className={cx('m3-card',`m3-card--${variant}`,'m3-glass-shell',className)} {...rest}>{children}</div>; }

// --- M3Carousel.tsx ---
export interface M3CarouselProps { items: React.ReactNode[]; className?: string; }
/** Optics: Heavy Frosted Shell frame around each slide. */
export function M3Carousel({ items, className }: M3CarouselProps) { const [index,setIndex]=useState(0); const clamp=(i:number)=>Math.max(0,Math.min(items.length-1,i)); return <div className={cx('m3-carousel',className)}><div className="m3-carousel__viewport m3-glass-shell">{items[index]}</div><div className="m3-carousel__controls"><button aria-label="Previous" onClick={()=>setIndex(i=>clamp(i-1))} disabled={index===0}>‹</button><div className="m3-carousel__dots">{items.map((_,i)=><button key={i} className={cx('m3-carousel__dot',i===index&&'m3-carousel__dot--active')} aria-label={`Go to slide ${i+1}`} onClick={()=>setIndex(i)}/>)}</div><button aria-label="Next" onClick={()=>setIndex(i=>clamp(i+1))} disabled={index===items.length-1}>›</button></div></div>; }

// --- M3Container.tsx ---
export interface M3ContainerProps extends React.HTMLAttributes<HTMLDivElement> { maxWidth?: number | string; }
/** Optics: Heavy Frosted Shell — a generic page-section surface. */
export function M3Container({ maxWidth=1120, style, className, children, ...rest }: M3ContainerProps) { return <section className={cx('m3-container','m3-glass-shell',className)} style={{maxWidth,...style}} {...rest}>{children}</section>; }

// --- M3Divider.tsx ---
export interface M3DividerProps { orientation?: 'horizontal'|'vertical'; inset?: boolean; className?: string; }
/** Optics: Strict Opaque Shield — a divider must never look like it's fading into glass blur. */
export function M3Divider({ orientation='horizontal', inset, className }: M3DividerProps) { return <hr className={cx('m3-divider',`m3-divider--${orientation}`,inset&&'m3-divider--inset','m3-opaque',className)}/>; }

// --- M3InlineCard.tsx ---
export interface M3InlineCardProps { icon?: React.ReactNode; title: string; description?: string; action?: React.ReactNode; className?: string; }
/** Optics: Heavy Frosted Shell — a compact, single-line-friendly card variant. */
export function M3InlineCard({ icon,title,description,action,className }: M3InlineCardProps) { return <div className={cx('m3-inline-card','m3-glass-shell',className)}>{icon&&<span className="m3-inline-card__icon">{icon}</span>}<span className="m3-inline-card__text"><span className="m3-inline-card__title">{title}</span>{description&&<span className="m3-inline-card__description">{description}</span>}</span>{action&&<span className="m3-inline-card__action">{action}</span>}</div>; }

// --- M3ListItem.tsx ---
export interface M3ListItemProps { headline: string; supportingText?: string; leading?: React.ReactNode; trailing?: React.ReactNode; onClick?: ()=>void; className?: string; }
/** Optics: Heavy Frosted Shell (rows in a frosted list surface). */
export function M3ListItem({ headline,supportingText,leading,trailing,onClick,className }: M3ListItemProps) { const Component:any=onClick?'button':'div'; return <Component className={cx('m3-list-item','m3-glass-shell',className)} onClick={onClick}>{leading&&<span className="m3-list-item__leading">{leading}</span>}<span className="m3-list-item__text"><span className="m3-list-item__headline">{headline}</span>{supportingText&&<span className="m3-list-item__supporting">{supportingText}</span>}</span>{trailing&&<span className="m3-list-item__trailing">{trailing}</span>}</Component>; }
