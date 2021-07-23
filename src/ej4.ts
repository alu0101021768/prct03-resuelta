export function fromSnakeToCamelCase(str: string) {
  return str.split('_')
      .map((word, index) => index === 0 ? word :
        word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
}
export function fromCamelToSnakeCase(str: string) {
  return str.split('')
      .map((letter) => letter === letter.toUpperCase() ?
      '_' + letter.toLowerCase() : letter)
      .join('');
}
// console.log(fromCamelToSnakeCase('sampleString'));
// console.log(fromSnakeToCamelCase('sample_string'));
