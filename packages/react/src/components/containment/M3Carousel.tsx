import React, { useState } from 'react';
import { cx } from '../shared/utils';
export interface M3CarouselProps { items: React.ReactNode[]; className?: string; }
/** Optics: Heavy Frosted Shell frame around each slide. */
export function M3Carousel({ items, className }: M3CarouselProps) { const [index,setIndex]=useState(0); const clamp=(i:number)=>Math.max(0,Math.min(items.length-1,i)); return <div className={cx('m3-carousel',className)}><div className="m3-carousel__viewport m3-glass-shell">{items[index]}</div><div className="m3-carousel__controls"><button aria-label="Previous" onClick={()=>setIndex(i=>clamp(i-1))} disabled={index===0}>‹</button><div className="m3-carousel__dots">{items.map((_,i)=><button key={i} className={cx('m3-carousel__dot',i===index&&'m3-carousel__dot--active')} aria-label={`Go to slide ${i+1}`} onClick={()=>setIndex(i)}/>)}</div><button aria-label="Next" onClick={()=>setIndex(i=>clamp(i+1))} disabled={index===items.length-1}>›</button></div></div>; }
