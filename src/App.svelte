<script lang="ts">
  import InlineSVG from 'svelte-inline-svg';
  import CreditCard from '@/CreditCard/CreditCard.svelte';
  import Form from '@/Form/Form.svelte';
</script>

<div class="wrapper">
  <div>
    <CreditCard />
    <Form />
  </div>
</div>
<footer>
  <a class="github__link"
     target="_blank"
     rel="noopener noreferrer"
     href="https://github.com/hankolsen/svelte-creditcard"
  >
    <div class="github__link-content">
      <InlineSVG class="github__link-logo" src="logos/github.svg"/>
      <span class="github__link-text">GitHub</span>
    </div>
  </a>
</footer>
