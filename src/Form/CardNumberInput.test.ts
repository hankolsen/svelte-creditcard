import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import CardNumberInput from './CardNumberInput.svelte';

describe('CardNumberInput test', () => {
  it('should render', () => {
    const { container } = render(CardNumberInput);
    const cardNumberInput = screen.getByLabelText(/card Number/i) as HTMLInputElement;
    userEvent.type(cardNumberInput, '123');
    expect(cardNumberInput.value).toBe('123');
    userEvent.type(cardNumberInput, 'abc');
    expect(cardNumberInput.value).toBe('123');
    userEvent.type(cardNumberInput, '456789012345678901234567890');
    expect(cardNumberInput.value).toBe('1234567890123456');

    expect(container).toMatchSnapshot();
  });
});
