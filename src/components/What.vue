<template>
  <div class="what">
      <h3>{{ msg }}</h3>
      <p>NFT每次交易都會有固定比例成為該貓的生活費，實現自己養自己的公益模式</p>

      </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "what",
  props: {
    msg: String,
  },
});
</script>

<style scoped lang="scss">


</style>
