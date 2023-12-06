export function format(checkThese: string, middle: string, last: string): string {
  return (checkThese || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}
