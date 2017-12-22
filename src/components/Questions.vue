<template>
  <div class="questions">
    <div 
      class="question"
      v-for="questionData in questionsTexts"
      v-show="questionData.id === currentQuestionIndex"
      :key="questionData.id"
    >
      <vue-markdown>{{ questionData.text }}</vue-markdown>
    </div>
  </div>  
</template>

<script>
import VueMarkdown from "vue-markdown"
import { mapGetters } from 'vuex'

export default {
  name: "Questions",
  components: {
    VueMarkdown
  },
  computed: {
    ...mapGetters([
      'currentQuestionIndex',
      'questionsTexts',
    ])    
  }
}
</script>

<style lang="scss">
.question {
  text-align: left;
  font-size: 14px;
}
</style>  
