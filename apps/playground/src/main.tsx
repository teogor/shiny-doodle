import * as React from 'react';
import {createRoot} from 'react-dom/client';
import {Button,Card,Surface} from '@m3-glass/react';
import '@m3-glass/react/styles.css';
import '@m3-glass/styles/globals.css';
import {applyThemeToDocument,getTheme,type M3GlassThemeMode} from '@m3-glass/theme';

function App(){const [mode,setMode]=React.useState<M3GlassThemeMode>('dark');React.useEffect(()=>applyThemeToDocument(getTheme(mode)),[mode]);return <main style={{maxWidth:900,margin:'0 auto',padding:40}}><header style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><h1>M3 Glass Playground</h1><select value={mode} onChange={e=>setMode(e.target.value as M3GlassThemeMode)}><option>light</option><option>dark</option><option>oled</option></select></header><Surface elevation={3} className="m3-glass" style={{padding:32,marginTop:32}}><h2>Optical surface</h2><p>Inspect themes and primitives together.</p><div style={{display:'flex',gap:12,flexWrap:'wrap'}}><Button>Filled</Button><Button variant="tonal">Tonal</Button><Button variant="outlined">Outlined</Button><Button variant="glass">Glass</Button></div></Surface><div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16,marginTop:20}}>{['elevated','filled','outlined'].map(v=><Card key={v} variant={v as any}><h3>{v}</h3><p>Shared component primitive.</p></Card>)}</div></main>}
createRoot(document.getElementById('root')!).render(<App/>);