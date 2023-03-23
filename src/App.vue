<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  created() {
    this.$q.iconMapFn = (iconName) => {
      if (iconName.startsWith('fi')) {
        return {
          cls: 'fi ' + iconName
        }
      }
    }
  }
})
</script>
