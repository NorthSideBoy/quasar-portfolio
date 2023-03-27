<template>
  <div class="full-height full-width row justify-center tagcloud " @click="(e) => selectItem(e)" ref="sphere">
  </div>
</template>
<script>
import { ref, onMounted } from 'vue'
const TagCloud = require('TagCloud')
export default {
  setup() {
    const sphere = ref(null)
    const container = ref('.tagcloud')
    const texts = ref([
      'NodeJs',
      'Javascript',
      'C#',
      'npm',
      'Git',
      'Html',
      'CSS',
      'CronJob',
      '_lodash',
      'Firebird',
      'MySql',
      'Express',
      'GraphQl',
      'MongoDB',
      'Sql',
      'NoSql',
      'QuasarJs',
      'VueJs',
      'Linux',
      'Moment'
    ])

    const options = ref({
      radius: 200,
      maxSpeed: 'normal',
      initSpeed: 'fast',
      direction: 135,
      keep: true
    })

    const selectItem = (e) => {
      console.log(e)
    }

    const createSphere = () => {
      TagCloud(container.value, texts.value, options.value);
    }

    onMounted(() => {
      createSphere()
    })

    return {
      container,
      texts,
      options,
      sphere,
      selectItem,
      createSphere
    }
  },
  components: {
  }
}
</script>
<style lang="scss">
.tagcloud {

  letter-spacing: 1px;
  font-family: 'fira-bold';
  font-size: 15px;
  color: #A5D6F0;
}

.tagcloud--item:hover {
  color: #D7AC3B;
}
</style>
