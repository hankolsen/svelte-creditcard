<script lang="ts">
  import handleNumberInput from './handleNumberInput';
  import { number } from './store';

  let maxCardlength = 16;
</script>

<label for="cardNumber">Card Number</label>
<input
  name="cardNumber"
  id="cardNumber"
  bind:value={$number}
  on:keypress={handleNumberInput}
  maxlength={maxCardlength}
/>
