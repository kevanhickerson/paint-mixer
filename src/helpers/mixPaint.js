import cmykDistance from './cmykDistance';

const distanceTolerance = 0.001;

function mixPaint(colors, targetColor, previousDistance = null) {
  let mixedColor = {
    cyan: 0,
    magenta: 0,
    yellow: 0,
    black: 0,
  }

  let totalTimes = 0;

  for (const color of colors) {
    const cmyk = color.paint.cmyk;
    totalTimes += color.times;

    mixedColor.cyan += cmyk.cyan * color.times;
    mixedColor.magenta += cmyk.magenta * color.times;
    mixedColor.yellow += cmyk.yellow * color.times;
    mixedColor.black += cmyk.black * color.times;
  }

  mixedColor.cyan /= totalTimes;
  mixedColor.magenta /= totalTimes;
  mixedColor.yellow /= totalTimes;
  mixedColor.black /= totalTimes;
  
  const distance = cmykDistance(targetColor.cmyk, mixedColor);

  if (previousDistance === null || previousDistance - distance > distanceTolerance) {
    // Moving in the right direction, keep adding parts
    let newColors = structuredClone(colors);
    for (let i = 0; i < newColors.length; i++) {
      if (newColors[i].times > 100) {
        continue;
      }

      newColors[i].times++;

      let derivedMix = mixPaint(newColors, targetColor, distance);

      if (distance - cmykDistance(targetColor.cmyk, derivedMix.cmykResult) > distanceTolerance) {
        return derivedMix;
      }
    }
  }

  return {
    formula: colors,
    cmykResult: mixedColor,
  };
}

export default mixPaint;