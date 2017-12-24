<template>
  <div id="app">
    <Configurator/>
    <Paginator 
      @change-question="changeQuestion"
    />
    <transition name="flip">
      <Review v-show="checkMode" />
    </transition>
    <Questions/>
    <Answers/>
  </div>
</template>

<script>
import Configurator from "@/components/Configurator"
import Questions from "@/components/Questions"
import Answers from "@/components/Answers"
import Paginator from "@/components/Paginator"
import Review from "@/components/Review"
import { mapGetters } from 'vuex'
import { CHANGE_QUESTION } from '@/store/mutation-types'

export default {
  name: 'app',
  components: {
    Configurator,
    Questions,
    Answers,
    Paginator,
    Review,
  },
  computed: {
    ...mapGetters([
      "currentQuestionIndex",
      "picked",
    ]),
    checkMode() {
      return this.picked === '1' ? true : false;
    }
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
.flip-enter-active, .flip-leave-active {
  transition: all 0.5s ease;
}
.flip-enter, .flip-leave-to {
  opacity: 0;
  transform: scale(1, 0);
}
</style>
