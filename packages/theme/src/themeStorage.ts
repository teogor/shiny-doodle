export type AppTheme = 'light' | 'dark' | 'oled' | 'system' | 'schedule';
export type SurfaceStyle = 'flat' | 'glass';
export type NightVariant = 'dark' | 'oled';
interface StorageItem<T>{key:string;defaultValue:T;get():Promise<T>;set(value:T):Promise<void>;watch(callback:(value:T)=>void):()=>void;}
declare const chrome:any;
function hasChromeStorage(){return typeof chrome!=='undefined'&&!!chrome?.storage?.local;}
function createStorageItem<T>(key:string,defaultValue:T):StorageItem<T>{return{key,defaultValue,async get(){if(hasChromeStorage()){const result=await chrome.storage.local.get(key);return(result[key] as T)??defaultValue;}if(typeof window!=='undefined'&&window.localStorage){const raw=window.localStorage.getItem(key);return raw?(JSON.parse(raw) as T):defaultValue;}return defaultValue;},async set(value:T){if(hasChromeStorage()){await chrome.storage.local.set({[key]:value});return;}if(typeof window!=='undefined'&&window.localStorage){window.localStorage.setItem(key,JSON.stringify(value));window.dispatchEvent(new StorageEvent('storage',{key}));}},watch(callback){if(hasChromeStorage()){const listener=(changes:Record<string,{newValue?:T}>,area:string)=>{if(area==='local'&&changes[key])callback(changes[key].newValue as T)};chrome.storage.onChanged.addListener(listener);return()=>chrome.storage.onChanged.removeListener(listener);}if(typeof window!=='undefined'){const listener=()=>{this.get().then(callback)};window.addEventListener('storage',listener);return()=>window.removeEventListener('storage',listener);}return()=>{};}}}
export const themeStorage=createStorageItem<AppTheme>('m3glass:app-theme','system');
export const surfaceStyleStorage=createStorageItem<SurfaceStyle>('m3glass:surface-style','glass');
export const nightVariantStorage=createStorageItem<NightVariant>('m3glass:night-variant','dark');
