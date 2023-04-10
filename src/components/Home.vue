<template>
  <div style="position: relative;">
    <Particles :options="options" v-if="options" />
    <Tab label="section" :level="3">
      <template v-slot:body>
        <div>
          <Tab label="h1" :level="3">
            <template v-slot:body>
              <div @animationend="(e) => displaySubtitle(e, 'animate__fadeInLeft')"
                style="font-family: 'fira-bold'; font-size: calc(28px + 3vw); line-height: 100%; word-wrap: break-word; height: 100%;"
                class="text-white animate__animated animate__fadeInLeft">
                <span>
                  Hola, <br>
                  Soy Said Lucena, <br>
                  Desarrollador
                </span>
              </div>
            </template>
          </Tab>
          <Tab class="q-pt-md" label="p" :level="3">
            <template v-slot:body>
              <div v-if="subtitle" class="animate__animated animate__fadeIn text-grey"
                style="font-family: 'fira-bold'; font-size: calc(15px + 2vw);">
                <span>
                  Back End - Front End Developer
                </span>
              </div>
              <div v-else style="font-family: 'fira-bold'; font-size: calc(15px + 2vw);">
                <span>
                  &nbsp;<br>
                  {{ $q.screen.width <= 600 ? '&nbsp;' : '' }} </span>
              </div>
            </template>
          </Tab>
          <Tab class="q-pt-md q-pb-md" label="q-btn" :level="3">
            <template v-slot:body>
              <q-btn class="q-pl-lg q-pr-lg animate__animated animate__headShake animate__delay-1s" flat
                label="CONTACTAME" v-if="contact"
                style="font-family: 'fira-light'; color: #1D8EF0; border: 1px solid #1D8EF0; border-radius: 0px 0px 0px 0px;"
                size="lg">
              </q-btn>
              <q-btn class="q-pl-lg q-pr-lg" flat label="CONTACTAME" v-else
                style="font-family: 'fira-light'; color: #1D8EF0; border: 1px solid #1D8EF0; border-radius: 0px 0px 0px 0px;"
                size="lg">
              </q-btn>
            </template>
          </Tab>
        </div>
      </template>
    </Tab>
  </div>
</template>
<script>
import { ref, onMounted } from 'vue'
import Tab from './Tab.vue'
import Particles from './Particles.vue'
import ParticlesEditor from './ParticlesEditor.vue';
import { useDataStore } from 'src/stores/data-store';
export default {
  setup() {
    const contact = ref(false)
    const subtitle = ref(false)
    const dataStore = ref(useDataStore())
    const options = ref(null)
    const displaySubtitle = (e, animation) => {
      const prefix = "animated__"
      e.target.classList.remove(`${prefix}animated`, animation);
      subtitle.value = !subtitle.value
      contact.value = true
    }
    onMounted(() => {
      window.addEventListener("load", () => {
        options.value = dataStore.value.options
      })
    })

    return {
      contact,
      subtitle,
      dataStore,
      options,
      displaySubtitle
    }
  },
  components: {
    Tab,
    Particles,
    ParticlesEditor
  }
}
</script>
<style lang="scss"></style>
