function onePunch(str: string) {
  return (str === '') ? 'Broken!' : str.split(/[ae]/)
      .join('')
      .split(' ')
      .sort()
      .join(' ');
}
console.log(onePunch('Beard Jeans Hairbrush Knuckleduster Sand'));
console.log(onePunch('Sock Beard Vest Lady Sage'));
console.log(onePunch('Beard Sack Gun Parachute Face-Kicking-Shoes'));
console.log(onePunch('Snot Snow Soda Tank Beard'));
console.log(onePunch(''));
