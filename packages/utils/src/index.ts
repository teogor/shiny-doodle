export function clamp(value:number,min:number,max:number){return Math.min(Math.max(value,min),max)}
export function cssVar(name:string){return name.startsWith('--')?name:`--${name}`}
export function noop():void{}
export * from './library.js';
