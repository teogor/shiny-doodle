import React, { useState } from 'react';
import { cx } from '../shared/utils';
export interface M3CodeBlockProps{code:string;language?:string;className?:string;}
/** Optics: Heavy Frosted Shell with opaque code text. */
export function M3CodeBlock({code,language,className}:M3CodeBlockProps){const[copied,setCopied]=useState(false);return <div className={cx('m3-code-block','m3-glass-shell',className)}><div className="m3-code-block__header"><span className="m3-code-block__language">{language}</span><button className="m3-code-block__copy" onClick={async()=>{await navigator.clipboard.writeText(code);setCopied(true);setTimeout(()=>setCopied(false),1500)}}>{copied?'Copied':'Copy'}</button></div><pre className="m3-code-block__pre"><code>{code}</code></pre></div>}
