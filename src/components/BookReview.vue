<template>
  <div id="">
    <div class="">
      <textarea
        name=""
        id=""
        cols="50"
        rows="10"
        placeholder="感想を入力してください"
        v-model="inputReview"
      ></textarea>
      <div id="app">
        <star-rating @rating-selected ="setRating" v-model="rating" :increment="0.5" :max-rating="5" inactive-color="#000" active-color="#ff0"></star-rating>
      </div>
      <button @click="addReview">感想を投稿する</button>
      <div class="reviews">
        <ul v-for="review of reviews" :key="review.id">
          <li>
            <div class="balloon5">
              <div class="faceicon">
                <img src="../assets/mask_woman5_faceshield.png" alt="" />
              </div>
              <div class="chatting">
                <div class="says">
                  <p>感想：{{ review.review }}</p>
                  <p>評価：{{review.rating}}</p>
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
  name: "BookReview",
  data() {
    return {
      isActive: "1",
      inputReview: "",
      reviews: [],
      rating: 0
    };
  },
  components: {},
  methods: {
    addReview() {
      if (this.inputReview != "") {
        this.reviews.unshift(
            {
                review: this.inputReview,
                rating: this.rating
            });
        this.inputReview = "";
        this.rating=0
      }
    },
    setRating(rating) {
        this.rating = rating
    }
  },
};
</script>

<style scoped>
li {
  list-style: none;
}
.tabContents {
  text-align: left;
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