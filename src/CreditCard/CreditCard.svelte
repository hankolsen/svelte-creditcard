<script lang="ts">
  import CardFront from '@/CreditCard/CardFront.svelte';
  import CardBack from '@/CreditCard/CardBack.svelte';

  import { isFlipped, showLogo } from '@/store';

  const onAnimationStart = () => {
    setTimeout(() => {
      showLogo.set(flipClass !== 'card--flipp');
    }, 150);
  };
  
  // flipClass should not be set on load!
  // It is needed to animate the "return" rotation from back to front
  let flipClass = '';
  $: {
    if ($isFlipped !== undefined) {
      flipClass = $isFlipped ? 'card--flipp' : 'card--flopp';
    }
  }
</script>

<div class="card__wrapper">
  <div class={`card ${flipClass}`} on:animationstart={onAnimationStart}>
    <CardFront />
    <CardBack />
  </div>
</div>

<style>
  .card__wrapper {
    width: 76%;
    margin: 0 auto;
    perspective: 800px;
    aspect-ratio: 85.6 / 53.98;
  }

  @media screen and (min-width: 500px) {
    .card__wrapper {
      width: 350px;
    }

    .card {
      font-family: CreditCard, sans-serif;
      position: relative;
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
      transition: transform 0.5s;
      transform-origin: center center;
      transform: rotateX(0);
    }
  }

  .card--flipp {
    animation: flipp 0.5s forwards;
  }

  .card--flopp {
    animation: flopp 0.5s;
  }

  @keyframes flipp {
    0% {
      transform: rotateY(0);
    }

    10% {
      transform: rotateY(0) scale(0.85) translateZ(20px);
    }

    90% {
      transform: rotateY(180deg) scale(0.85) translateZ(-20px);
    }

    100% {
      transform: rotateY(180deg);
    }
  }

  @keyframes flopp {
    00% {
      transform: rotateY(180deg);
    }

    10% {
      transform: rotateY(180deg) scale(0.85) translateZ(20px);
    }

    90% {
      transform: rotateY(0) scale(0.85) translateZ(-20px);
    }

    100% {
      transform: rotateY(0deg);
    }
  }
</style>
