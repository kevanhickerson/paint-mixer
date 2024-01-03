export default function(a, b) {
  // Euclidean Distance, but without the expensive square root operation
  return Math.pow(a.cyan - b.cyan, 2) +
    Math.pow(a.magenta - b.magenta, 2) +
    Math.pow(a.yellow - b.yellow, 2) +
    Math.pow(a.black - b.black, 2);
}