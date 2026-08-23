import React, { useState } from 'react';
import { cx, useUniqueId } from './shared.js';

// --- M3Button.tsx ---
export type M3ButtonVariant = 'filled' | 'tonal' | 'outlined' | 'text';
export interface M3ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { variant?: M3ButtonVariant; icon?: React.ReactNode; fullWidth?: boolean; }
/** Optics: Liquid Gloss Sheen (filled/tonal only — outlined/text stay flat). */
export function M3Button({ variant = 'filled', icon, fullWidth, className, children, ...rest }: M3ButtonProps) {
  const glossy = variant === 'filled' || variant === 'tonal';
  return <button className={cx('m3-button', `m3-button--${variant}`, glossy && 'm3-liquid-gloss', fullWidth && 'm3-button--full', className)} {...rest}>{icon && <span className="m3-button__icon">{icon}</span>}<span className="m3-button__label">{children}</span></button>;
}

// --- M3ButtonGroup.tsx ---
export interface M3ButtonGroupProps { children: React.ReactNode; className?: string; }
/** Optics: Recessed Inner Glass container that pools child M3Button/M3IconButton controls. */
export function M3ButtonGroup({ children, className }: M3ButtonGroupProps) { return <div className={cx('m3-button-group', 'm3-glass-recessed', className)} role="group">{children}</div>; }

// --- M3ExtendedFab.tsx ---
export interface M3ExtendedFabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { icon?: React.ReactNode; }
/** Optics: Liquid Gloss Sheen. */
export function M3ExtendedFab({ icon, className, children, ...rest }: M3ExtendedFabProps) { return <button className={cx('m3-extended-fab', 'm3-liquid-gloss', className)} {...rest}>{icon && <span className="m3-extended-fab__icon">{icon}</span>}<span className="m3-extended-fab__label">{children}</span></button>; }

// --- M3Fab.tsx ---
export interface M3FabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { icon: React.ReactNode; size?: 'small' | 'default' | 'large'; 'aria-label': string; }
/** Optics: Liquid Gloss Sheen. */
export function M3Fab({ icon, size = 'default', className, ...rest }: M3FabProps) { return <button className={cx('m3-fab', `m3-fab--${size}`, 'm3-liquid-gloss', className)} {...rest}>{icon}</button>; }

// --- M3FabMenu.tsx ---
export interface M3FabMenuItem { icon: React.ReactNode; label: string; onSelect: () => void; }
export interface M3FabMenuProps { triggerIcon: React.ReactNode; items: M3FabMenuItem[]; className?: string; }
/** Optics: trigger is Liquid Gloss Sheen; the flyout list is a Heavy Frosted Shell. */
export function M3FabMenu({ triggerIcon, items, className }: M3FabMenuProps) {
  const [open, setOpen] = useState(false);
  return <div className={cx('m3-fab-menu', className)}>{open && <ul className="m3-fab-menu__list m3-glass-shell" role="menu">{items.map(item => <li key={item.label} role="menuitem"><button onClick={() => { item.onSelect(); setOpen(false); }}><span className="m3-fab-menu__icon">{item.icon}</span>{item.label}</button></li>)}</ul>}<button className="m3-fab-menu__trigger m3-liquid-gloss" aria-haspopup="menu" aria-expanded={open} aria-label="Open actions menu" onClick={() => setOpen(v => !v)}>{triggerIcon}</button></div>;
}

// --- M3IconButton.tsx ---
export interface M3IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { icon: React.ReactNode; selected?: boolean; variant?: 'standard' | 'filled' | 'tonal'; 'aria-label': string; }
/** Optics: Liquid Gloss Sheen when filled/tonal; plain otherwise. */
export function M3IconButton({ icon, selected, variant = 'standard', className, ...rest }: M3IconButtonProps) { const glossy = variant !== 'standard'; return <button className={cx('m3-icon-button', `m3-icon-button--${variant}`, glossy && 'm3-liquid-gloss', selected && 'm3-icon-button--selected', className)} aria-pressed={selected} {...rest}>{icon}</button>; }

// --- M3SegmentedButton.tsx ---
export interface M3SegmentedButtonOption { value: string; label: string; icon?: React.ReactNode; }
export interface M3SegmentedButtonProps { options: M3SegmentedButtonOption[]; value: string | string[]; multiSelect?: boolean; onChange: (value: string | string[]) => void; className?: string; }
/** Optics: track is Recessed Inner Glass; the selected segment gets a Liquid Gloss chip. */
export function M3SegmentedButton({ options, value, multiSelect, onChange, className }: M3SegmentedButtonProps) {
  const selected = Array.isArray(value) ? value : [value];
  function toggle(optValue: string) { if (multiSelect && Array.isArray(value)) { const next = value.includes(optValue) ? value.filter(v => v !== optValue) : [...value, optValue]; onChange(next); } else onChange(optValue); }
  return <div className={cx('m3-segmented-button', 'm3-glass-recessed', className)} role="group">{options.map(opt => { const isSelected = selected.includes(opt.value); return <button key={opt.value} className={cx('m3-segmented-button__segment', isSelected && 'm3-liquid-gloss')} aria-pressed={isSelected} onClick={() => toggle(opt.value)}>{opt.icon && <span className="m3-segmented-button__icon">{opt.icon}</span>}{opt.label}</button>; })}</div>;
}

// --- M3SplitButton.tsx ---
export interface M3SplitButtonProps { label: string; onPrimaryClick?: () => void; menuItems: { label: string; onSelect: () => void }[]; className?: string; }
/** Optics: Liquid Gloss Sheen across both segments (they read as one control). */
export function M3SplitButton({ label, onPrimaryClick, menuItems, className }: M3SplitButtonProps) { const [open, setOpen] = useState(false); return <div className={cx('m3-split-button', className)}><button className="m3-split-button__primary m3-liquid-gloss" onClick={onPrimaryClick}>{label}</button><button className="m3-split-button__trigger m3-liquid-gloss" aria-haspopup="menu" aria-expanded={open} onClick={() => setOpen(v => !v)}>▾</button>{open && <ul className="m3-split-button__menu m3-glass-shell" role="menu">{menuItems.map(item => <li key={item.label} role="menuitem"><button onClick={() => { item.onSelect(); setOpen(false); }}>{item.label}</button></li>)}</ul>}</div>; }
