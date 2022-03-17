export function sum(num1, num2) {
  const intNum1 = parseInt(num1, 10);
  const intNum2 = parseInt(num2, 10);

  if (
    Number.isNaN(intNum1) ||
    Number.isNaN(intNum2) ||
    Array.isArray(num1) ||
    Array.isArray(num2)
  ) {
    throw new Error('Please check your input, they must be a number');
  }

  return intNum1 + intNum2;
}
