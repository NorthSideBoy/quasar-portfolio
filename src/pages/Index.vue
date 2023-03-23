<template>
  <q-page style="background: #0d1117; position: relative">
    <q-scroll-area style="height: calc(100vh - 65px);">
      <div style="font-family: 'fira-medium'" class="q-pl-md q-pt-sm">
      <span style="color: #a5d6f0"> &lt;template&gt; </span>
    </div>
    <section>
      <Home />
    </section>
    <section>
      <AboutMeVue />
    </section>
    <div style="font-family: 'fira-medium'" class="q-pl-md q-pt-md">
      <span style="color: #a5d6f0"> &lt;/template&gt; </span>
    </div>
    </q-scroll-area>
    
  </q-page>
</template>
<script>
import { ref, onMounted } from "vue";
import Home from "src/components/Home.vue";
import AboutMeVue from "src/components/AboutMe.vue";

export default {
  setup() {
    onMounted(() => {});
    return {};
  },
  components: {
    Home,
    AboutMeVue,
  },
};
</script>
<style lang="scss"></style>
