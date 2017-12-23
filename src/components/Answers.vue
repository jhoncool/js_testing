<template>
    <div class="answers">
      <textarea
        is="answers-textarea"
        v-for="num in arrQuestionsIndexes"
        v-show="num === currentQuestionIndex"
        :key="num"
        :answer-index="num"
      >
      </textarea>
  </div> 
</template>

<script>
import AnswersTextarea from '@/components/AnswersTextarea'
import { mapGetters } from 'vuex'

export default {
  name: "Answers",
  components: {
    AnswersTextarea,
  },
  computed: {
    ...mapGetters([
      'currentQuestionIndex',
      'arrQuestionsIndexes',
    ])
  },
}
</script>

<style lang="scss">
.answers {
  margin-top: 10px;
}
</style>  

