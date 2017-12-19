<template>
  <div id="app">
    <Configurator/>
  </div>
</template>

<script>
import Configurator from './components/Configurator'

export default {
  name: 'app',
  components: {
    Configurator
  }
}
</script>

<style lang="scss">
@import './variables.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $vue-blue;
  font-size: 20px;
  max-width: 1024px;
  margin: 0 auto;
}
</style>
