<template>
  <div id="app">
    <div id="employee">
      <div id="EmployeeTitle">
        <div>
        <img :src="employee[0].Icon" />
        </div>
        <p class="name">社員名：{{employee[0].Name}}</p>
        <p class="organization">組織：{{employee[0].Organization1}}</p>
        <p class="post">役職：{{employee[0].Post}}</p>
        
        <p class="startdate">入社年月日：{{employee[0].Startdate}}</p>
        <p class="itss1">ITSS1：{{employee[0].ITSS1}}</p>
        <p class="itss1">ITSS1level：{{employee[0].ITSS1level}}</p>
        <p class="itss2">ITSS2：{{employee[0].ITSS2}}</p>
        <p class="itss2">ITSS2level：{{employee[0].ITSS2level}}</p>
        <p class="skill">スキル：{{employee[0].Skill}}</p>
      </div>
      <div id="EmployeeTitle">業務経歴
        <p class="Career1">{{employee[0].Career1}}</p>
        <p class="Career2">{{employee[0].Career2}}</p>
        <p class="Career3">{{employee[0].Career3}}</p>
        <p class="Career4">{{employee[0].Career4}}</p> 
        <p class="Career5">{{employee[0].Career5}}</p>
        <p class="Career6">{{employee[0].Career6}}</p> 
        <p class="Career7">{{employee[0].Career7}}</p>  
        <p class="Career8">{{employee[0].Career8}}</p> 
        <p class="Career9">{{employee[0].Career9}}</p> 
        <p class="Career10">{{employee[0].Career10}}</p> 
      </div>
      <div id="ReadinBooks"><h3>読んだ本</h3></div>
      <table>
        <colgroup span="2"></colgroup>
        <colgroup>
        <col align="center">
        <col span="2" align="right">
        </colgroup>
        <tbody>
          <tr>
            <td>
              <div>
                <span>
                  <img :src="employee[0].Book1image" />
                  <p class="Book1point">{{employee[0].Book1point}}</p>
                  <p class="Book1comment">{{employee[0].Book1comment}}</p>
                </span>
              </div>
            </td>
            <td>
              <div>
                <span>
                  <img :src="employee[0].Book2image" />
                  <p class="Book2point">{{employee[0].Book2point}}</p>
                  <p class="Book2comment">{{employee[0].Book2comment}}</p>
                </span>
              </div>
            </td>
            <td>
              <div>
                <img :src="employee[0].Book3image" />
                <p class="Book3point">{{employee[0].Book3point}}</p>
                <p class="Book3comment">{{employee[0].Book3comment}}</p>
              </div>
            </td>
            <td>
              <div>
                <img :src="employee[0].Book4image" />
                <p class="Book4image">{{employee[0].Book4image}}</p>
                <p class="Book4point">{{employee[0].Book4point}}</p>
                <p class="Book4comment">{{employee[0].Book4comment}}</p>
              </div>
            </td>
            <td>
              <div>
                <img :src="employee[0].Book5image" />
                <p class="Book5image">{{employee[0].Book5image}}</p>
                <p class="Book5point">{{employee[0].Book5point}}</p>
                <p class="Book5comment">{{employee[0].Book5comment}}</p>
              </div>
            </td>
          </tr>
      </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import employee from "../employee";
export default {
  name: "employee",
  data() {
    return {
        employee: employee,
    };
  },
}
</script>
<style scoped>
#employee {
  width:40%;
  margin-right: auto;
  margin-left : auto;
}

#EmployeeTitle {
  font-size: 20px;
  /* margin-left: 20px; */
  padding-left: 20px;
  border: solid 1px black;
  border-width: 100%;
  margin-right: 0;
};

#ReadinBooks {
  padding: 10px 20px;
}

</style>

