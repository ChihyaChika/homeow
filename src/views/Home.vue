<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />

    <!--  這裡  -->
    <button @click="open">Connect</button>
    {{ address }}

    <vdapp-board />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { useBoard, useEthers } from 'vue-dapp';

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
  },
  setup() {
    const { open } = useBoard()
    const { address } = useEthers()

    return { open, address }
  },
});

</script>
