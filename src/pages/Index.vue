<template>
  <q-page style="background: #0d1117; position: relative">
    <q-scroll-area style="height: calc(100vh - 65px);">
      <Label name="template" class="q-pl-md q-pt-md"></Label>
      <section>
        <Home />
      </section>
      <section>
        <AboutMe />
      </section>
      <section>
        <Skills />
      </section>
      <section>
        <Contact />
      </section>
      <Label name="/template" class="q-pl-md q-pt-md"></Label>
    </q-scroll-area>
  </q-page>
</template>
<script>
import { ref, onMounted } from "vue";
import Home from "src/components/Home.vue";
import AboutMe from "src/components/AboutMe.vue";
import Skills from "src/components/Skills.vue";
import Contact from "src/components/Contact.vue";
import Label from "src/components/Label.vue";

export default {
  setup() {
    onMounted(() => { });
    return {};
  },
  components: {
    Home,
    AboutMe,
    Contact,
    Label,
    Skills
  },
};
</script>
<style lang="scss"></style>
