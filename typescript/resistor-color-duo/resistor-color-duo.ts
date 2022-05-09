const colorValues = {
  'black': 0,
  'brown': 1,
  'red': 2,
  'orange': 3,
  'yellow': 4,
  'green': 5,
  'blue': 6,
  'violet': 7,
  'grey': 8,
  'white': 9,
}

export function decodedValue(colors: (keyof typeof colorValues)[]): Number {
  return Number(`${colorValues[colors[0]]}${colorValues[colors[1]]}`)
}
