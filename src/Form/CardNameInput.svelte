<script lang="ts">
  import { name } from '../store';
</script>

<label for="cardName">Card Name</label>
<input name="cardName" id="cardName" bind:value={$name} maxlength="26" />
