<template>
  <div ref="tab" :class="classes">
    <div>
      <span>
        &lt;{{ label }}&gt;
      </span>
    </div>
    <div class="q-pt-sm q-pb-sm q-pl-sm full-width">
      <slot name="body"></slot>
    </div>
    <div>
      <span>
        &lt;/{{ label }}&gt;
      </span>
    </div>
  </div>
</template>
<script>
import { ref, onMounted } from 'vue'

export default {
  props: {
    class: {
      type: String,
      required: false,
      default: ""
    },
    label: {
      type: String,
      required: false,
      default: "div"
    },
    color: {
      type: String,
      required: false,
      default: "#A5D6F0"
    },
    level: {
      type: Number,
      required: false,
      default: 0
    }
  },
  setup(props) {

    onMounted(() => {
      calculateLevelTab(props.level)
      setTabClass(0, tab.value.childNodes.length - 1)
    })

    const tab = ref(null)
    const label = ref(props.label)
    const color = ref(props.color)
    const level = ref(props.level)
    const classes = ref(props.class)
    const calculateLevelTab = (prop) => {

      let spacing

      switch (prop) {
        case 1:
          spacing = "q-pl-xs"
          break;
        case 2:
          spacing = "q-pl-sm"
          break;
        case 3:
          spacing = "q-pl-md"
          break;
        case 4:
          spacing = "q-pl-lg"
          break;
        case 5:
          spacing = "q-pl-xl"
          break;
        default:
          spacing = null
      }

      level.value = spacing
      return
    }

    const setTabClass = (first, last) => {
      tab.value.classList.add(level.value)
      tab.value.childNodes[first].classList.add('tab')
      tab.value.childNodes[last].classList.add('tab')
    }

    return {
      label,
      color,
      level,
      tab,
      classes,
      calculateLevelTab,
      setTabClass
    }

  }
}

</script>
<style lang="scss">
.tab {
  font-family: 'fira-medium';
  color: v-bind(color)
}
</style>
