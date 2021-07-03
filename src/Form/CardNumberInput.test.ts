/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/svelte';
import CardNumberInput from './CardNumberInput.svelte';

describe('CardNumberInput test', () => {
  it('should render', () => {
    const { container, getByLabelText } = render(CardNumberInput);
    expect(getByLabelText('Card Number')).toBeDefined();
    expect(container).toMatchSnapshot();
  });
});
