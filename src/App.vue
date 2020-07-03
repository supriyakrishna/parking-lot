<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Vue from "vue";
import VueMask from "v-mask";
Vue.use(VueMask);
export default {
  name: "app",
  components: {},
};
</script>

<style>
body {
  background-color: lightgray;
  overflow-x: hidden;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
