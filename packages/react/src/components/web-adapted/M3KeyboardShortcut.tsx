import React from 'react';
import { cx } from '../shared/utils';
export interface M3KeyboardShortcutProps{keys:string[];className?:string;}
/** Optics: Recessed Inner Glass — each key reads as a carved physical keycap. */
export function M3KeyboardShortcut({keys,className}:M3KeyboardShortcutProps){return <span className={cx('m3-keyboard-shortcut',className)}>{keys.map((key,i)=><React.Fragment key={key}><kbd className="m3-keyboard-shortcut__key m3-glass-recessed">{key}</kbd>{i<keys.length-1&&<span className="m3-keyboard-shortcut__plus">+</span>}</React.Fragment>)}</span>}
