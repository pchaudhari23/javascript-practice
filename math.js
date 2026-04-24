// 1. Generate a random number between 1 and 100
const getRandomNumber = () => {
  return Math.floor(Math.random() * 100) + 1;
};
console.log("1. Random number between 1 and 100:", getRandomNumber());

// --------------------------------------------------------------------------------
// 2. Find the square root of a number
const getSquareRoot = (number) => {
  return Math.sqrt(number);
};
console.log("2. Square root of 144:", getSquareRoot(144)); // 12

// --------------------------------------------------------------------------------
// 3. Find the power of a number (e.g., 2^5)
const getPower = (base, exponent) => {
  return Math.pow(base, exponent);
};
console.log("3. 2^5:", getPower(2, 5)); // 32

// --------------------------------------------------------------------------------
// 4. Round a number to the nearest integer
const roundToNearestInteger = (number) => {
  return Math.round(number);
};
console.log("4. Round 4.7 to the nearest integer:", roundToNearestInteger(4.7)); // 5

// --------------------------------------------------------------------------------
// 5. Find the absolute value of a number
const getAbsoluteValue = (number) => {
  return Math.abs(number);
};
console.log("5. Absolute value of -15:", getAbsoluteValue(-15)); // 15

// --------------------------------------------------------------------------------
// 6. Find the maximum number in a list
const findMax = (...numbers) => {
  return Math.max(...numbers);
};
console.log("6. Maximum of [1, 3, 7, 5, 2]:", findMax(1, 3, 7, 5, 2)); // 7

// --------------------------------------------------------------------------------
// 7. Find the minimum number in a list
const findMin = (...numbers) => {
  return Math.min(...numbers);
};
console.log("7. Minimum of [1, 3, 7, 5, 2]:", findMin(1, 3, 7, 5, 2)); // 1

// --------------------------------------------------------------------------------
// 8. Generate a random number between 0 (inclusive) and 1 (exclusive)
const getRandomBetweenZeroAndOne = () => {
  return Math.random();
};
console.log("8. Random number between 0 and 1:", getRandomBetweenZeroAndOne());

// --------------------------------------------------------------------------------
// 9. Convert an angle from degrees to radians
const degreesToRadians = (degrees) => {
  return degrees * (Math.PI / 180);
};
console.log("9. Convert 45 degrees to radians:", degreesToRadians(45)); // 0.7853981633974483

// --------------------------------------------------------------------------------
// 10. Find the cosine of an angle (in radians)
const getCosine = (radians) => {
  return Math.cos(radians);
};
console.log("10. Cosine of π/3 (in radians):", getCosine(Math.PI / 3)); // 0.5

// --------------------------------------------------------------------------------------------------------
// MATH METHODS SUMMARY:
// Math.random(): Returns a random number between 0 (inclusive) and 1 (exclusive).
// Math.floor(): Rounds down to the nearest integer.
// Math.ceil(): Rounds up to the nearest integer.
// Math.round(): Rounds to the nearest integer.
// Math.trunc(): Removes the decimal part (truncates).
// Math.abs(): Returns the absolute value of a number.
// Math.sqrt(): Returns the square root of a number.
// Math.cbrt(): Returns the cube root of a number.
// Math.pow(): Returns base raised to the power of exponent.
// Math.min(): Returns the smallest number from given arguments.
// Math.max(): Returns the largest number from given arguments.
// Math.sin(): Returns the sine of an angle (in radians).
// Math.cos(): Returns the cosine of an angle (in radians).
// Math.tan(): Returns the tangent of an angle (in radians).
// Math.asin(): Returns the arcsine of a number (inverse sine).
// Math.acos(): Returns the arccosine of a number (inverse cosine).
// Math.atan(): Returns the arctangent of a number (inverse tangent).
// Math.atan2(): Returns the arctangent of y/x in radians.
// Math.sinh(): Returns the hyperbolic sine of a number.
// Math.cosh(): Returns the hyperbolic cosine of a number.
// Math.tanh(): Returns the hyperbolic tangent of a number.
// Math.exp(): Returns e raised to the power of x.
// Math.log(): Returns the natural logarithm (base e) of a number.
// Math.log10(): Returns the base-10 logarithm of a number.
// Math.log2(): Returns the base-2 logarithm of a number.
// Math.sign(): Returns the sign of a number (-1, 0, or 1).
// Math.PI: The constant PI (~3.14159).
// Math.E: The constant E (Euler's number ~2.71828).
// Math.LN2: The natural logarithm of 2 (~0.693).
// Math.LN10: The natural logarithm of 10 (~2.303).
// Math.LOG2E: The base-2 logarithm of E (~1.443).
// Math.LOG10E: The base-10 logarithm of E (~0.434).
// Math.SQRT1_2: The square root of 0.5 (~0.707).
// Math.SQRT2: The square root of 2 (~1.414).

// --------------------------------------------------------------------------------------------------------
// COMMON CONVERSIONS:
// Degrees to Radians: degrees * (Math.PI / 180)
// Radians to Degrees: radians * (180 / Math.PI)
// Generate random number in range: Math.floor(Math.random() * (max - min + 1)) + min
// Generate random number between a and b: a + Math.random() * (b - a)

// --------------------------------------------------------------------------------------------------------
