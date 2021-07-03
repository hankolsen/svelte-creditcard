<script lang="ts">
  import InlineSVG from 'svelte-inline-svg';
  import CardExpiriation from './CardExpiriation.svelte';
  import { name, formattedNumber, logoSrc } from '../store';
</script>

<div class="card__face card__front">
  <div class="card__logo">
    {#if $logoSrc}<InlineSVG src={$logoSrc} />{/if}
  </div>
  <div class="card__content">
    <div class="card__number">{$formattedNumber}</div>
    <div class="card__name-expiration-wrapper">
      <div>
        <div class="card__label">Card Holder</div>
        <div class="card__name">{$name}</div>
      </div>
      <div class="card__expiration-label-wrapper">
        <div class="card__label">Valid Thru</div>
        <CardExpiriation />
      </div>
    </div>
  </div>
</div>

<style>
  .card__front {
    background: linear-gradient(to bottom right, #23aafb, #0277d1);
    color: #ddd;
  }

  .card__logo {
    width: 4.5rem;
    fill: #fff;
    position: absolute;
    top: 0.625rem;
    right: 1.5625rem;
  }

  .card__label {
    font-size: 0.75rem;
    margin-bottom: 0.25rem;
    font-family: 'Helvetica Neue', 'Arial', sans-serif;
  }

  .card__expiration-label-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
