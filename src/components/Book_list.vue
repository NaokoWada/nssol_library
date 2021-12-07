<template>
  <div>
    
    <div class="mainbody">
     <tytle><font size="7" color="black" background-color="red">本の一覧</font><font size="4" color="black"> -現在登録されている本は ２ 冊です-</font></tytle>
    </div>
    
    <table border="1" style="border-collapse: collapse;">
    <thead style="display: block;">
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
    <tr>
      <td style="width:150px;"><img src="../assets/NWeasy.png"></td>
    
    <td style="width:150px;">データモデル大全</td>
    <td style="width:150px;">★★★★☆</td>
    <td style="width:150px;">★★★☆☆</td>
    <td style="width:150px;"><img src="../assets/mask_woman5_faceshield.png"></td>
    <td style="width:150px;">データモデリングの実務上の具体例がわかりやすい！</td>
    <td style="width:150px;"><img src="../assets/mask_woman6_medical.png"></td>
    <td style="width:150px;">もう少し具体例の難易度を高くすべき</td>
    </tr>

    <tr>
    
    <td style="width:150px;"><img src="../assets/NWhard.png"></td>
    
    <td style="width:150px;">ベンダーマネージメントの極意</td>
    <td style="width:150px;">★★★★★</td>
    <td style="width:150px;">★★★★☆</td>
    <td style="width:150px;"><img src="../assets/Specialist.png"></td>
    <td style="width:150px;">ためになりました！</td>
    <td style="width:150px;"><img src="../assets/animal_angora_usagi.png"></td>
    <td style="width:150px;">そんなに読む価値なし！</td>
    </tr>

    
    </tbody>
    </table>
    
  </div>

</template>

<script>
export default {
  
}
</script>

<style scoped>
 .mainbody{
   background-image: url(../assets/haikei.png);
 }
</style>