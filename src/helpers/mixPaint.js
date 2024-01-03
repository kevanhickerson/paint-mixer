import cmykDistance from './cmykDistance';

export default function(colors, targetColor) {
  let finalColor = {
    cyan: 0,
    magenta: 0,
    yellow: 0,
    black: 0,
  }

  let totalTimes = 0;

  for (const color of colors) {
    const cmyk = color.paint.cmyk;
    totalTimes += color.times;

    finalColor.cyan += cmyk.cyan * color.times;
    finalColor.magenta += cmyk.magenta * color.times;
    finalColor.yellow += cmyk.yellow * color.times;
    finalColor.black += cmyk.black * color.times;
  }

  finalColor.cyan /= totalTimes;
  finalColor.magenta /= totalTimes;
  finalColor.yellow /= totalTimes;
  finalColor.black /= totalTimes;

  return finalColor;
}