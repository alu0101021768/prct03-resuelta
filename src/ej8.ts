/**
 *
 * @param stringDir1 Consists on the first direction ip (included)
 * @param stringDir2 Consists on the last direction ip (excluded)
 * @return Returns the number of available directions between both directions
 *
 * Usage:
 * ```typescript
 * ipsInRange("10.0.0.0", "10.0.0.50")
 * ```
 */
export function ipsInRange(stringDir1: string, stringDir2: string): number {
  const powers: number[] = [8 ** 8, 4 ** 8, 2 ** 8, 1 ** 8];
  const dir1: number[] = stringDir1.split('.').map((element) => {
    return parseInt(element);
  });
  const dir2: number[] = stringDir2.split('.').map((element) => {
    return parseInt(element);
  });
  const difference: number[] = dir2.map((dir2Element, dir2Index) => {
    return (dir2Element - dir1[dir2Index]);
  });
  const result: number = difference.reduce((total, value, index) => {
    return total + (value*powers[index]);
  }, 0);
  return result;
}
