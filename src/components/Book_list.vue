<template>
  <div id="app">
    <head>
      <link
        href="https://fonts.googleapis.com/css?family=Noto+Sans+JP"
        rel="stylesheet"
      />
    </head>
    <div class="mainbody">
      <tytle class="wf-notosansjapanese">
        <font size="7" color="black">本の一覧</font>
        <font size="4" color="black">
          -現在登録されている本は 6 冊です-
        </font></tytle>
    </div>

    <table class="tablestyle" border="1" style="border-collapse: collapse; width: 2200px; ">
      <thead>
        <tr>
          <div keyword="app2" class="container">
            <form>
              <div class="form-group">
                <!-- <small class="form-text">タイトルまたはキーワードを入力してください。</small> -->
                <input
                  type="text"
                  v-model="keyword"
                  class="form-control"
                  id="id"
                  placeholder="タイトルまたはキーワードを入力してください。"
                />

                <!-- <button type="submit" class="btn btn-primary">検索</button> -->
                <!-- <div> -->

                <input
                  class="visually-hidden"
                  type="radio"
                  id="option1"
                  value=""
                  v-model="level"
                />
                <label for="option1">全て</label>

                <input
                  class="visually-hidden"
                  type="radio"
                  id="option2"
                  value="初級"
                  v-model="level"
                />
                <label for="option2">初級</label>

                <input
                  class="visually-hidden"
                  type="radio"
                  id="option3"
                  value="中級"
                  v-model="level"
                />
                <label for="option3">中級</label>

                <input
                  class="visually-hidden"
                  type="radio"
                  id="option4"
                  value="上級"
                  v-model="level"
                />
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
      <thead style="display: block; margin: 0 260px 0 260px">
        <tr>
          <th style="width: 200px"></th>
          <!-- 空欄用 -->
          <th style="width: 200px">キーワード</th>
          <th style="width: 200px">読みやすさ</th>
          <th style="width: 200px">社内評価</th>
          <th style="width: 200px">BU評価</th>

          <th style="width: 440px">読んだ人</th>
        </tr>
      </thead>

      <tbody class="tbody" style="display: block; overflow-y: scroll; height: 800px;">
        <tr v-for="book in filteredbooks" v-bind:key="book.id">
          <!--<div v-if="book.title== keyword || book.keyword==keyword">-->

          <td style="width: 200px">
            <router-link :to="`/bookList/${book.id}`"
              ><img :src="book.image" /> <br />{{ book.title }}</router-link
            >
          </td>

          <td style="width: 200px">{{ book.keyword }}</td>
          <td style="width: 200px">{{ book.level }}</td>
          <td style="width: 200px">{{ book.internal }}</td>
          <td style="width: 200px">{{ book.bu }}</td>

          <td style="width: 440px">
            <ul class="example">
              <li> 
                  <ul v-for="emp in filteredemps(book.keyword)" v-bind:key="emp.id">
                    <li>
                      <router-link :to="`/employee/1`">
                        <img :src="emp.Icon">
                      </router-link>
                      <button class="buttonmenu" v-on:click="openModal(book)">
                        感想を見る
                      </button>
                      <MyModal :val="postBook" :commentId=1 @close="closeModal" v-if="modal[book.id-1]">
                      </MyModal>
                    </li>
                  </ul>
                <br />  
              </li>
              <li>
                <img alt="user img" :src="book.employee2" />
                <br />
                <button class="buttonmenu" v-on:click="openModal2(book)">
                  感想を見る
                </button>
                <MyModal :val="postBook"  :commentId=2 @close="closeModal2" v-if="modal2">
                </MyModal>
              </li>
            </ul>
          </td>
          <!--</div>-->
        </tr>
        <tr v-for="emp in filteredemps" v-bind:key="emp.id">
        <td style="width: 150px"><img :src="emp.Icon"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import MyModal from "./MyModal.vue";
