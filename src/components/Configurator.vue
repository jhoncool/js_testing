<template>
  <div class="configurator">
    <div>{{ reglament }}</div>
  </div>
</template>

<script>
import model from "../model/model.json"

export default {
  name: 'Configurator',
  data () {
    return {
      model,
    }
  },
  computed: {
    reglament() {
      return this.model["regulations"]
    }
  },
}
</script>

<style lang="scss">
.configurator {
  margin-bottom: 15px;
}
</style>  
