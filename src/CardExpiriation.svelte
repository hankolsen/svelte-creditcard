<script lang="ts">
  import { expireMonth, expireYear } from './store';

</script>
<div class="card__expiration-wrapper">
  <div class="card__expiration-month-wrapper">
    <div class="card__expiration-month">
      {#if $expireMonth}
        {$expireMonth?.toString().padStart(2, '0')}
      {/if}
    </div>
  </div>
  <span>{$expireMonth && $expireYear ? '/' : ''}</span>
  <div class="card__expiration-year">
    {$expireYear?.toString().substring(2)}
  </div>
</div>

<style>
  .card__expiration-wrapper {
    display: flex;
    justify-content: flex-end;
  }

  .card__expiration-month,
  .card__expiration-year {
    /* Numbers are so much bigger than letters in the creditcard font */
    font-size: 0.6rem;
  }

  .card__expiration-wrapper > span {
    font-family: 'Helvetica Neue', 'Arial', sans-serif;
    margin: -0.25rem 0.125rem;
  }
</style>