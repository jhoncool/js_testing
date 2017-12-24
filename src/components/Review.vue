<template>
  <div class="review">
    <span>Оценка:</span>
    <div class="star-rating">
      <star-rating
        :increment="increment"
        :star-size="starSize"
        :max-rating="maxRating"
        text-class="star-rating__text"
        v-model="boundRating"
      />
    </div>
    <div
      class="review__reset" 
      @click="resetRating">
      Reset Rating
    </div>
    <result/>
  </div>
</template>


<script>
import StarRating from 'vue-star-rating'
import Result from "@/components/result"
import { mapState, mapGetters } from 'vuex'
import { UPDATE_RATING } from '@/store/mutation-types'

export default {
  name: "Review",
  components: {
    StarRating,
    Result,
  },
  data() {
    return {
      increment: 0.5,
      starSize: 40
    }
  },
  computed: {
    ...mapState([
      'maxRating'
    ]),
    ...mapGetters([
      "currentQuestionIndex",
    ]),
    boundRating: {
      get() {
        return this.$store.getters.currentRating || 0
      },
      set(value) {
        this.$store.commit(UPDATE_RATING, {
          value,
          index: this.currentQuestionIndex 
        })
      }
    }
  },
  methods: {
    resetRating() {
      this.boundRating = 0
    }
  }
}
</script>


<style lang="scss">
.review {
  height: 3em;
  outline: 0.1em solid darkkhaki;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding: 0.2em 1em;
}
.star-rating {
  margin: 0 0 0 0.8em;
  flex-basis: 16em;
}
.star-rating__text {
  font-size: 1.5em;
  margin-top: 0 !important;
}
.review__reset {
  margin-right: 2em;
  padding: 0.2em 0.5em;
  border: 0.1em dashed lightgrey;
  &:hover {
    cursor: pointer;
    border-color: lightcoral;
    color: darken(lightcoral, 10);
  }
}
</style>
