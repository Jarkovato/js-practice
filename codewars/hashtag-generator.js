const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
const prepare = (str) => str.trim().split(' ').map(s => capitalize(s)).join('');

const generateHashtag = (str) => {
  const preparedString = prepare(str);
  if (!preparedString || preparedString.length > 139) return false;
  return `#${preparedString}`
}

const phrase = 'Hello there thanks for trying my Kata';
const phrase2 = 'Hello there           im spaced';
const phrase3 = "code" + " ".repeat(140) + "wars";

console.log(generateHashtag(phrase));
console.log(generateHashtag(phrase2));
console.log(generateHashtag(phrase3));