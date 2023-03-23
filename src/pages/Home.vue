<template>
  <q-page style="background: #0D1117">
    <div style="font-family: 'fira-medium';" class="q-pl-md q-pt-sm">
      <span style="color: #A5D6F0">
        &lt;template&gt;
      </span>
    </div>
    <section>
      <Home />
    </section>
    <div style="font-family: 'fira-medium';" class="q-pl-md">
      <span style="color: #A5D6F0">
        &lt;/template&gt;
      </span>
    </div>
  </q-page>
</template>
<script>
import { ref } from 'vue'
import Home from 'src/components/Home.vue';
export default {
  setup() {
    return {
    }
  },
  components: {
    Home
  }
}
</script>
<style lang="scss"></style>
