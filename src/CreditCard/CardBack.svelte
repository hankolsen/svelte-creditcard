<script lang="ts">
  import { cvv, name, formattedNumber } from '@/store';
  import CardExpiration from './CardExpiriation.svelte';
</script>

<div class="card__face card__back">
  <div class="card__strips-wrapper">
    <div class="card__magnetic-strip" />
    <div class="card__signature-strip">
      <div class="card__cvv">{$cvv ?? ''}</div>
    </div>
  </div>
  <div class="card__content">
    <div class="card__number">{$formattedNumber}</div>
    <div class="card__name-expiration-wrapper">
      <div class="card__name">{$name}</div>
      <CardExpiration />
    </div>
  </div>
</div>

<style>
  .card__back {
    background: linear-gradient(to right, #3159cc, #3139ff);
    color: white;
    transform: rotateY(180deg);
    flex-direction: column;
    justify-content: space-between;
  }

  .card__strips-wrapper {
    width: 100%;
  }

  .card__magnetic-strip {
    width: 100%;
    height: 1.875rem;
    margin-top: 1.25rem;
    background: #333;
  }

  .card__signature-strip {
    width: 70%;
    height: 2.1875rem;
    margin-top: 1.25rem;
    margin-left: 0.625rem;
    text-align: right;
    padding: 0.125rem;
    position: relative;
    background-color: #efefef;
    background-image: repeating-linear-gradient(
        -45deg,
        #e5e5e5 0,
        #e5e5e5 5%,
        transparent 0,
        transparent 50%
      ),
      repeating-linear-gradient(
        45deg,
        #e5e5e5 0,
        #e5e5e5 5%,
        transparent 0,
        transparent 50%
      );
    background-size: 15px 15px;
  }

  .card__cvv {
    font-style: italic;
    font-family: 'Helvetica Neue', 'Arial', sans-serif;
    color: #333;
    font-size: 0.875rem;
  }

  .card__back .card__number,
  .card__back .card__name {
    transform: scale(-1, 1);
    opacity: 0.3;
    color: rgba(10, 60, 150, 0.8);
    text-shadow: 1px 2px 4px #222, 0 0 0 #000, 1px 2px 4px #fff;
  }

  .card__back .card__name-expiration-wrapper {
    align-items: flex-end;
  }
</style>
