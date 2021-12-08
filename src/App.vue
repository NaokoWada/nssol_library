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

header {
   padding: 30px 4% 10px;
   top: 0;
   width: 100%;
   background-color: #fff;
   display: flex;
   align-items: center;
}
h1 {
   margin: 0; 
   padding: 0;
   font-size: 20px;
}
a {	
   text-decoration: none;
   color: #4b4b4b;
}
ul {
   list-style: none;
   margin: 0;
   display: flex;
}
li {
   margin: 0 0 0 15px;
   font-size: 14px;
}
</style>