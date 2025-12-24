export const isPaddedNumber = (value: string): boolean => {
  return value.length > 1 && value.startsWith("0");
}