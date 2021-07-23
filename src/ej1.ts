function isLapYear(year: number): boolean {
  const divBy4andNot100 = divisible(year, 4) && !divisible(year, 100);
  const divBy400 = divisible(year, 400);
  return (divBy4andNot100 || divBy400) ? true : false;
}
const divisible = (num: number, div: number) => num % div == 0;
console.log(isLapYear(1997)); // no
console.log(isLapYear(1900)); // no
console.log(isLapYear(1996)); // si
console.log(isLapYear(2000)); // si
console.log(isLapYear(2024)); // si
console.log(isLapYear(2028)); // si
