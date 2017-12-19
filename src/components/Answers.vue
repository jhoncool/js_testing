<template>
    <div class="answers">
      <textarea
        class="answer"
        v-for="item in items"
        v-show="item === currentPage"
        :key="item"
      >
      </textarea>
  </div> 
</template>

<script>
export default {
  name: "Answers",
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    "countItems": {
      type: Number,
      required: true
    }
  },
  data () {
    return {}
  },
  computed: {
    items() {
      return Array.apply(null, { length: this.countItems }).map((v, i) => i);
    }
  },
}
</script>

<style lang="scss">
.answers {
  margin-top: 10px;
}
.answer {
  box-sizing: border-box;
  padding: 5px 10px;
  font-family: Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace;
  min-width: 100%;
  max-width: 100%;
  min-height: 100px;
  text-align: left;
  font-size: 14px;
}
</style>  

