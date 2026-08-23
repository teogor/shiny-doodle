import React, { useState } from 'react';
import { cx } from '../shared/utils';
export interface M3TreeNode{key:string;label:string;children?:M3TreeNode[];}
export interface M3TreeViewerProps{nodes:M3TreeNode[];onSelect?:(key:string)=>void;className?:string;}
/** Optics: Heavy Frosted Shell container. */
export function M3TreeViewer({nodes,onSelect,className}:M3TreeViewerProps){return <ul className={cx('m3-tree-viewer','m3-glass-shell',className)} role="tree">{nodes.map(node=><M3TreeNodeItem key={node.key} node={node} onSelect={onSelect} depth={0}/>)}</ul>}
function M3TreeNodeItem({node,onSelect,depth}:{node:M3TreeNode;onSelect?:(key:string)=>void;depth:number}){const[expanded,setExpanded]=useState(depth===0);const hasChildren=!!node.children?.length;return <li role="treeitem" aria-expanded={hasChildren?expanded:undefined}><button style={{paddingLeft:`${depth*16}px`}} onClick={()=>{if(hasChildren)setExpanded(v=>!v);onSelect?.(node.key)}}>{hasChildren&&<span>{expanded?'▾':'▸'}</span>}{node.label}</button>{hasChildren&&expanded&&<ul>{node.children!.map(child=><M3TreeNodeItem key={child.key} node={child} onSelect={onSelect} depth={depth+1}/>)}</ul>}</li>}
