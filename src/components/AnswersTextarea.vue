<template>
  <textarea
    class="answer"
    placeholder="Ответ"
    v-model.lazy="message"
    spellcheck="false"
  >
  </textarea> 
</template>

<script>
import { mapGetters } from 'vuex'
import { UPDATE_ANSWER } from '../store/mutation-types'

export default {
  name: "AnswersTextarea",
  props: ['answerIndex'],
  computed: {
    ...mapGetters([
      'answersTexts',
    ]),
    message: {
      get() {
        return this.answersTexts[this.answerIndex]
      },
      set(value) {
        this.$store.commit(UPDATE_ANSWER, { 
          answerIndex: this.answerIndex,
          text: value 
        })
      }
    }    
  },
}
</script>

<style lang="scss">
.answer {
  box-sizing: border-box;
  padding: 5px 10px;
  font-family: Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace;
  min-width: 100%;
  max-width: 100%;
  min-height: 140px;
  text-align: left;
  font-size: 16px;
}
</style>  

