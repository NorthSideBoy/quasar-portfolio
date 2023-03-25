<template>
  <q-page style="background: #0d1117">
    <div style="font-family: 'fira-medium'" class="q-pl-md q-pt-sm">
      <span style="color: #a5d6f0"> &lt;template&gt; </span>
    </div>
    <section>
      <div style="height:100%" class="column justify-center">
        <AboutMe />
      </div>
    </section>
    <div style="font-family: 'fira-medium'" class="q-pl-md">
      <span style="color: #a5d6f0"> &lt;/template&gt; </span>
    </div>
  </q-page>
</template>
<script>
import { ref } from "vue";
import AboutMe from "src/components/AboutMe.vue";
export default {
  setup() {
    return {};
  },
  components: {
    AboutMe,
  },
};
</script>
<style lang="scss"></style>
