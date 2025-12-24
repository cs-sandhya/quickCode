import { isPaddedNumber } from "./helpers/index";

export function checkNumberPadding(intStrs: Iterable<string>): number {
  // empty array returns 0;
  if (!intStrs || [...intStrs].length === 0) {
    return 0;
  }

  const paddedLengths: {[key: string]: boolean} = {}; 
  const lengths: number[] = [];

  for (const val of intStrs) {
    const len = val.length;
    lengths.push(len);

    if (isPaddedNumber(val)) {
      paddedLengths[len] = true;
    }
  }

  const paddedKeys = Object.keys(paddedLengths);
  const paddedCount = paddedKeys.length;

  // padding exists
  if (paddedCount > 0) {
    // Inconsistent padding lengths
    if (paddedCount > 1) {
      return -1;
    }

    // Consistent padding length
    return Number(paddedKeys[0]);
  }

  // no padded values
  const uniqueLengths = new Set(lengths);

  // no padding used
  if (uniqueLengths.has(1)) {
    return 1
  }

  // Inconclusive: could be padding or not
  return -Math.min(...lengths);
}