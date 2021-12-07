<template>
  <div id="app">
    <Bookdetail></Bookdetail>
  </div>
</template>
<script>
import Bookdetail from "./components/Bookdetail.vue"
export default {
  name: "App",
  components: {
    Bookdetail
  },
};
 
</script>
 
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
    margin-right: 0;
 
}
</style>