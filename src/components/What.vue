<template>
  <div class="what">
      <h1>{{ msg }}</h1>  
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
.what{
    width: 100%;
    height: 80vh;
    background-color: #FFF7F4;
}
h1 {
  margin: 0;
  // margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  // margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
