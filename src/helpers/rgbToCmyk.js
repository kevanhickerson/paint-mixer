export default function ({red, green, blue}) {
  const r = red / 255;
  const g = green / 255;
  const b = blue / 255;

  const k = 1 - Math.max(r, g, b);

  return {
    cyan: ((1 - r - k) / (1 - k)) || 0,
    magenta: ((1 - g - k) / (1 - k)) || 0,
    yellow: ((1 - b - k) / (1 - k)) || 0,
    black: k,
  };
}