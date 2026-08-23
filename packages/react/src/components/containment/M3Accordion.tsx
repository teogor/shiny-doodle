import React, { useState } from 'react';
import { cx } from '../shared/utils';
export interface M3AccordionSection { key: string; title: string; content: React.ReactNode; }
export interface M3AccordionProps { sections: M3AccordionSection[]; className?: string; }
/** Optics: Heavy Frosted Shell. */
export function M3Accordion({ sections, className }: M3AccordionProps) { const [openKey, setOpenKey] = useState<string | null>(sections[0]?.key ?? null); return <div className={cx('m3-accordion','m3-glass-shell',className)}>{sections.map(section => { const open=openKey===section.key; return <div className="m3-accordion__section" key={section.key}><button className="m3-accordion__header" aria-expanded={open} onClick={()=>setOpenKey(open?null:section.key)}>{section.title}<span className={cx('m3-accordion__chevron',open&&'m3-accordion__chevron--open')}>▾</span></button>{open&&<div className="m3-accordion__content">{section.content}</div>}</div>;})}</div>; }
