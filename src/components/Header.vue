<template>
  <div class="header-content">
    <header>
      <h1>
        <a href="/">NSSOL 図書館</a>
      </h1>
      <nav class="pc-nav">
        <ul>
          <li><router-link to="/bookList">本の一覧</router-link></li>
        </ul>
      </nav>
    </header>
    <!-- <router-view/> -->
  </div>
</template>

<script>
export default {};
</script>

<style>
.header-content {
   margin: 0;
   padding: 0;
   font-family: "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3", メイリオ, Meiryo, "ＭＳ Ｐゴシック", "Helvetica Neue", Helvetica, Arial, sans-serif;
   background-color: #e6e6e6;
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