<template>
  <div id="app">
    <BookList></BookList>
    <Header></Header>
    <Bookdetail></Bookdetail>
  </div>
</template>
<script>

import BookList from './components/Book_list.vue'
import Bookdetail from "./components/Bookdetail.vue"
import Header from "./components/Header.vue"

export default {
  name: "App",
  components: {
    BookList,
   Bookdetail,
    Header
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