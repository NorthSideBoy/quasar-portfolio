<template>
  <q-page style="background: #0d1117;">

    <q-scroll-area style="height: calc(100vh - 65px); max-width: 100vw; position: relative;">

      <Tab class="q-pt-md q-pb-md" label="template" :level="3">
        <template v-slot:after>
          <ParticlesEditor :options="options" v-if="options" />
        </template>
        <template v-slot:body>
          <div style="max-width: 94vw;">
            <div>
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
          </div>
        </template>
      </Tab>
    </q-scroll-area>
  </q-page>
</template>
<script>

import { ref, onMounted } from "vue";
import Tab from "src/components/Tab.vue";
import Home from "src/components/Home.vue";
import AboutMe from "src/components/AboutMe.vue";
import Skills from "src/components/Skills.vue";
import Contact from "src/components/Contact.vue";
import ParticlesEditor from "src/components/ParticlesEditor.vue";
import { useDataStore } from "src/stores/data-store.js";

export default {

  setup() {
    const options = ref(null)
    const dataStore = ref(useDataStore())
    onMounted(() => {
      window.addEventListener("load", () => {
        options.value = dataStore.value.options
      })
    })
    return {
      options,
      dataStore
    }
  },
  components: {
    Tab,
    Home,
    AboutMe,
    Skills,
    Contact,
    ParticlesEditor
  },
};
</script>
<style lang="scss"></style>
