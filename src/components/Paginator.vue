<template>
  <div class="paginator">
    <div
      class="paginator__item"  
      v-for="item in items" 
      :key="item"
      @click="$emit('change-question', item)"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Paginator",
  props: {
    "countItems": {
      type: Number,
      requare: true
    }
  },
  data () {
    return {}
  },
  computed: {
    items() {
      return Array.apply(null, { length: this.countItems }).map((v, i) => i);
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
}
.paginator__item {
  margin-bottom: 0.5em;
  padding: 0.5em 2em;
  border-radius: 7px;
  background-color: lightblue;
  color: $vue-blue;
  &:hover {
    background-color: #82cde6;
    cursor: pointer;
  }
}
</style>
