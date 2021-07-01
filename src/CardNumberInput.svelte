<script lang="ts">
  import handleNumberInput from './handleNumberInput';
  import isValidCreditCard from './isValidCreditCard';
  import { number } from './store';

  let error;

  const handleChange = (event) => {
    if ($number.length === 16) {
      if (!isValidCreditCard($number)) {
        error = true;
      } else {
        error = false;
      }
    }
  };
  let maxCardlength = 16;
</script>

<label for="cardNumber">Card Number</label>
<input
  name="cardNumber"
  id="cardNumber"
  bind:value={$number}
  on:keypress={handleNumberInput}
  on:keyup={handleChange}
  maxlength={maxCardlength}
  class={error ? 'card__number--error' : ''}
/>
{#if error}<p class="card__number-error-message">That seems wrong</p>{/if}

<style>
  .card__number--error,
  .card__number--error:focus {
    border-color: #b00020;
    background-color: hsl(349, 100%, 90%);
  }
  .card__number-error-message {
    padding: 0;
    text-align: right;
    margin-top: -28px;
    margin-right: 8px;
    color: #b00020;
    font-size: 0.75rem;
  }
</style>
