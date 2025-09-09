/**
 * Formats a height value from a number into a feet and inches string.
 * e.g., 59 -> 5'9", 611 -> 6'11"
 * @param height - The height as a number.
 * @returns The formatted height string.
 */
export const formatHeight = (height: number): string => {
  const heightStr = height.toString();
  if (heightStr.length === 2) {
    return `${heightStr[0]}'${heightStr[1]}"`;
  }
  if (heightStr.length === 3) {
    return `${heightStr[0]}'${heightStr.substring(1)}"`;
  }
  return 'N/A';
};
