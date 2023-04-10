<template>
  <div style="position:relative">
    <Particles :options="options" v-if="options" />
    <Tab label="section" :level="3" class="q-pt-md ">
      <template v-slot:body>
        <div>
          <Tab label="h2" :level="3">
            <template v-slot:body>
              <div style="font-family: 'fira-bold'; font-size: calc(25px + 3vw); line-height: 100%;" class="text-white">
                <span>
                  Habilidades
                </span>
              </div>
            </template>
          </Tab>
          <div class="row justify-center">
            <Tab class="q-pt-md q-pb-md col-12 col-sm-6" label="p" :level="3">
              <template v-slot:body>
                <div style="font-family: 'fira-light'; font-size: calc(12px + 0.5vw); word-wrap: break-word;"
                  class="col-12 col-sm-6 text-white q-pr-xl">
                  <span>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                    took
                    a galley of type and scrambled it to make a type specimen book. It has survived not only five
                    centuries,
                    but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
                    the
                    1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                    desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </span>
                </div>
              </template>
            </Tab>
            <div class="col-12 col-sm-6" style="padding-right: 48px;">
              <Sphere />
            </div>
          </div>
        </div>
      </template>
    </Tab>
  </div>
</template>
<script>
import Tab from './Tab.vue';
import Sphere from './Sphere.vue';
import Particles from './Particles.vue';
import { ref, onMounted } from 'vue';
import { useDataStore } from 'src/stores/data-store';

export default {
  setup() {
    const dataStore = ref(useDataStore())
    const options = ref(null)
    onMounted(() => {
      window.addEventListener("load", () => {
        options.value = dataStore.value.options
      })
    })
    return {
      dataStore,
      options
    }
  },
  components: {
    Tab,
    Sphere,
    Particles
  }
}
</script>
<style lang="scss"></style>


