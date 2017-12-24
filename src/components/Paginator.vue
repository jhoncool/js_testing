<template>
  <div class="paginator">
    <div
      class="paginator__item"  
      v-for="num in arrQuestionsIndexes" 
      :key="num"
      @click="$emit('change-question', num)"
      :class="{ paginator__item_current: currentQuestionIndex === num }"
    >
      <span class="paginator__rate" v-if="toggleRate(num)">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1em" height="1em" viewBox="0 0 442.533 442.533" style="enable-background:new 0 0 442.533 442.533;" xml:space="preserve">
          <path fill="#5eb42e" d="M434.539,98.499l-38.828-38.828c-5.324-5.328-11.799-7.993-19.41-7.993c-7.618,0-14.093,2.665-19.417,7.993L169.59,247.248
            l-83.939-84.225c-5.33-5.33-11.801-7.992-19.412-7.992c-7.616,0-14.087,2.662-19.417,7.992L7.994,201.852
            C2.664,207.181,0,213.654,0,221.269c0,7.609,2.664,14.088,7.994,19.416l103.351,103.349l38.831,38.828
            c5.327,5.332,11.8,7.994,19.414,7.994c7.611,0,14.084-2.669,19.414-7.994l38.83-38.828L434.539,137.33
            c5.325-5.33,7.994-11.802,7.994-19.417C442.537,110.302,439.864,103.829,434.539,98.499z"/>
        </svg>
      </span>
      <span class="paginator__num" v-else>{{ num }}</span>
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
      'arrQuestionsIndexes',
      'picked',
      'allRatings',
    ])
  },
  methods: {
    toggleRate(idx) {
      return this.picked === '1' && this.allRatings[idx] != null
    }
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
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5em;
  border-radius: 7px;
  width: 5em;
  height: 2.2em;
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
