<template>

  <div id="app">
    <head>
      <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP" rel="stylesheet">
    </head>
    <div class="mainbody">
     <tytle class="wf-notosansjapanese">
       <font size="7" color="black">本の一覧</font>
       <font size="4" color="black">
         -現在登録されている本は 6 冊です-
       </font></tytle>
    </div>
    
    <table border="1" style="border-collapse: collapse; width:1800px;">
    <thead>
    <tr>
    <div keyword="app2" class="container">
      <form>
        <div class="form-group">

          <!-- <small class="form-text">タイトルまたはキーワードを入力してください。</small> -->
          <input type="text" v-model="keyword" class="form-control" id="id"
           placeholder="タイトルまたはキーワードを入力してください。">
          
          <!-- <button type="submit" class="btn btn-primary">検索</button> -->
              <!-- <div> -->

              <input class="visually-hidden" type="radio" id="option1" value="" v-model="level" />
              <label for="option1">全て</label>

              <input class="visually-hidden" type="radio" id="option2" value="初級" v-model="level" />
              <label for="option2">初級</label>
              
              <input class="visually-hidden" type="radio" id="option3" value="中級" v-model="level" />
              <label for="option3">中級</label>
              
              <input class="visually-hidden" type="radio" id="option4" value="上級" v-model="level" />
              <label for="option4">上級</label>


              

            <!-- <div class="form-group form-radio"> -->
              <!-- <label><input type="radio" v-mode="checklevel" v-bind:value="book.level2">{{ book.level2}}</label> -->
              <!-- <input type="radiobutton" class="form-radio-input" id="radio"> -->
              <!-- <label class="form-radio-input" for="radio">radio button</label> -->

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
    
    <th style="width:300px;">高評価した人</th>
    <!-- <th style="width:150px;">感想</th> -->
    <th style="width:300px;">キーワード一致</th>
    <!-- <th style="width:150px;">感想</th> -->
    </tr>
    </thead>
    
    <tbody style="display: block;overflow-y:scroll;height:600px;">

    <tr v-for="book in filteredbooks" v-bind:key="book.id">
      <!--<div v-if="book.title== keyword || book.keyword==keyword">-->         

        <td style="width:150px;"><img :src="book.image"></td>
    

        <td style="width:150px;"><router-link :to="`/bookList/${book.id}`">{{book.title}}</router-link></td>
        <td style="width:150px;">{{book.keyword}}</td>
        <td style="width:150px;">{{book.level}}</td>
        <td style="width:150px;">{{book.internal}}</td>
        <td style="width:150px;">{{book.bu}}</td>
    
        <td style="width:300px;"><img :src="book.employee1"></td>
        
        <td style="width:300px;"><img :src="book.employee2"></td>
        

      <!--</div>--> 


    </tr>
  

    
    </tbody>
    </table>
    
  </div>

</template>

