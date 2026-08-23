import '@m3-glass/styles/globals.css';
import '@m3-glass/styles/core.css';
import '@m3-glass/react/styles.css';
import './site.css';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'M3 Glass', description: 'Material-inspired liquid glass design system' };

const nav = [['Foundations','/foundations'],['Glass','/glass'],['Components','/components'],['Patterns','/patterns'],['Develop','/develop']];

export default function RootLayout({children}:{children:React.ReactNode}) {
 return <html lang="en" data-theme="dark"><body>
  <header className="site-header"><a className="brand" href="/">M3 <span>GLASS</span></a><nav>{nav.map(([label,href])=><a key={href} href={href}>{label}</a>)}</nav><div className="header-actions"><button aria-label="Search">⌕</button><a href="https://github.com/teogor/shiny-doodle">GitHub ↗</a></div></header>
  {children}
 </body></html>
}
