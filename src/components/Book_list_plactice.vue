<template>
  <div>
    <table border="1" style="border-collapse: collapse;">
      <thead style="display: block;">
        <tr>
          <tytle style="width:300px;"><img src="../assets/onepiece01_luffy.png">本の一覧<img src="../assets/onepiece01_luffy.png"></tytle>
        </tr>
        <tr>
          <th style="width:150px;"></th>
        </tr>
        <body>
          <h1 class="bg-secondary text-white display-4 px-3"></h1>
            <div id="app" class="container">
                <p>{{ message }}</p>
                <table class="table">
                  <thead class="thead-dark">
                  <tr>
                    <th style="width:150px;">タイトル</th>
                    <th style="width:150px;">社内評価</th>
                    <th style="width:150px;">BU評価</th>
                    <th style="width:150px;">社員A</th>
                    <th style="width:150px;">感想</th>
                    <th style="width:150px;">社員B</th>
                    <th style="width:150px;">感想</th>
                  </tr>
                  <tr v-for="book in books" v-bind:key="book.id">
                    <td>{{book.title}}</td>
                    <td>{{book.internal}}</td>
                    <td>{{book.bu}}</td>
                    <td>{{book.employee1}}</td>
                    <td>{{book.comment1}}</td>
                    <td>{{book.employee2}}</td>
                    <td>{{book.comment2}}</td>
                  </tr> 
                </thead> 
              </table>
           </div>
        </body>
      </thead>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      books:[
            {title:'データモデル大全',
             internal:'★★★★☆',
             bu:'★★★☆☆',
             employee1:'./assets/mask_woman5_faceshield.png',
             comment1:'データモデリングの実務上の具体例がわかりやすい！',
             employee2:'img src="../assets/mask_woman6_medical.png',
             comment2:'もう少し具体例の難易度を高くすべき'},
            {title:'ベンダーマネージメントの極意',
             internal:'★★★★★',
             bu:'★★★★☆',
             employee1:'img src="../assets/mask_woman5_faceshield.png',
             comment1:'ためになりました！',
             employee2:'img src="../assets/mask_woman6_medical.png',
             comment2:'そんなに読む価値なし！'}
             ]
          
    }
  }
}
</script>



