<script lang="ts">
  import handleNumberInput from '../handleNumberInput/handleNumberInput';
  import { cvv, isFlipped } from '../store';

  const maxCvvLength = 3;

  const onFocus = () => {
    isFlipped.set(true);
  };
  const onBlur = () => {
    isFlipped.set(false);
  };
</script>

<div class="card__cvv-input">
  <label for="cvv">CVV</label>
  <input
    id="cvv"
    name="cvv"
    maxlength={maxCvvLength}
    on:keypress={handleNumberInput}
    bind:value={$cvv}
    on:focus={onFocus}
    on:blur={onBlur}
  />
</div>
