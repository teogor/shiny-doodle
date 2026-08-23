import React from 'react';
import { cx } from '../shared/utils';

export interface M3ButtonGroupProps {
  children: React.ReactNode;
  className?: string;
}

/** Optics: Recessed Inner Glass container that pools child M3Button/M3IconButton controls. */
export function M3ButtonGroup({ children, className }: M3ButtonGroupProps) {
  return (
    <div className={cx('m3-button-group', 'm3-glass-recessed', className)} role="group">
      {children}
    </div>
  );
}
