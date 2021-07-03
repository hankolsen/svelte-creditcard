import getCardIssuer, { CreditCardIssuers } from './getCardIssuer';

describe('getCardIssuer test', () => {
  it('should handle invalid entries', () => {
    expect(getCardIssuer(undefined as any)).toBeUndefined();
    expect(getCardIssuer(0 as any)).toBeUndefined();
    expect(getCardIssuer('')).toBeUndefined();
  });

  it('should return correct issuer numbers', () => {
    expect(getCardIssuer('4331482130087309')).toBe(
      CreditCardIssuers.VISA,
    );
    expect(getCardIssuer('4331482130087309')).toBe(
      CreditCardIssuers.VISA,
    );
    expect(getCardIssuer('4970454550532912')).toBe(
      CreditCardIssuers.VISA,
    );
    expect(getCardIssuer('5341631002476744')).toBe(
      CreditCardIssuers.MASTERCARD,
    );
    expect(getCardIssuer('5410801358751109')).toBe(
      CreditCardIssuers.MASTERCARD,
    );
    expect(getCardIssuer('5598877402644601')).toBe(
      CreditCardIssuers.MASTERCARD,
    );
    expect(getCardIssuer('5041631002476744')).toBeUndefined();
    expect(getCardIssuer('5610801358751109')).toBeUndefined();
    expect(getCardIssuer('2210801358751109')).toBe(
      CreditCardIssuers.MASTERCARD,
    );
    expect(getCardIssuer('2323801358751109')).toBe(
      CreditCardIssuers.MASTERCARD,
    );
    expect(getCardIssuer('2723801358751109')).toBe(
      CreditCardIssuers.MASTERCARD,
    );
    expect(getCardIssuer('2823801358751109')).toBeUndefined();
    expect(getCardIssuer('2123801358751109')).toBeUndefined();
    expect(getCardIssuer('3423801358751109')).toBe(
      CreditCardIssuers.AMERICANEXPRESS,
    );
    expect(getCardIssuer('3723801358751109')).toBe(
      CreditCardIssuers.AMERICANEXPRESS,
    );
    expect(getCardIssuer('3323801358751109')).toBeUndefined();
    expect(getCardIssuer('3003801358751109')).toBe(
      CreditCardIssuers.DINERS,
    );
    expect(getCardIssuer('3023801358751109')).toBe(
      CreditCardIssuers.DINERS,
    );
    expect(getCardIssuer('3053801358751109')).toBe(
      CreditCardIssuers.DINERS,
    );
    expect(getCardIssuer('3123801358751109')).toBeUndefined();

    expect(getCardIssuer('2131801358751109')).toBe(CreditCardIssuers.JCB);
    expect(getCardIssuer('1800801358751109')).toBe(CreditCardIssuers.JCB);
    expect(getCardIssuer('3500801358751109')).toBe(CreditCardIssuers.JCB);
    expect(getCardIssuer('2132801358751109')).toBeUndefined();

    expect(getCardIssuer('6011180135875110')).toBe(
      CreditCardIssuers.DISCOVER,
    );
    expect(getCardIssuer('6012180135875110')).toBeUndefined();
    expect(getCardIssuer('6511180135875110')).toBe(
      CreditCardIssuers.DISCOVER,
    );
    expect(getCardIssuer('6411180135875110')).toBeUndefined();
  });
});
