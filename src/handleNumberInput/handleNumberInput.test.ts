import handleNumberInput from './handleNumberInput';

interface TestKeyEvent extends KeyboardEvent {
  key: string;
}

describe('handleNumberInput test', () => {
  it('should allow numbers', () => {
    const testee: TestKeyEvent = {} as TestKeyEvent;
    testee.key = '0';
    expect(handleNumberInput(testee)).toBeTruthy;
    testee.key = '5';
    expect(handleNumberInput(testee)).toBeTruthy;
    testee.key = '6';
    expect(handleNumberInput(testee)).toBeTruthy;
  });  
  
  it('should prevent non-numbers', () => {
    const preventDefault = jest.fn();
    const testee: TestKeyEvent = { preventDefault } as unknown as TestKeyEvent;
    testee.key = 'a';
    expect(handleNumberInput(testee)).toBeFalsy;
    testee.key = 'X';
    expect(handleNumberInput(testee)).toBeFalsy;
    testee.key = '-';
    expect(handleNumberInput(testee)).toBeFalsy;
    expect(preventDefault).toHaveBeenCalledTimes(3)
  });
});
