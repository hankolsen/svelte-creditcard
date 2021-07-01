<script lang="ts">
  import InlineSVG from 'svelte-inline-svg';
  import CardExpiriation from './CardExpiriation.svelte';
  import getCreditCardIssuer, { CreditCardIssuers } from './getCardIssuer';
  import { name, number, showLogo } from './store';

  let src;
  let logoIsVisible;
  let formattedNumber;
  $: {
    const issuer = getCreditCardIssuer($number);
    src = `logos/${issuer}.svg`;
    logoIsVisible = issuer && $showLogo;

    if (issuer === CreditCardIssuers.AMERICANEXPRESS) {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      const [_, ...amexNumbers] =
        ($number ?? '')
          .padEnd(15, '#')
          .match(/([\d|#]{1,4})([\d|#]{1,6})([\d|#]{1,5})/) || [];
      formattedNumber = amexNumbers.join(' ');
    } else {
      formattedNumber = ($number ?? '')
        .padEnd(16, '#')
        .match(/([\d|#]{1,4})/g)
        ?.join(' ');
    }
  }
</script>

<div class="card__face card__front">
  <div class="card__logo">
    {#if logoIsVisible}<InlineSVG {src} />{/if}
  </div>
  <div class="card__content">
    <div class="card__number">{formattedNumber}</div>
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
