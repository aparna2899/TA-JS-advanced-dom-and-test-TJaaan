const { not } = require('micromatch');
const {
  getFullName,
  isPalindrome,
  getCircumference,
  getArea,
} = require('./index');

// Test function getFullName
test(`Hermione + Granger is Hermione Granger`, () => {
  expect(getFullName(`Hermione`, `Granger`)).toBe(`Hermione Granger`);
});
test(`Ron + Weasley is Ron Weasley`, () => {
  expect(getFullName(`Ron`, `Weasley`)).toBe(`Ron Weasley`);
});
test(`Harry + Potter is Harry Potter`, () => {
  expect(getFullName(`Harry`, `Potter`)).toBe(`Harry Potter`);
});

test(`Ginevra + Potter is not Ginevra Weasley`, () => {
  expect(getFullName(`Ginevra`, `Potter`)).not.toBe(`Ginevra Weasley`);
});

test(`Nevile + Longbottom is not Neville Longbottom`, () => {
  expect(getFullName(`Nevile`, `Longbottom`)).not.toBe(`Neville Longbottom`);
});

test(`Harry + Lovegood is not Luna Lovegood`, () => {
  expect(getFullName(`Harry`, `Lovegood`)).not.toBe(`Luna Lovegood`);
});

// Test function isPalindrome

test(`12321 is a Palindrome`, () => {
  expect(isPalindrome(12321)).toBe(true);
});

test(`232 is a Palindrome`, () => {
  expect(isPalindrome(232)).toBe(true);
});

test(`555 is a Palindrome`, () => {
  expect(isPalindrome(555)).not.toBe(false);
});

test(`122 is not a Palindrome`, () => {
  expect(isPalindrome(122)).not.toBe(true);
});

test(`7771 is not a Palindrome`, () => {
  expect(isPalindrome(7771)).not.toBe(true);
});

test(`1 is a Palindrome`, () => {
  expect(isPalindrome(7771)).not.toBe(true);
});

// Test function getCircumference

test(`Circumference is 31.42`, () => {
  expect(getCircumference(5)).toBe(`The circumference of circle is 31.42`);
});

test(`Circumference is 75.40`, () => {
  expect(getCircumference(12)).toBe(`The circumference of circle is 75.40`);
});

test(`Circumference is 0.00`, () => {
  expect(getCircumference(0)).toBe(`The circumference of circle is 0.00`);
});

test(`Circumference is not to be 31.42`, () => {
  expect(getCircumference(6)).not.toBe(`The circumference of circle is 31.42`);
});

test(`Circumference is not to be 56.3`, () => {
  expect(getCircumference(9)).not.toBe(`The circumference of circle is 56.3`);
});

test(`Circumference is not to be 90.43`, () => {
  expect(getCircumference(3)).not.toBe(`The circumference of circle is 90.43`);
});

// Test function getArea

test(`Area is 78.54`, () => {
  expect(getArea(5)).toBe(`The area of circle is 78.54`);
});

test(`Area is 254.47`, () => {
  expect(getArea(9)).toBe(`The area of circle is 254.47`);
});

test(`Area is 706.86`, () => {
  expect(getArea(15)).toBe(`The area of circle is 706.86`);
});

test(`Area is not to be 78.54`, () => {
  expect(getArea(7)).not.toBe(`The area of circle is 78.54`);
});

test(`Area is not to be 123.45`, () => {
  expect(getArea(10)).not.toBe(`The area of circle is 123.45`);
});

test(`Area is not to be 100.00`, () => {
  expect(getArea(2)).not.toBe(`The area of circle is 100.00`);
});
