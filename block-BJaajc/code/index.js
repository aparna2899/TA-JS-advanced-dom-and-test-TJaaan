function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

function isPalindrome(value) {
  return '' + value === ('' + value).split('').reverse().join('');
}

function getCircumference(radius) {
  return `The circumference of circle is ${(2 * Math.PI * radius).toFixed(2)}`;
}

function getArea(radius) {
  return `The area of circle is ${(Math.PI * radius * radius).toFixed(2)}`;
}

module.exports = {
  getFullName,
  isPalindrome,
  getCircumference,
  getArea,
};
