<template>
  <div class="result">
    Total: <span :class="percentageClass">{{ result }} %</span>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: "Result",
  computed: {
    ...mapState([
      'maxRating'
    ]),    
    ...mapGetters([
      "countQuestions",
      "allRatings",
    ]),
    result() {
      return Math.round(this.allRatings.reduce((acc, curr) => { 
        return acc + (curr || 0)
      }, 0) * 100 / (this.maxRating * this.countQuestions))
    },
    percentageClass() {
      const checkPoints = [65, 90]
      return {
        bad: this.result < checkPoints[0],
        normal: this.result >= checkPoints[0] && this.result < checkPoints[1],
        good: this.result >= checkPoints[1]
      }
    }    
  },    
}
</script>

<style lang="scss" scoped>
.result {
  text-align: center;
  font-size: 1.2em;
}
.bad {
  color: tomato;
}
.normal {
  color: darken(grey, 15);
}
.good {
  color: rgb(33, 173, 33);
}
</style>
