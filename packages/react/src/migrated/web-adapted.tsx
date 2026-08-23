import React, { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { cx, useUniqueId } from './shared.js';

// --- M3AudioPlayer.tsx ---
export interface M3AudioPlayerProps{src:string;title?:string;className?:string;}
/** Optics: outer shell Heavy Frosted Shell; scrubber Recessed Inner Glass; play button Liquid Gloss. */
export function M3AudioPlayer({src,title,className}:M3AudioPlayerProps){const audioRef=useRef<HTMLAudioElement>(null);const[playing,setPlaying]=useState(false);const[progress,setProgress]=useState(0);function togglePlay(){if(!audioRef.current)return;if(playing)audioRef.current.pause();else void audioRef.current.play();setPlaying(!playing)}return <div className={cx('m3-audio-player','m3-glass-shell',className)}><audio ref={audioRef} src={src} onTimeUpdate={e=>{const el=e.currentTarget;setProgress(el.currentTime/(el.duration||1)*100)}} onEnded={()=>setPlaying(false)}/><button className="m3-audio-player__play m3-liquid-gloss" onClick={togglePlay} aria-label={playing?'Pause':'Play'}>{playing?'❚❚':'▶'}</button>{title&&<span className="m3-audio-player__title">{title}</span>}<div className="m3-audio-player__track m3-glass-recessed"><div className="m3-audio-player__fill m3-liquid-gloss" style={{width:`${progress}%`}}/></div></div>}

// --- M3CodeBlock.tsx ---
export interface M3CodeBlockProps{code:string;language?:string;className?:string;}
/** Optics: Heavy Frosted Shell with opaque code text. */
export function M3CodeBlock({code,language,className}:M3CodeBlockProps){const[copied,setCopied]=useState(false);return <div className={cx('m3-code-block','m3-glass-shell',className)}><div className="m3-code-block__header"><span className="m3-code-block__language">{language}</span><button className="m3-code-block__copy" onClick={async()=>{await navigator.clipboard.writeText(code);setCopied(true);setTimeout(()=>setCopied(false),1500)}}>{copied?'Copied':'Copy'}</button></div><pre className="m3-code-block__pre"><code>{code}</code></pre></div>}

// --- M3ColorPicker.tsx ---
export interface M3ColorPickerProps{value:string;onChange:(hex:string)=>void;swatches?:string[];className?:string;}
/** Optics: panel Heavy Frosted Shell; hex input Recessed Inner Glass; swatches Strict Opaque Shield. */
export function M3ColorPicker({value,onChange,swatches=[],className}:M3ColorPickerProps){return <div className={cx('m3-color-picker','m3-glass-shell',className)}><div className="m3-color-picker__preview m3-opaque" style={{background:value}}/><input className="m3-color-picker__hex m3-glass-recessed" value={value} onChange={e=>onChange(e.target.value)} aria-label="Hex color value"/>{swatches.length>0&&<div className="m3-color-picker__swatches">{swatches.map(swatch=><button key={swatch} className="m3-color-picker__swatch m3-opaque" style={{background:swatch}} aria-label={`Use color ${swatch}`} onClick={()=>onChange(swatch)}/>)}</div>}</div>}

// --- M3CommandPalette.tsx ---
export interface M3CommandPaletteItem{key:string;label:string;hint?:string;onRun:()=>void;}
export interface M3CommandPaletteProps{open:boolean;onClose:()=>void;items:M3CommandPaletteItem[];className?:string;}
/** Optics: shell Heavy Frosted Shell; search input Recessed Inner Glass. */
export function M3CommandPalette({open,onClose,items,className}:M3CommandPaletteProps){const[query,setQuery]=useState('');if(!open)return null;const filtered=items.filter(item=>item.label.toLowerCase().includes(query.toLowerCase()));return typeof document==='undefined'?null:createPortal(<div className="m3-command-palette__scrim" onClick={onClose}><div className={cx('m3-command-palette','m3-glass-shell',className)} role="dialog" aria-label="Command palette" onClick={e=>e.stopPropagation()}><input autoFocus className="m3-command-palette__input m3-glass-recessed" placeholder="Type a command…" value={query} onChange={e=>setQuery(e.target.value)}/><ul className="m3-command-palette__list">{filtered.map(item=><li key={item.key}><button onClick={()=>{item.onRun();onClose()}}><span>{item.label}</span>{item.hint&&<span className="m3-command-palette__hint">{item.hint}</span>}</button></li>)}</ul></div></div>,document.body)}

// --- M3ComparisonSlider.tsx ---
export interface M3ComparisonSliderProps{before:React.ReactNode;after:React.ReactNode;className?:string;}
/** Optics: frame Heavy Frosted Shell; handle track Recessed Inner Glass. */
export function M3ComparisonSlider({before,after,className}:M3ComparisonSliderProps){const[position,setPosition]=useState(50);return <div className={cx('m3-comparison-slider','m3-glass-shell',className)}><div className="m3-comparison-slider__after">{after}</div><div className="m3-comparison-slider__before" style={{clipPath:`inset(0 ${100-position}% 0 0)`}}>{before}</div><div className="m3-comparison-slider__handle-track m3-glass-recessed"><input type="range" min={0} max={100} value={position} onChange={e=>setPosition(Number(e.target.value))} aria-label="Comparison position"/></div></div>}

// --- M3DataGrid.tsx ---
export interface M3DataGridColumn<T>{key:keyof T & string;header:string;render?:(row:T)=>React.ReactNode;}
export interface M3DataGridProps<T extends {id:string|number}>{columns:M3DataGridColumn<T>[];rows:T[];className?:string;}
/** Optics: outer Heavy Frosted Shell; cells Strict Opaque Shield for data legibility. */
export function M3DataGrid<T extends {id:string|number}>({columns,rows,className}:M3DataGridProps<T>){return <div className={cx('m3-data-grid','m3-glass-shell',className)}><table><thead><tr>{columns.map(col=><th key={col.key} className="m3-opaque">{col.header}</th>)}</tr></thead><tbody>{rows.map(row=><tr key={row.id}>{columns.map(col=><td key={col.key} className="m3-opaque">{col.render?col.render(row):String(row[col.key])}</td>)}</tr>)}</tbody></table></div>}

// --- M3EmptyState.tsx ---
export interface M3EmptyStateProps{icon?:React.ReactNode;title:string;description?:string;action?:React.ReactNode;className?:string;}
/** Optics: Heavy Frosted Shell. */
export function M3EmptyState({icon,title,description,action,className}:M3EmptyStateProps){return <div className={cx('m3-empty-state','m3-glass-shell',className)}>{icon&&<div className="m3-empty-state__icon">{icon}</div>}<h3 className="m3-empty-state__title">{title}</h3>{description&&<p className="m3-empty-state__description">{description}</p>}{action&&<div className="m3-empty-state__action">{action}</div>}</div>}

// --- M3KeyboardShortcut.tsx ---
export interface M3KeyboardShortcutProps{keys:string[];className?:string;}
/** Optics: Recessed Inner Glass — each key reads as a carved physical keycap. */
export function M3KeyboardShortcut({keys,className}:M3KeyboardShortcutProps){return <span className={cx('m3-keyboard-shortcut',className)}>{keys.map((key,i)=><React.Fragment key={key}><kbd className="m3-keyboard-shortcut__key m3-glass-recessed">{key}</kbd>{i<keys.length-1&&<span className="m3-keyboard-shortcut__plus">+</span>}</React.Fragment>)}</span>}

// --- M3StatCard.tsx ---
export interface M3StatCardProps{label:string;value:string|number;delta?:{value:string;direction:'up'|'down'|'flat'};icon?:React.ReactNode;className?:string;}
/** Optics: Heavy Frosted Shell. */
export function M3StatCard({label,value,delta,icon,className}:M3StatCardProps){return <div className={cx('m3-stat-card','m3-glass-shell',className)}><div className="m3-stat-card__header"><span className="m3-stat-card__label">{label}</span>{icon}</div><div className="m3-stat-card__value">{value}</div>{delta&&<span className={cx('m3-stat-card__delta',`m3-stat-card__delta--${delta.direction}`)}>{delta.direction==='up'?'▲':delta.direction==='down'?'▼':'—'} {delta.value}</span>}</div>}

// --- M3Timeline.tsx ---
export interface M3TimelineEvent{key:string;title:string;timestamp:string;description?:string;icon?:React.ReactNode;}
export interface M3TimelineProps{events:M3TimelineEvent[];className?:string;}
/** Optics: Heavy Frosted Shell; node dot Strict Opaque Shield. */
export function M3Timeline({events,className}:M3TimelineProps){return <ol className={cx('m3-timeline','m3-glass-shell',className)}>{events.map(event=><li key={event.key} className="m3-timeline__event"><span className="m3-timeline__dot m3-opaque">{event.icon}</span><div className="m3-timeline__body"><div className="m3-timeline__row"><span className="m3-timeline__title">{event.title}</span><time className="m3-timeline__timestamp">{event.timestamp}</time></div>{event.description&&<p className="m3-timeline__description">{event.description}</p>}</div></li>)}</ol>}

// --- M3TreeViewer.tsx ---
export interface M3TreeNode{key:string;label:string;children?:M3TreeNode[];}
export interface M3TreeViewerProps{nodes:M3TreeNode[];onSelect?:(key:string)=>void;className?:string;}
/** Optics: Heavy Frosted Shell container. */
export function M3TreeViewer({nodes,onSelect,className}:M3TreeViewerProps){return <ul className={cx('m3-tree-viewer','m3-glass-shell',className)} role="tree">{nodes.map(node=><M3TreeNodeItem key={node.key} node={node} onSelect={onSelect} depth={0}/>)}</ul>}
function M3TreeNodeItem({node,onSelect,depth}:{node:M3TreeNode;onSelect?:(key:string)=>void;depth:number}){const[expanded,setExpanded]=useState(depth===0);const hasChildren=!!node.children?.length;return <li role="treeitem" aria-expanded={hasChildren?expanded:undefined}><button style={{paddingLeft:`${depth*16}px`}} onClick={()=>{if(hasChildren)setExpanded(v=>!v);onSelect?.(node.key)}}>{hasChildren&&<span>{expanded?'▾':'▸'}</span>}{node.label}</button>{hasChildren&&expanded&&<ul>{node.children!.map(child=><M3TreeNodeItem key={child.key} node={child} onSelect={onSelect} depth={depth+1}/>)}</ul>}</li>}
