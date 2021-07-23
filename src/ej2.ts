function decimalToFactorial(num: number) {
  if (num === 1) {
    return 10;
  } else if (num === 2) {
    return 100;
  } else {
    const maxDiv = maxFactorial(num);
    const result = [];
    let accum = 0;
    for (let i = maxDiv; i >= 0; i--) {
      for (let j = 0; j < num; j++) {
        if (j * factorial(i) > (num - accum)) {
          const multiplier = j - 1;
          result.push(multiplier);
          accum += (multiplier) * factorial(i);
          break;
        }
      }
    }
    return +result.join('');
  }
}


function factorialToDecimal(num: number) {
  const str = num.toString().split('');
  return str.map((num, index) => +num * factorial((str.length - 1) - index))
      .reduce((total, num) => total + num);
}


function maxFactorial(num: number) {
  let result = 1;
  for (let i = 1; i < num; i++) {
    if (factorial(i) <= num) {
      result = i;
    } else break;
  }
  return result;
}

function factorial(num: number): number {
  if (num == 0) return 1;
  return num * factorial(num - 1);
}

console.log(decimalToFactorial(463));
console.log(factorialToDecimal(341010));

