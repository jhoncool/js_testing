<template>
  <div id="app">
    <Configurator/>
    <Paginator 
      @change-question="changeQuestion"
    />
    <Questions/>
    <Answers/>
  </div>
</template>

<script>
import Configurator from "@/components/Configurator"
import Questions from "@/components/Questions"
import Answers from "@/components/Answers"
import Paginator from "@/components/Paginator"
import { mapGetters } from 'vuex'
import { CHANGE_QUESTION } from '@/store/mutation-types'

export default {
  name: 'app',
  components: {
    Configurator,
    Questions,
    Answers,
    Paginator,
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'currentQuestionIndex',
    ])
  },
  methods: {
    changeQuestion(questionIndex) {
      this.$store.commit(CHANGE_QUESTION, { questionIndex })
    }
  }
}
</script>

<style lang="scss">
@import './variables.scss';

#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $vue-blue;
  font-size: 16px;
  max-width: $width;
  margin: 0 auto;
}
</style>
