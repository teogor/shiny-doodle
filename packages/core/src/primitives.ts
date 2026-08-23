export type ClassValue = string | false | null | undefined;

export function cx(...values: ClassValue[]): string {
  return values.filter((value): value is string => typeof value === 'string' && value.length > 0).join(' ');
}

export interface AriaDisabledProps {
  'aria-disabled'?: true;
  tabIndex?: -1;
}

export function getDisabledProps(disabled: boolean): AriaDisabledProps {
  return disabled ? { 'aria-disabled': true, tabIndex: -1 } : {};
}
