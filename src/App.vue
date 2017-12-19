<template>
  <div id="app">
    <Configurator/>
    <Question :md="mdText"/>
  </div>
</template>

<script>
import Configurator from "./components/Configurator"
import Question from "./components/Question"

export default {
  name: 'app',
  components: {
    Configurator,
    Question,
  },
  data() {
    return {
      num: "9.0"
    }
  },
  computed: {
    mdText() {
      return require(`./questions/${this.num}.md`)
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
  max-width: 1024px;
  margin: 0 auto;
}
</style>