export default {
  components: { MyModal },
  data() {
    return {
      modal: [],
      modal2: false,
      message: "",
      keyword:"",
      level:"",
      postBook: "",
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
             ],
      employees : [
           {id:1,
           Icon:require('../assets/emp4.png'),
           Name:'多田 孝和',
           Organization1:'技術本部',
           Organization2:'',
           Organization3:'情報システム部',
           Organization4:'業務システムGr',
           Organization5:'',
           Post         :'上級専門職',
           Startdate    :'2020/03/01',
           ITSS1        :'Project Manager',
           ITSS1level   :'4',
           ITSS2        :'Application Specialist',
           ITSS2level   :'4',
           Skill        :'DX プロジェクトマネージメント マネージメント データ連携 運用設計 給与計算 年末調整 タレントマネージメント 勤務管理 ベンダー管理 ワークフロー Sharepoint Intramart', 
           Skillemp     :'DX',
           Career1      :'2010年4月商社系Sier入社',
           Career2      :'2010年4月～8月新人研修',
           Career3      :'2010年8月DataSpider検証',
           Career4      :'2010年9月～2011年3月 Lotus Notes8.5.2 マイグレーションプロジェクト　新機能検証・推進',
           Career5      :'・',
           Career6      :'2014年7月会社統合',
           Career7      :'・',
           Career8      :'2017年1月～2020年3月メガバンク向け人事・給与システム保守プロジェクト　賞与・人事資格Tリーダー、ツールTリーダー、データ連携プロジェクトリーダー',
           Career9      :'2020年3月NSSOL入社',
           Career10     :'2020年3月～現在　勤務管理・経費WFシステム刷新プロジェクト　移行・運用リーダー',
           Book1image   :require('../assets/datamodel.png'),
           Book1point   :'★★★★★',
           Book1comment :'実務上のケースでこのようにデータモデリングすればよいという具体的でとてもわかりやすい本',
           Book2image   :require('../assets/vendar.png'),
           Book2point   :'★★★★',
           Book2comment :'遅延していた場合、どのようなアクションをとればいいまで記載されている現場重視の本',
           Book3image   :'',
           Book3point   :'★★★★★',
           Book3comment :'',
           Book4image   :'',
           Book4point   :'',
           Book4comment :'',
           Book5image   :'',
           Book5point   :'',
           Book5comment :'',
           },
           {id:2,
           Icon:require('../assets/emp2.png'),
           Skillemp     :'ネットワーク',
           },
           ]
           
    }

  },

  methods: {
    openModal(id,book) {
      this.modal[id-1] = true;
      this.postBook = book
      // console.log(this.modal);
      // v-ifは上記だと配列の変更を認識できないため .spliceを使用する
      this.modal.splice();
    },
    openModal2(book) {
      this.modal2 = true;
      this.postBook = book
    },
    closeModal(id) {
      this.modal[id-1] = false;
      // console.log(this.modal);
      this.modal.splice();
    },
    closeModal2() {
      this.modal2 = false;
    },

    moveDetail(num) {
      this.$router.push({
        name: "Bookdetail",
        params: {
          id: num,
        },
      });
    },

    filteredemps: function (keyword) {
      var employees = [];

      for (var j in this.employees) {
        var e = this.employees[j];
        if (keyword.indexOf(e.Skillemp) !== -1)
        {
          employees.push(e);
        }
      }
      // console.log(employees);
      // console.log(e);
      return employees;
    },
  },

  computed: {
    filteredbooks: function () {
      var books = [];
      for (var i in this.books) {
        var b = this.books[i];
        if (
          (b.keyword.indexOf(this.keyword) !== -1 ||
            b.title.indexOf(this.keyword) !== -1) &&
          b.level.indexOf(this.level) !== -1
        ) {
          // || b.level.indexOf(this.level) !== -1
          books.push(b);
        }
      }
      return books;
    },
  },

  created: function() {
    const a = Array(this.books.length).fill(false)
    this.modal = a
    // console.log(this.modal)
  }
};
</script>

<style scoped>
.wf-notosansjapanese {
  font-family: "Noto Sans JP";
}

#app {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

table tr:nth-child(even){
  background-color: #eee
}
.mainbody {
  background-image: url(../assets/haikei.png);
  text-align: center;
  vertical-align: top;
  width: 2200px;
  margin: 0 150px;
}

.tbody {
  margin: 0 260px;
}

.tablestyle {
  margin: 0 150px;
}

.form-control {
  width: 25%;
  margin: 15px auto;
  padding: 15px 0;
  background-color: whitesmoke;
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

.example li {
  float: left;
  list-style: none;
  padding: 0;
  margin: 30px 50px;
}
</style>