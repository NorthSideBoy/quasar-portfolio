<template>
  <div style="font-family: 'fira-medium';">
    <span :style="{ color: color }">
      &lt;{{ name }}&gt;
    </span>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  props: {
    name: {
      type: String,
      required: false,
      default: ""
    },
    color:{
      type: String,
      required: false,
      default: "#A5D6F0"
    }
  },
  setup(props) {
    const name = ref(props.name)
    const color = ref(props.color)
    return {
      name,
      color
    }
  }
}
</script>
<style lang="scss"></style>
