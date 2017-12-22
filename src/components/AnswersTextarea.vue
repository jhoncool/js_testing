<template>
  <textarea
    class="answer"
    placeholder="Ответ"
    @keydown.tab="onTab"
    v-model="message"
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
  methods: {
    onTab(event) {
      const { target } = event
      const { selectionStart, selectionEnd } = target
      if (selectionStart != null ) {
        const separator = '\t'
        const newValue = this.message.slice(0, selectionStart) + separator + this.message.slice(selectionEnd)
        event.target.value = newValue
        this.message = newValue
        event.target.selectionStart = event.target.selectionEnd = selectionStart + separator.length;
      }
      event.preventDefault()
    }
  }
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
  $tab-size: 2;
  -o-tab-size: $tab-size;
  -moz-tab-size: $tab-size;
  -webkit-tab-size: $tab-size;
  tab-size: $tab-size;
}
</style>  

