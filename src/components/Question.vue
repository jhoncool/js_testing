<template>
  <div class="question">
    <VueMarkdown>{{ md }}</VueMarkdown>
  </div>  
</template>

<script>
import VueMarkdown from "vue-markdown"

export default {
  name: "Question",
  components: {
    VueMarkdown
  },
  props: {
    "md": {
      type: String,
      default: ""
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
.question {
  text-align: left;
}
</style>  
