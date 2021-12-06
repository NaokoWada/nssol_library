<template>
  <div id="app">
    <div id="book">
      <div id="img">
        <img alt="book img" src="./assets/img.png"/>
      </div>
      <div id="bookTitle">
        <p class="title">ベンダーマネジメントの極意</p>
        <p class="author">著者 長尾 清一</p>
        <p class="publisher">出版社 日経BP</p>
        <p class="publishYear">出版年 2009年7月23日</p>
        <p class="summary">
          概要：プロジェクトの成功とスキルアップのために、
          日々現場で奮闘するプロジェクトマネジャーの皆さんにぜひ手にしていただきたい一冊です。
        </p>
        <p class="outline">目次 </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
#img {
  text-align: left;
}
.title {
  font-size: 40px;
  margin-left: 0;
}
#book {
  display: flex;
  justify-content: center;
  align-items: center;
}
#bookTitle {
  border: solid 1px black;
  margin-left: 20px ;
  padding: 10px 20px;
}
</style>
