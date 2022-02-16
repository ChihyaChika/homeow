<template>
  <div id="nav">
    <router-link to="/">厝喵 HOMEOW</router-link> |
    <router-link to="/">What?</router-link> |
    <router-link to="/">How?</router-link> |
    <router-link to="/">FAQ</router-link> |
    <router-link to="/">RoadMap</router-link> |
    <router-link to="/">Release</router-link> |
    <router-link to="/">Team</router-link> |
    <router-link to="/about">Help Cat Have Home</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
