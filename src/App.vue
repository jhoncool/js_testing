<template>
  <div id="app">
    <Configurator/>
    <Paginator 
      :count-items="countItems"
      @change-question="changeQuestion"
    />
    <Questions
      :current-page="currentPage"
    />
    <Answers
      :count-items="countItems"
      :current-page="currentPage"
    />
  </div>
</template>

<script>
import Configurator from "./components/Configurator"
import Questions from "./components/Questions"
import Answers from "./components/Answers"
import Paginator from "./components/Paginator"
import model from "./model/model.json"

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
      currentPage: 0,
      model,
    }
  },
  computed: {
    countItems() {
      return this.model["questions-names"].length
    }
  },
  methods: {
    changeQuestion(btnIndex) {
      this.currentPage = btnIndex
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
