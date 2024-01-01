export default function({cyan, magenta, yellow, black}) {
  return {
    red: 255 * (1 - cyan) * (1 - black),
    green: 255 * (1 - magenta) * (1 - black),
    blue: 255 * (1 - yellow) * (1 - black),
  }
}