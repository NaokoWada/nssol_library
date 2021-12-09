<template>
  <div id="app">
    <div id="book">
      <div id="img">
        <img alt="book img" src="../assets/img.png" />
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
    <table class="detail">
      <tr>
        <td>
          <div id="tab">
            <ul class="tabMenu">
              <li class="tabmenu" @click="isSelect('1')">感想</li>
              <li class="tabmenu" @click="isSelect('2')">Q＆A</li>
            </ul>
            <div class="tabContents">
              <div v-if="isActive === '1'">
                <BookReview></BookReview>
              </div>
              <div v-if="isActive === '2'">
                <BookQA></BookQA>
              </div>
            </div>
          </div>
        </td>
      
        <td>
          <div id="review">
            <h1>この本を読んだ人</h1>
            <ul class="example">
      
                <li><img alt="user img" src="../assets/user.png" />
                <br>
                <button class="buttonmenu" v-on:click="home">user1</button></li>
                
                  
                <li><img alt="user img" src="../assets/user.png" />
                <br>
                <button class="buttonmenu" v-on:click="home">user2</button></li>
                
                  
                <li><img alt="user img" src="../assets/user.png" />
                <br>
                <button class="buttonmenu" v-on:click="home">user3</button></li>
              </ul>
            
          </div>
        </td>
      </tr>
    </table>
  </div>
    
 
</template>
<script>
import BookReview from './BookReview.vue'
import BookQA from './BookQA.vue'

export default {
  name: "Bookdetail",
  data() {
    return {
      isActive: "1",
    };
  },
  components: {
    BookReview,
    BookQA,
  },
  methods: {
    isSelect: function (num) {
      this.isActive = num;
    },
    home() {
      this.$router.push("");
    },
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-right: 0;
}
#img {
  text-align: left;
  margin: 10px 40px;
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
  margin: 40px 200px 40px 300px;
}
 
.tabMenu {
  display: flex;
}
.tabmenu {
  width: auto;
  padding: 10px 20px;
  color: white;
  border-right: 1px solid white;
  background-color: green;
  cursor: pointer;
}
 
.tabContents {
  width: 600px;
  height: 300px;
  padding: 20px;
  border: 1px solid green;
  overflow-y:scroll;
}
 
.home {
  margin: 30px;
}
 
.example li{
  list-style: none;
  padding: 0;
  margin: 30px;
  padding: auto;
 
}
 
.buttonmenu {
  margin: 10px 30px;
 
}
 
</style>