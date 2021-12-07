<template>
  <div id="app">
    <div id="book">
      <div id="img">
        <img alt="book img" src="./assets/img.png"/>
      </div>
      <div id="bookTitle">
        <p class="title">ベンダーマネジメントの極意</p>
        <p class="author">著者： 長尾 清一</p>
        <p class="publisher">出版社： 日経BP</p>
        <p class="publishYear">出版年： 2009年7月23日</p>
        <p class="summary">
          概要：プロジェクトの成功とスキルアップのために、
          日々現場で奮闘するプロジェクトマネジャーの皆さんにぜひ手にしていただきたい一冊です。
        </p>
        <p class="outline">目次</p>
      </div>
    </div>
    <div id="tab">
    <ul class="tabMenu">
        <li @click="isSelect('1')">感想</li>
        <li @click="isSelect('2')">Q＆A</li>
    </ul>
    <div class="tabContents">
        <div v-if="isActive === '1'">Tab All</div>
        <div v-else-if="isActive === '2'">Tab News</div>
    </div>
</div>
 
  </div>
 
</template>
<script>
export default {
  name: "App",
  data () {
    return {
      isActive: "1"
    }
  },
  components: {},
  methods: {
        isSelect: function (num) {
            this.isActive = num;
        }
    }
    
 
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
#img {
  text-align: left;
  /* padding-right: 50px; */
  
}
.title {
  font-size: 40px;
  margin-left: 0;
  margin-top: 20px;
  margin-bottom: 10px;
}
#book {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
#bookTitle {
  /* padding-left: 50px; */
  margin-left: 20px;
  padding-left: 20px;
 
  border: solid 1px black;
  border-width: 100%;
  margin-right: 0;
}
 
#tab {
  
  width: 100%;
  max-width: 500px;
  margin: 40px auto;
}
.tabMenu {
    display: flex;
}   
    li {
      width: auto;
      padding: 10px 20px;
      color: white;
      border-right: 1px solid white;
      background-color: green;
      cursor: pointer;
            
      
      }
    
 
  
 
  .tabContents {
    width: 100%;
    padding: 20px;
    border: 1px solid green;
    
 
  
}
</style>