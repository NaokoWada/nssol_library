<template>
  <div id="app">
    <div class="header-content">
    <header>
      <h1>
        <a href="/">NSSOL 図書館</a>
      </h1>
      <nav class="pc-nav">
        <ul>
          <li><router-link to="/">ホーム</router-link></li>
          <li><router-link to="/bookList">本の一覧</router-link></li>
        </ul>
      </nav>
    </header>
    <router-view/>
  </div>
  </div>
</template>
<script>


export default {
  name: "App",
  components: {
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