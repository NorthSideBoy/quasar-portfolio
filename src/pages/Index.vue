<template>
  <q-page style="background: #0d1117; position: relative">
    <q-scroll-area style="height: calc(100vh - 65px); max-width: 100vw;">
      <Tab class="q-pt-md q-pb-md" label="template" :level="3">
        <template v-slot:body>
          <div style="max-width: 94vw;">
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
          </div>
        </template>
      </Tab>
    </q-scroll-area>
  </q-page>
</template>
<script>

import Tab from "src/components/Tab.vue";
import Home from "src/components/Home.vue";
import AboutMe from "src/components/AboutMe.vue";
import Skills from "src/components/Skills.vue";
import Contact from "src/components/Contact.vue";

export default {
  components: {
    Tab,
    Home,
    AboutMe,
    Skills,
    Contact,
  },
};
</script>
<style lang="scss"></style>
