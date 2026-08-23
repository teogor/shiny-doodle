import React from 'react';
import { cx } from '../shared/utils';
export interface M3DataGridColumn<T>{key:keyof T & string;header:string;render?:(row:T)=>React.ReactNode;}
export interface M3DataGridProps<T extends {id:string|number}>{columns:M3DataGridColumn<T>[];rows:T[];className?:string;}
/** Optics: outer Heavy Frosted Shell; cells Strict Opaque Shield for data legibility. */
export function M3DataGrid<T extends {id:string|number}>({columns,rows,className}:M3DataGridProps<T>){return <div className={cx('m3-data-grid','m3-glass-shell',className)}><table><thead><tr>{columns.map(col=><th key={col.key} className="m3-opaque">{col.header}</th>)}</tr></thead><tbody>{rows.map(row=><tr key={row.id}>{columns.map(col=><td key={col.key} className="m3-opaque">{col.render?col.render(row):String(row[col.key])}</td>)}</tr>)}</tbody></table></div>}
