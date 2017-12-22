<template>
  <div class="paginator">
    <div
      class="paginator__item"  
      v-for="num in arrQuestionsIndexes" 
      :key="num"
      @click="$emit('change-question', num)"
      :class="{ paginator__item_current: currentQuestionIndex === num }"
    >
      {{ num }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "Paginator",
  computed: {
    ...mapGetters([
      'currentQuestionIndex',
      'countQuestions',
      'arrQuestionsIndexes',
    ])
  }
}
</script>


<style lang="scss">
@import '../variables.scss';
.paginator {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
.paginator__item {
  $border-width: 0.2em;
  margin-bottom: 0.5em;
  padding: 0.4em 1.8em;
  border-radius: 7px;
  background-color: lightblue;
  box-sizing: border-box;
  color: $vue-blue;
  border: $border-width solid transparent;
  transition: border 0.2s ease;
  &:hover {
    background-color: #82cde6;
    cursor: pointer;
  }
  &_current {
    border: $border-width solid #c3b9b4;
  }
}
</style>
