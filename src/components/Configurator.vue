<template>
  <div class="configurator">
    <div 
      class="reset"
      @click="reset"
    >reset</div>
    <div class="conficurator__reglament">{{ reglament }}</div>
  </div>
</template>

<script>
import model from "../model/model.json"
import { RESET } from '../store/mutation-types'

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
  methods: {
    reset() {
      this.$store.commit(RESET)
    }
  }
}
</script>

<style lang="scss">
.configurator {
  margin-bottom: 15px;
  text-align: right; 
  outline: 0.1em dashed lightgrey;
  padding: 0.5em;
}
.conficurator__reglament {
  width: 100%;
  text-align: center;
}
.reset {
  display: inline-block;
  padding: 0.2em;
  background-color: #eeeaea;
  border-radius: 0.2em;
  &:hover {
    background-color: lightgray;
    cursor: pointer;
  }
}
</style>  
