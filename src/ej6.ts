/**
 *
 * @param code Consists on the ISBN code that the function will check
 * @return Returns true if the ISBN code is a valid one, or false if not
 *
 * Usage:
 * ```typescript
 * isValidISBN(code: string)
 * ```
 */

export function isValidISBN(code: string): boolean {
  const splittedCode: string[] = code.split('-').join('').split('');
  const checkX: boolean = splittedCode.includes('X');
  const multipliers: number[] = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  if (checkX) {
    splittedCode[splittedCode.length-1] = '10';
  }
  const accum: number = splittedCode.reduce((total, value, index) => {
    return total + (parseInt(value) * multipliers[index]);
  }, 0);
  return ((accum % 11 === 0) ? true : false);
}

console.log(isValidISBN('3-598-21507-X'));
console.log(isValidISBN('359821507X'));
