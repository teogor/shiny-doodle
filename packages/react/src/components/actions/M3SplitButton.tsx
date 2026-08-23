import React, { useState } from 'react';
import { cx } from '../shared/utils';

export interface M3SplitButtonItem {
  label: string;
  onSelect: () => void;
}

export interface M3SplitButtonProps {
  label: string;
  onPrimaryClick?: () => void;
  menuItems: M3SplitButtonItem[];
  className?: string;
}

/** Optics: Liquid Gloss Sheen across both segments (they read as one control). */
export function M3SplitButton({ label, onPrimaryClick, menuItems, className }: M3SplitButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={cx('m3-split-button', className)}>
      <button className="m3-split-button__primary m3-liquid-gloss" onClick={onPrimaryClick}>
        {label}
      </button>
      <button
        className="m3-split-button__trigger m3-liquid-gloss"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`${label} menu`}
        onClick={() => setOpen((value) => !value)}
      >
        ▾
      </button>
      {open && (
        <ul className="m3-split-button__menu m3-glass-shell" role="menu">
          {menuItems.map((item) => (
            <li key={item.label} role="menuitem">
              <button
                type="button"
                onClick={() => {
                  item.onSelect();
                  setOpen(false);
                }}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
