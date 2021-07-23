function isValid(str: string) {
  // Check if it's empty
  const emptyString = str === '';
  // Should be empty
  const strangeCharacters = str.split(/[a-zA-Z0-9]/)
      .filter((el) => el !== '')
      .length !== 0;
  // All the numbers
  const sizes = str.split(/[a-z]/)
      .filter((num) => num !== '')
      .map((num) => +num);
  // All the words
  const words = str.split(/[0-9]/)
      .filter((num) => num !== '');
  // Checks if words have the proper size
  const sameSize = sizes.every((size, index) => size === words[index].length);
  return emptyString || (!strangeCharacters && sameSize);
}

console.log(isValid('3hey5hello2hi'));
