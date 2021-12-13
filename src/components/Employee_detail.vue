<template>
  <div id="app">
    <div id="employee">
      <div id="employeeTitle">
        <p class="name">{{employee.name}}</p>
        <p class="organization">組織： {{employee.organization}}</p>
        <p class="post">役職： {{employee.post}}</p>
        <p class="startdate">入社年月日： {{employee.startdate}}</p>
        <p class="itss1">ITSS1:{{employee.itss1}}
        <p class="itss1">ITSS1level:{{employee.itss1level}}
        <p class="itss2">ITSS2:{{employee.itss2}}
        <p class="itss2">ITSS2level:{{employee.itss2level}}
        <p class="skill">スキル{{employee.skill}}</p>
      </div>
      <div id="Career">業務経歴
        <p class="Career1">{{employee.caree1}}</p>
        <p class="Career2">{{employee.caree2}}</p>
        <p class="Career3">{{employee.caree3}}</p>
        <p class="Career4">{{employee.caree4}}</p> 
        <p class="Career5">{{employee.caree5}}</p> 
        <p class="Career6">{{employee.caree6}}</p> 
        <p class="Career7">{{employee.caree7}}</p> 
        <p class="Career8">{{employee.caree8}}</p> 
        <p class="Career9">{{employee.caree9}}</p> 
        <p class="Career10">{{employee.caree10}}</p> 
      </div>
      <div id="Career">読んだ本
        <p class="Book1image">{{employee.book1image}}</p>
        <p class="Book1point">{{employee.book1point}}</p>
        <p class="Book1comment">{{employee.book1comment}}</p>
        <p class="Book2image">{{employee.book2image}}</p>
        <p class="Book2point">{{employee.book2point}}</p>
        <p class="Book2comment">{{employee.book2comment}}</p>
        <p class="Book3image">{{employee.book3image}}</p>
        <p class="Book3point">{{employee.book3point}}</p>
        <p class="Book3comment">{{employee.book3comment}}</p>
        <p class="Book4image">{{employee.book4image}}</p>
        <p class="Book4point">{{employee.book4point}}</p>
        <p class="Book4comment">{{employee.book4comment}}</p>
        <p class="Book5image">{{employee.book5image}}</p>
        <p class="Book5point">{{employee.book5point}}</p>
        <p class="Book5comment">{{employee.book5comment}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import employee from "../employee";
export default {
  name: "employee",
  data() {
    return {
        employees: employee,
    };
  },
}
</script>