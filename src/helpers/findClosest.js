export default function(targetColor, currentColor, availableColours) {
  const delta = {
    cyan: targetColor.cyan - currentColor.cyan,
    magenta: targetColor.magenta - currentColor.magenta,
    yellow: targetColor.yellow - currentColor.yellow,
    black: targetColor.black - currentColor.black,
  }

  return availableColours.reduce(
    (oldValue, newValue) => {
      // No color picked yet
      if (oldValue === null) {
        return newValue;
      }
      // The next value is closer
      if (heuristic(delta, newValue.cmyk) < heuristic(delta, oldValue.cmyk)) {
        return newValue;
      }
      // The previous value is closer
      return oldValue;
    },
    null
  );
}

function heuristic(delta, color) {
  return Math.abs(delta.cyan - color.cyan) +
    Math.abs(delta.magenta - color.magenta) +
    Math.abs(delta.yellow - color.yellow) +
    Math.abs(delta.black - color.black);
}
