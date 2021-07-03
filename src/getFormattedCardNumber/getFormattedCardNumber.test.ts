import { CreditCardIssuers } from '../getCardIssuer/getCardIssuer';
import getFormattedCardNumber from './getFormattedCardNumber';

describe('getFormattedCardNumber test', () => {
  it('should format a VISA card', () => {
    expect(getFormattedCardNumber(['1234567891234567', CreditCardIssuers.VISA])).toBe('1234 5678 9123 4567');
  });

  it('should format an AMEX card', () => {
    expect(getFormattedCardNumber(['123456789123456', CreditCardIssuers.AMERICANEXPRESS])).toBe('1234 567891 23456');
  });
});