<script>
export default {
  data() {
    return {
      keyword:"",
      level:"",
      books:[

            {id: 1,
              image:require('../assets/datamodel.png'),
             title:'データモデル大全', 
             internal:'★★★★☆',
             bu:'★★★☆☆',
             employee1:require('../assets/mask_woman5_faceshield.png'),
             comment1:'データモデリングの実務上の具体例がわかりやすい！',
             employee2:require('../assets/mask_woman6_medical.png'),
             comment2:'もう少し具体例の難易度を高くすべき',
             keyword:'データモデル,DX,システム開発,基礎技術',
             level:'初級'},
            {
              id: 2,
              image:require('../assets/NWhard.png'),
             title:'ネットワーク技術', 
             internal:'★★★★☆',
             bu:'★★★☆☆',
             employee1:require('../assets/mask_woman5_faceshield.png'),
             comment1:'前提知識がある程度必要だと感じた。いい本',
             employee2:require('../assets/mask_woman6_medical.png'),
             comment2:'最新の高度なネットワーク技術について知ることができた',
             keyword:'ネットワーク,専門',
             level:'上級'},
             {id:3,
             image:require('../assets/NWeasy.png'),
             title:'ネットワーク構築＆運用がしっかりわかる教科書', 
             internal:'★★★★★',
             bu:'★★★★★',
             employee1:require('../assets/mask_woman5_faceshield.png'),
             comment1:'図が豊富に使われており分かりやすかった',
             employee2:require('../assets/mask_woman6_medical.png'),
             comment2:'初心者でもわかりやすいように説明だった',
             keyword:'ネットワーク,構築,運用,教科書',
             level:'初級'},
            {
              id: 4,
             image:require('../assets/vendar.png'),
             title:'ベンダーマネージメントの極意',
             internal:'★★★★★',
             bu:'★★★★☆',
             employee1:require('../assets/mask_woman5_faceshield.png'),
             comment1:'ためになりました！',
             employee2:require('../assets/mask_woman6_medical.png'),
             comment2:'そんなに読む価値なし！',
             keyword:'ベンダー,マネジメント',
             level:'中級'},
             {
               id: 5,
             image:require('../assets/dx.jpg'),
             title:'DXの思考法',
             internal:'★★☆☆☆',
             bu:'★★★☆☆',
             employee1:require('../assets/mask_woman5_faceshield.png'),
             comment1:'上級者向け',
             employee2:require('../assets/mask_woman6_medical.png'),
             comment2:'知りたいことが書いてなかった',
             keyword:'DX,経済',
             level:'上級'},
             {
               id: 6,
             image:require('../assets/NWospf.png'),
             title:'OSPF Complete Implementation',
             internal:'★★★★★',
             bu:'★★★★★',
             employee1:require('../assets/mask_woman5_faceshield.png'),
             comment1:'OSPFについて詳しく知りたい人にはとてもオススメの本です！',
             employee2:require('../assets/mask_woman6_medical.png'),
             comment2:'OSPFについて完璧に理解できる。ただし内容は英語',
             keyword:'OSPF,ルーティング',
             level:'上級'}
             ]
          
    }
  },

  methods: {
    moveDetail(num) {
      this.$router.push({
        name: "Bookdetail",
        params: {
          id: num
        }
      })
    }
  },

  computed: {
      filteredbooks: function() {
        var books = [];
        for(var i in this.books) { 
          var b  = this.books[i];  
          if((b.keyword.indexOf(this.keyword) !== -1 || b.title.indexOf(this.keyword) !== -1) && b.level.indexOf(this.level) !== -1){ 
            // || b.level.indexOf(this.level) !== -1
            books.push(b); 
          }
        }
        return books; 
      }
    }


}

</script>

<style scoped>
.wf-notosansjapanese { font-family: "Noto Sans JP"; }

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

 .form-control{
   width:25%;
    margin-right: auto;
    padding:15px 0;
    margin-bottom:15px;
    background-color:whitesmoke;
 }

 label {
  cursor: pointer;
  padding-left: 30px;
  position: relative;
}


label::before,
label::after {
  content: "";
  display: block; 
  position: absolute;
}

label::before {
  background-color: whitesmoke;
  border-radius: 0%;
  border: 1px solid #ddd;
  width: 20px;
  height: 20px;
  transform: translateY(-50%);
  top: 50%;
  left: 5px;
}

label::after {
  border-bottom: 2px solid rgb(248, 6, 6);
  border-left: 2px solid rgb(248, 6, 6);
  opacity: 0;
  height: 5px;
  width: 10px;
  transform: rotate(-45deg);
  top: 2px;
  left: 10px;
}

input:checked + label::after {
  opacity: 1;
}

.visually-hidden {
 position: absolute;
 white-space: nowrap;
 border: 0;
 clip: rect(0 0 0 0);
 clip-path: inset(50%);
 overflow: hidden;
 height: 1px;
 width: 1px;
 margin: -1px;
 padding: 0;
}
 
</style>