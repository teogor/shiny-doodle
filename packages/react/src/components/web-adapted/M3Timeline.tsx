import React from 'react';
import { cx } from '../shared/utils';
export interface M3TimelineEvent{key:string;title:string;timestamp:string;description?:string;icon?:React.ReactNode;}
export interface M3TimelineProps{events:M3TimelineEvent[];className?:string;}
/** Optics: Heavy Frosted Shell; node dot Strict Opaque Shield. */
export function M3Timeline({events,className}:M3TimelineProps){return <ol className={cx('m3-timeline','m3-glass-shell',className)}>{events.map(event=><li key={event.key} className="m3-timeline__event"><span className="m3-timeline__dot m3-opaque">{event.icon}</span><div className="m3-timeline__body"><div className="m3-timeline__row"><span className="m3-timeline__title">{event.title}</span><time className="m3-timeline__timestamp">{event.timestamp}</time></div>{event.description&&<p className="m3-timeline__description">{event.description}</p>}</div></li>)}</ol>}
