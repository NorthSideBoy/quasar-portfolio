<template>
  <q-page style="background: #0d1117;">
    <q-scroll-area style="height: calc(100vh - 65px); max-width: 100vw;">
      <Tab class="q-pt-md q-pb-md" label="template" :level="3">
        <template v-slot:after>
          <ParticlesEditor v-if="particles" :options="particles" @update="(e) => options = e" />
        </template>
        <template v-slot:body>
          <div style="max-width: 94vw; position: relative;">
            <Particles @particlesMounted="(e) => particles = e" v-if="options" :options="options" />
            <Particles @particlesMounted="(e) => particles = e" v-else />
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

import { ref } from "vue";
import Tab from "src/components/Tab.vue";
import Home from "src/components/Home.vue";
import AboutMe from "src/components/AboutMe.vue";
import Skills from "src/components/Skills.vue";
import Contact from "src/components/Contact.vue";
import Particles from "src/components/Particles.vue";
import ParticlesEditor from "src/components/ParticlesEditor.vue";
import { useDataStore } from "src/stores/data-store.js";

export default {

  setup() {
    const options = ref(null)
    const dataStore = useDataStore()
    const particles = ref(null)
    return {
      options,
      particles
    }
  },
  components: {
    Tab,
    Home,
    AboutMe,
    Skills,
    Contact,
    Particles,
    ParticlesEditor
  },
};
</script>
<style lang="scss"></style>
