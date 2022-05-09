// on every year that is evenly divisible by 4
//   except every year that is evenly divisible by 100
//     unless the year is also evenly divisible by 400

export function isLeap(year: number): boolean {
  return !(year % 400)
    ? true
    : !(year % 100)
      ? false
      : !(year % 4)
        ? true
        : false
}