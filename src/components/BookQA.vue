<template>
  <div id="">
    <div class="">
      <textarea
        name=""
        id=""
        cols="50"
        rows="10"
        placeholder="QAを入力してください"
        v-model="inputQA"
      ></textarea>
      <button @click="addReview">QAを投稿する</button>
      <div class="reviews">
        <ul v-for="qa of QAs" :key="qa.id">
          <li>
            <div class="balloon5">
              <div class="faceicon">
                <img src="../assets/mask_woman5_faceshield.png" alt="" />
              </div>
              <div class="chatting">
                <div class="says">
                  <p>{{ qa }}</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookQA",
  data() {
    return {
      isActive: "1",
      inputQA: "",
      QAs: [],
    };
  },
  components: {},
  methods: {
    addReview() {
      this.QAs.unshift(this.inputQA);
      this.inputQA = "";
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
}


.balloon5 {
  width: 100%;
  margin: 1.5em 0;
  overflow: hidden;
}

.balloon5 .faceicon {
  float: left;
  margin-right: -90px;
  width: 80px;
}

.balloon5 .faceicon img {
  width: 100%;
  height: auto;
  border: solid 3px #d7ebfe;
  border-radius: 50%;
}

.balloon5 .chatting {
  width: 100%;
}

.says {
  display: inline-block;
  position: relative;
  margin: 5px 0 0 105px;
  padding: 17px 13px;
  border-radius: 12px;
  background: #d7ebfe;
  width: 50%;
}

.says:after {
  content: "";
  display: inline-block;
  position: absolute;
  top: 18px;
  left: -24px;
  border: 12px solid transparent;
  border-right: 12px solid #d7ebfe;
}

.says p {
  margin: 0;
  padding: 0;
}
</style>