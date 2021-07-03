/**
 * Helper to summarize the digits in any value that is 10 or greater, e.g. has two digits
 * @param value
 */
const getSingleDigit = (value: number) => {
  if (value < 10) {
    return value;
  }
  return value
    .toString()
    .split('')
    .map(Number)
    .reduce((partSum, n) => partSum + n, 0);
};

const isValidCreditCard = (entry: string) => {
  if (!entry || entry.length === 1) {
    return undefined;
  }

  const digits = entry
    .replace(/\D+/g, '') // Remove any spaces, dots etc
    .split('') // Create an array of strings
    .reverse() // Reverse the array so we get correct calculation order
    .map(Number); // and finally make numbers of the now string entries

  // The firs number in the list is now the checksum that we want get from our calculation
  const expectedChecksum = digits.shift();

  // Do the calculation
  // Multiply every second number by 2, sum any double digits and summarize everything
  const checksum = digits.reduce((acc, digit, index) => {
    if (index % 2) {
      acc += digit;
      return acc;
    }
    acc += getSingleDigit(digit * 2);
    return acc;
  }, 0);

  return expectedChecksum === (checksum * 9) % 10;
};

export default isValidCreditCard;
