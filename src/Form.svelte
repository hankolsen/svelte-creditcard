<script lang="ts">
  import { name } from './store';
  import CardNumberInput from './CardNumberInput.svelte';
  import ExpirationDateInput from './ExpirationDateInput.svelte';
  import CvvInput from './CvvInput.svelte';

  const handleSubmit = (event: Event) => {
    event.preventDefault();
  };
</script>

<div class="form__wrapper">
  <form on:submit={handleSubmit}>
    <fieldset>
      <CardNumberInput />
    </fieldset>
    <fieldset>
      <label for="cardName">Card Name</label>
      <input name="cardName" id="cardName" bind:value={$name} maxlength="26" />
    </fieldset>
    <fieldset class="row">
      <ExpirationDateInput />
      <CvvInput />
    </fieldset>
    <fieldset>
      <button type="submit">Submit</button>
    </fieldset>
  </form>
</div>

<style>
  .form__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
    background: #fff;
    margin-top: -80px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }

  .row {
    display: flex;
    justify-content: space-between;
  }

  form {
    width: 100%;
  }

  @media screen and (min-width: 500px) {
    form {
      width: 460px;
    }
  }
</style>
