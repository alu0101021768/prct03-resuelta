/**
 * @param text Consists on a string passed to calculate possible permutations
 * @return Returns the same string if it has no permutations, returns a
 * different string if it has at least one permutation and it returns an array
 * of permutations it it has more than one permutation
 *
 * Usage:
 * ```typescript
 * findPermutations("123")
 * ```
 * It will return ```[ '123', '132', '213', '231', '312', '321' ]```
 */
function findPermutations(text: string): string[] | string {
  if (text.length < 2) return text;
  const permutations: string[] | string = [];
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (text.indexOf(char) !== i) continue;
    const remainingString = text.slice(0, i) + text.slice(i + 1, text.length);
    for (const subPermutation of findPermutations(remainingString)) {
      permutations.push(char + subPermutation);
    }
  }
  return permutations;
}
/**
 * @description This function receives a positive integer as a parameter and
 * returns the next following number that can be formed by repositioning its
 * numbers
 * @param num Consists on the number we will be shifting
 * @return Returns the result of shifting the number to get its consecutive
 * bigger number, and returning -1 if it was imposibble
 *
 * Usage:
 * ```typescript
 * nextShiftedNumber(2017)
 * ```
 * Will return ```2071```
 * ```typescript
 * nextShiftedNumber(9)
 * ```
 * Will return ```-1```
 */
export function nextShiftedNumber(num: number) {
  const stringNum: string = num.toString();
  let permutations: string[] = [];
  let result: number;
  // Comprobamos si hay mas de una permutacion y asignamos valores
  (findPermutations(stringNum).length <= 1) ?
    result = -1 :
    permutations = [...findPermutations(stringNum)];
  // Si hay mas de una permutación, permutations es distinto a []
  if (permutations !== []) {
    const orderedPermutations: string[] = permutations.sort();
    const numIndex: number = orderedPermutations.indexOf(stringNum);
    if ((orderedPermutations.length - 1) > numIndex) {
      result = parseInt(orderedPermutations[numIndex + 1]);
    } else {
      result = -1;
    }
  // Si no hay permutaciones
  } else {
    result = -1;
  }
  return result;
}
