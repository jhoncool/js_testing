<template>
    <div class="answers">
      <textarea
        class="answer"
        v-for="num in arrQuestionsIndexes"
        v-show="num === currentQuestionIndex"
        :key="num"
      >
      </textarea>
  </div> 
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: "Answers",
  computed: {
    ...mapState([
      'currentQuestionIndex',
    ]),
    ...mapGetters([
      'countQuestions',
      'arrQuestionsIndexes',
    ])
  },
}
</script>

<style lang="scss">
.answers {
  margin-top: 10px;
}
.answer {
  box-sizing: border-box;
  padding: 5px 10px;
  font-family: Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace;
  min-width: 100%;
  max-width: 100%;
  min-height: 100px;
  text-align: left;
  font-size: 14px;
}
</style>  

