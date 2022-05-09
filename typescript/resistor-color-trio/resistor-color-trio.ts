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

export function decodedResistorValue(colors: (keyof typeof colorValues)[]): string {
  let value = `${colorValues[colors[0]]}${colorValues[colors[1]]}`
  let message = 'ohms'
  
  value = value.padEnd(value.length + colorValues[colors[2]], '0')

  if (Number(value) >= 1000) {
    value = `${Number(value) / 1000}`
    message = 'kiloohms'
  }

  return `${value} ${message}`
}
