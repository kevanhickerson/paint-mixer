import cmykDistance from './cmykDistance';

export default function(targetColor, currentColor, availableColours) {
  const delta = {
    cyan: targetColor.cyan - currentColor.cyan,
    magenta: targetColor.magenta - currentColor.magenta,
    yellow: targetColor.yellow - currentColor.yellow,
    black: targetColor.black - currentColor.black,
  }

  const closest = availableColours.reduce(
    (oldValue, newValue) => {
      // No color picked yet
      if (oldValue === null) {
        return newValue;
      }

      const oldDelta = {
        cyan: oldValue.cmyk.cyan - currentColor.cyan,
        magenta: oldValue.cmyk.magenta - currentColor.magenta,
        yellow: oldValue.cmyk.yellow - currentColor.yellow,
        black: oldValue.cmyk.black - currentColor.black,
      }

      const newDelta = {
        cyan: newValue.cmyk.cyan - currentColor.cyan,
        magenta: newValue.cmyk.magenta - currentColor.magenta,
        yellow: newValue.cmyk.yellow - currentColor.yellow,
        black: newValue.cmyk.black - currentColor.black,
      }

      // The next value is closer
      if (heuristic(delta, newDelta) < heuristic(delta, oldDelta)) {
        return newValue;
      }

      // The previous value is closer
      return oldValue;
    },
    null
  );

  return closest;
}

function heuristic(delta, color) {
  return cmykDistance(delta, color);
}
