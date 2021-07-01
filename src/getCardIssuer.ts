export const CreditCardIssuers = {
  AMERICANEXPRESS: 'amex',
  DINERS: 'diners',
  DISCOVER: 'discover',
  JCB: 'jcb',
  MASTERCARD: 'mastercard',
  VISA: 'visa',
};

const getCreditCardIssuer = (entry: string) => {
  const patterns: { [vendor: string]: RegExp } = {
    [CreditCardIssuers.AMERICANEXPRESS]: /^3[47]/,
    [CreditCardIssuers.DINERS]: /^(?:30[0-5]|36|38)/,
    [CreditCardIssuers.DISCOVER]: /^6(011|5)/,
    [CreditCardIssuers.JCB]: /^(?:2131|1800|35)/,
    [CreditCardIssuers.MASTERCARD]: /^(?:5[1-5]|2[2-7])/,
    [CreditCardIssuers.VISA]: /^4/,
  };

  let cardVendor;
  Object.entries(patterns).some(([vendor, regexp]) => {
    if (regexp.test(entry)) {
      cardVendor = vendor;
      return true;
    }
    return false;
  });
  return cardVendor;
};

export default getCreditCardIssuer;
