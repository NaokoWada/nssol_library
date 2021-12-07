<template>
  <div id="app">
    
    <div class="mainbody">
     <tytle><font size="7" color="black" background-color="red">本の一覧</font><font size="4" color="black"> -現在登録されている本は ２ 冊です-</font></tytle>
    </div>
    
    <table border="1" style="border-collapse: collapse;">
    <thead>
    <tr>
    
    </tr>
    </thead>
    <thead style="display: block;">
    <tr>
    
    <th style="width:150px;"></th><!-- 空欄用 -->
    <th style="width:150px;">タイトル</th>
    <th style="width:150px;">社内評価</th>
    <th style="width:150px;">BU評価</th>
    <th style="width:150px;">社員A</th>
    <th style="width:150px;">感想</th>
    <th style="width:150px;">社員B</th>
    <th style="width:150px;">感想</th>
    </tr>
    </thead>
    
    <tbody style="display: block;overflow-y:scroll;height:600px;">
    <tr v-for="book in books" v-bind:key="book.id">
      <td style="width:150px;"><img :src="book.image"></td>
    
    <td style="width:150px;">{{book.title}}</td>
    <td style="width:150px;">{{book.internal}}</td>
    <td style="width:150px;">{{book.bu}}</td>
    <td style="width:150px;"><img :src="book.employee1"></td>
    <td style="width:150px;">{{book.comment1}}</td>
    <td style="width:150px;"><img :src="book.employee2"></td>
    <td style="width:150px;">{{book.comment2}}</td>
    </tr>

  

    
    </tbody>
    </table>
    
  </div>

</template>

<script>
export default {
  data() {
    return {
      books:[
            {image:'../assets/datamodel.png',
             title:'データモデル大全', 
             internal:'★★★★☆',
             bu:'★★★☆☆',
             employee1:'../assets/mask_woman5_faceshield.png',
             comment1:'データモデリングの実務上の具体例がわかりやすい！',
             employee2:'img src="../assets/mask_woman6_medical.png',
             comment2:'もう少し具体例の難易度を高くすべき'},
            {
             image:'../assets/vendar.png',
             title:'ベンダーマネージメントの極意',
             internal:'★★★★★',
             bu:'★★★★☆',
             employee1:'../assets/mask_woman5_faceshield.png',
             comment1:'ためになりました！',
             employee2:'../assets/mask_woman6_medical.png',
             comment2:'そんなに読む価値なし！'}
             ]
          
    }
  }
}
</script>

<style scoped>
#app {

  text-align: center;
  margin-left: auto;
  margin-right: auto;
 
}
 .mainbody{
   background-image: url(../assets/haikei.png);
   text-align: center;
   vertical-align: top;
 }

 
</style>