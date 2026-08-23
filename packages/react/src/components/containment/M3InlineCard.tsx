import React from 'react';
import { cx } from '../shared/utils';
export interface M3InlineCardProps { icon?: React.ReactNode; title: string; description?: string; action?: React.ReactNode; className?: string; }
/** Optics: Heavy Frosted Shell — a compact, single-line-friendly card variant. */
export function M3InlineCard({ icon,title,description,action,className }: M3InlineCardProps) { return <div className={cx('m3-inline-card','m3-glass-shell',className)}>{icon&&<span className="m3-inline-card__icon">{icon}</span>}<span className="m3-inline-card__text"><span className="m3-inline-card__title">{title}</span>{description&&<span className="m3-inline-card__description">{description}</span>}</span>{action&&<span className="m3-inline-card__action">{action}</span>}</div>; }
