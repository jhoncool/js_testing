<template>
  <div>
    <div>{{ msg }}</div>
    <div>{{ model["test-text"] }}</div>
  </div>
</template>

<script>
import model from "../model/model.json"

export default {
  name: 'Configurator',
  data () {
    return {
      msg: 'Настройки',
      model,
    }
  }
}
</script>

<style lang="scss">
</style>  
