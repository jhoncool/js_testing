<template>
  <div class="questions">
    <div 
      class="question"
      v-for="questionData in questionsText"
      v-show="questionData.id === currentPage"
      :key="questionData.id"
    >
      <vue-markdown>{{ questionData.text }}</vue-markdown>
    </div>
  </div>  
</template>

<script>
import VueMarkdown from "vue-markdown"
import model from "../model/model.json"
const questionsText = []

export default {
  name: "Questions",
  components: {
    VueMarkdown
  },
  beforeCreate() {
    model["questions-names"].forEach((name, i) => {
      questionsText.push({
        id: i,
        text: require(`../questions/${name}.md`)
      })
    })
  },
  props: {
    currentPage: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      questionsText
    }
  }
}
</script>

<style lang="scss">
.question {
  text-align: left;
  font-size: 14px;
}
</style>  
