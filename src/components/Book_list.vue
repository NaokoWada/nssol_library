<template>
  <div id="app">
    
    <div class="mainbody">
     <tytle><font size="7" color="black" background-color="red">本の一覧</font><font size="4" color="black">-現在登録されている本は 6 冊です-</font></tytle>
    </div>
    
    <table border="1" style="border-collapse: collapse;">
    <thead>
    <tr>
    <div keyword="app2" class="container">
      <form>
        <div class="form-group">
          <label for="Keyword">タイトルorキーワード</label>
            <input type="text" class="form-control" id="id"
              placeholder="タイトルまたはキーワードを入力">
            <small class="form-text">タイトルまたはキーワードを入力してください。</small>
          <button type="submit" class="btn btn-primary">検索</button>
        </div>
      </form>
    </div>
    </tr>
    </thead>
    <thead style="display: block;">
    <tr>
    
    <th style="width:150px;"></th><!-- 空欄用 -->
    <th style="width:150px;">タイトル</th>
    <th style="width:150px;">キーワード</th>
    <th style="width:150px;">読みやすさ</th>
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
      <div v-if="book.title== keyword || book.keyword==keyword"> 
        <td style="width:150px;"><img :src="book.image"></td>
    
        <td style="width:150px;">{{book.title}}</td>
        <td style="width:150px;">{{book.keyword}}</td>
        <td style="width:150px;">{{book.level}}</td>
        <td style="width:150px;">{{book.internal}}</td>
        <td style="width:150px;">{{book.bu}}</td>
    
        <td style="width:150px;"><img :src="book.employee1"></td>
        <td style="width:150px;">{{book.comment1}}</td>
        <td style="width:150px;"><img :src="book.employee2"></td>
        <td style="width:150px;">{{book.comment2}}</td>
      </div>
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
            {image:require('../assets/datamodel.png'),
             title:'データモデル大全', 
             internal:'★★★★☆',
             bu:'★★★☆☆',
             employee1:require('../assets/mask_woman5_faceshield.png'),
             comment1:'データモデリングの実務上の具体例がわかりやすい！',
             employee2:require('../assets/mask_woman6_medical.png'),
             comment2:'もう少し具体例の難易度を高くすべき',
             keyword:'データモデル',
             level:'初級'},
            {image:require('../assets/NWhard.png'),
             title:'ネットワーク', 
             internal:'★★★★☆',
             bu:'★★★☆☆',
             employee1:require('../assets/mask_woman5_faceshield.png'),
             comment1:'前提知識がある程度必要だと感じた。いい本',
             employee2:require('../assets/mask_woman6_medical.png'),
             comment2:'最新の高度なネットワーク技術について知ることができた',
             keyword:'ネットワーク',
             level:'上級'},
             {image:require('../assets/NWeasy.png'),
             title:'ネットワーク構築＆運用がしっかりわかる教科書', 
             internal:'★★★★★',
             bu:'★★★★★',
             employee1:require('../assets/mask_woman5_faceshield.png'),
             comment1:'図が豊富に使われており分かりやすかった',
             employee2:require('../assets/mask_woman6_medical.png'),
             comment2:'初心者でもわかりやすいように説明だった',
             keyword:'ネットワーク構築',
             level:'初級'},
            {
             image:require('../assets/vendar.png'),
             title:'ベンダーマネージメントの極意',
             internal:'★★★★★',
             bu:'★★★★☆',
             employee1:require('../assets/mask_woman5_faceshield.png'),
             comment1:'ためになりました！',
             employee2:require('../assets/mask_woman6_medical.png'),
             comment2:'そんなに読む価値なし！',
             keyword:'マネジメント',
             level:'中級'},
             {
             image:require('../assets/dx.jpg'),
             title:'DXの思考法',
             internal:'★★☆☆☆',
             bu:'★★★☆☆',
             employee1:require('../assets/mask_woman5_faceshield.png'),
             comment1:'上級者向け',
             employee2:require('../assets/mask_woman6_medical.png'),
             comment2:'知りたいことが書いてなかった',
             keyword:'DX',
             level:'上級'},
             {
             image:require('../assets/NWospf.png'),
             title:'OSPF Complete Implementation',
             internal:'★★★★★',
             bu:'★★★★★',
             employee1:require('../assets/mask_woman5_faceshield.png'),
             comment1:'OSPFについて詳しく知りたい人にはとてもオススメの本です！',
             employee2:require('../assets/mask_woman6_medical.png'),
             comment2:'OSPFについて完璧に理解できる。ただし内容は英語',
             keyword:'OSPF',
             level:'上級'}
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