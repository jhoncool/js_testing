<template>
  <div class="configurator">
    <div class="radiomode">
      <input type="radio" value="0" v-model="pickedRadio">
      <span class="radiomode__label">Тестирование</span>
      <br/>
      <input type="radio" value="1" v-model="pickedRadio">
      <span class="radiomode__label">Проверка</span>
    </div>
    <div>
      <div class="conficurator__reglament">{{ reglament }}</div>
    </div>  
    <div>
      <div class="reset" @click="startAgain">Reset all</div>
    </div>

  </div>
</template>

<script>
import model from "@/model/model.json"
import { START_AGAIN, CHANGE_MODE } from '@/store/mutation-types'

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
    },
    pickedRadio: {
      get() {
        return this.$store.getters.picked
      },
      set(value) {
        this.$store.commit(CHANGE_MODE, { value })
      }
    },   
  },
  methods: {
    startAgain() {
      this.$store.commit(START_AGAIN)
    }
  }
}
</script>

<style lang="scss">
.configurator {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  margin-bottom: 15px;
  text-align: right; 
  outline: 0.1em dashed lightgrey;
  padding: 0.5em;
}
.conficurator__reglament {
  text-align: center;
}
.radiomode {
  text-align: left;
}
.radiomode__label {
  display: inline-block;
  position: relative;
  top: 0.1em;
}
.reset {
  display: inline-block;
  padding: 0.2em;
  background-color: #eeeaea;
  border-radius: 0.2em;
  &:hover {
    background-color: lightgray;
    color: tomato;
    cursor: pointer;
  }
}
</style>  
