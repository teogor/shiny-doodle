import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';
import { glass } from '@m3-glass/tokens';

export function GlassSurface({ children, style, ...props }: HTMLAttributes<HTMLDivElement> & { children: ReactNode }) {
  return <div className="m3-glass" style={{ borderRadius: 28, padding: 24, ...style }} {...props}>{children}</div>;
}

export function Button({ children, style, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button style={{ border: 0, borderRadius: 9999, padding: '12px 24px', background: '#415f91', color: 'white', cursor: 'pointer', ...style }} {...props}>{children}</button>;
}

export { glass };
