import isValidCreditCard from './isValidCreditCard';

describe('isValidCreditCard test', () => {
  it('should handle invalid input', () => {
    expect(isValidCreditCard(undefined as any)).toBeUndefined();
    expect(isValidCreditCard(0 as any)).toBeUndefined();
    expect(isValidCreditCard('')).toBeUndefined();
  });

  it('should return correct result for credit cards', () => {
    expect(isValidCreditCard('4331482130087309')).toBe(true);
    expect(isValidCreditCard('4331482130087301')).toBe(false);
    expect(isValidCreditCard('4970454550532912')).toBe(true);
    expect(isValidCreditCard('4999983112146028')).toBe(false);
    expect(isValidCreditCard('4171826490496208')).toBe(true);
    expect(isValidCreditCard('5341631002476744')).toBe(true);
    expect(isValidCreditCard('5598877402644601')).toBe(true);
    expect(isValidCreditCard('5410801358751109')).toBe(true);
    expect(isValidCreditCard('5222866910398499')).toBe(true);
    expect(isValidCreditCard('5236095396323029')).toBe(true);
    expect(isValidCreditCard('5236 0953 9632 3029')).toBe(true);
  });
});
