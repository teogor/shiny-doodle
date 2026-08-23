let idCounter = 0;
export function useUniqueId(prefix: string): string { idCounter += 1; return `${prefix}-${idCounter}`; }
export function cx(...parts: Array<string | false | null | undefined>): string { return parts.filter(Boolean).join(' '); }
