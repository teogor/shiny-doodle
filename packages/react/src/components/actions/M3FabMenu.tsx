import React, { useState } from 'react';
import { cx } from '../shared/utils';
export interface M3FabMenuItem { icon: React.ReactNode; label: string; onSelect: () => void; }
export interface M3FabMenuProps { triggerIcon: React.ReactNode; items: M3FabMenuItem[]; className?: string; }
/** Optics: trigger is Liquid Gloss Sheen; the flyout list is a Heavy Frosted Shell. */
export function M3FabMenu({ triggerIcon, items, className }: M3FabMenuProps) { const [open, setOpen] = useState(false); return <div className={cx('m3-fab-menu', className)}>{open && <ul className="m3-fab-menu__list m3-glass-shell" role="menu">{items.map((item) => <li key={item.label} role="menuitem"><button onClick={() => { item.onSelect(); setOpen(false); }}><span className="m3-fab-menu__icon">{item.icon}</span>{item.label}</button></li>)}</ul>}<button className="m3-fab-menu__trigger m3-liquid-gloss" aria-haspopup="menu" aria-expanded={open} aria-label="Open actions menu" onClick={() => setOpen((v) => !v)}>{triggerIcon}</button></div>; }
