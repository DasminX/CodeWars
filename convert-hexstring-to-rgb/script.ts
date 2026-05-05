export function hexStringToRGB(hexString: string): { r: number; g: number; b: number } {
  const hexParts = hexString.match(/[0-9a-f]{2}/gi);
  if (!hexParts || hexParts.length !== 3) throw new Error("Invalid hexString provided.");

  const [r, g, b] = hexParts.map((h) => parseInt(h, 16));
  return { r, g, b };
}
