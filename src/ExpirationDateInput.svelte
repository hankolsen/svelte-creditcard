<script lang="ts">
  import { expireMonth, expireYear } from './store';

  const thisMonth = new Date().getMonth() + 1;
  const months = Array(12)
    .fill(undefined)
    .map((_, i) => i + 1);

  const thisYear = new Date().getFullYear();
  const years = Array(10)
    .fill(undefined)
    .map((_, i) => thisYear + i);

  const handleChangeYear = () => {
    if ($expireYear === thisYear && $expireMonth < thisMonth) {
      expireMonth.set(thisMonth);
    }
  };
</script>

<div class="card__expirationDate-wrapper">
  <label for="expirationDate">Expiration Date</label>
  <select bind:value={$expireMonth} id="expirationDate">
    <option disabled selected value="">Month</option>
    {#each months as month}
      <option
        value={month}
        disabled={$expireYear === thisYear && month < thisMonth}>{month}</option
      >
    {/each}
  </select>
  <!-- svelte-ignore a11y-no-onchange -->
  <select bind:value={$expireYear} on:change={handleChangeYear}>
    <option disabled selected value="">Year</option>
    {#each years as year}
      <option value={year}>{year}</option>
    {/each}
  </select>
</div>
