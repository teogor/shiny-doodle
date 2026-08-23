import React from 'react';
import { cx } from '../shared/utils';
export interface M3ContainerProps extends React.HTMLAttributes<HTMLDivElement> { maxWidth?: number | string; }
/** Optics: Heavy Frosted Shell — a generic page-section surface. */
export function M3Container({ maxWidth=1120, style, className, children, ...rest }: M3ContainerProps) { return <section className={cx('m3-container','m3-glass-shell',className)} style={{maxWidth,...style}} {...rest}>{children}</section>; }
