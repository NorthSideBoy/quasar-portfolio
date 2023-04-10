<template>
  <div style="position: relative;">
    <Particles :options="options" v-if="options" />
    <Tab class="q-pt-md" label="section" :level="3">
      <template v-slot:body>
        <div>
          <Tab label="h2" :level="3">
            <template v-slot:body>
              <div style="font-family: 'fira-bold'; font-size: calc(25px + 3vw); line-height: 100%;" class="text-white">
                <span>
                  Sobre Mi
                </span>
              </div>
            </template>
          </Tab>
          <Tab class="q-pt-md" label="p" :level="3">
            <template v-slot:body>
              <div style="font-family: 'fira-light'; font-size: calc(12px + 0.5vw); word-wrap: break-word; "
                class="text-white q-pr-xl">
                <span>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the
                  1500s, when an unknown printer took a galley of type and scrambled it to
                  make a type specimen book. It has survived not only five centuries, but also
                  the leap into electronic typesetting, remaining essentially unchanged. It
                  was popularised in the 1960s with the release of Letraset sheets containing
                  Lorem Ipsum passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </span>
              </div>
            </template>
          </Tab>
          <Tab class="q-pt-md q-pb-md" :level="3">
            <template v-slot:body>
              <div class="row q-pr-lg q-pb-md justify-between">
                <div class="col-12 col-sm-6 q-pr-xl">
                  <div style="font-family: 'fira-bold'; font-size: calc(20px + 1.8vw)" class="text-white">
                    <span style="letter-spacing: -0.2rem"> Datos Personales </span>
                  </div>
                  <div class="row justify-start text-start q-pt-md">
                    <div class="row col-12" v-for="row, index in rows" :key="index">
                      <span
                        style="font-family: 'fira-bold';font-size: calc(15px + 0.35vw); width: calc(150px); color: #1D8EF0;">
                        {{ row.name }}
                      </span>
                      <span style="font-family: 'fira-light';font-size: calc(15px + 0.35vw);" class="text-white">
                        {{ row.label }}
                      </span>
                    </div>
                  </div>
                </div>
                <div :class="`col-12 col-sm-6 ${$q.screen.width <= 600 ? 'q-pt-md' : ''}`">
                  <div style="font-family: 'fira-bold'; font-size: calc(20px + 1.8vw)" class="text-white">
                    <span style="letter-spacing: -0.2rem;"> Mis Intereses </span>
                  </div>
                  <div class="row justify-start q-pt-md" style="gap:calc(2px + 0.8vw);">
                    <div class="column justify-center" v-for="(interest, index) in interests" :key="index"
                      style="font-size: calc(12px + 0.14vw);background: #010409; border-radius: 5px; flex-basis: calc(100% / 4); height: 50%; min-height: 90px ; min-width: 90px; max-height: 110px; max-width: 110px;">
                      <div>
                        <div align="center">
                          <q-icon :name="interest.icon" size="xl" color="white">
                          </q-icon>
                        </div>
                        <div style="font-family:'fira-bold';color:#1D8EF0;" align="center">
                          {{ interest.label }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </Tab>
        </div>
      </template>
    </Tab>
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
import {
  mdiGamepad,
  mdiMusic,
  mdiConsoleLine,
  mdiMonitorDashboard,
  mdiCat,
  mdiAccessPoint,
  mdiBrain,
  mdiLinux
} from '@mdi/js';
import Tab from "./Tab.vue";
import Particles from "./Particles.vue";
import { useDataStore } from "src/stores/data-store";
export default {
  setup() {
    const interests = ref([
      { icon: mdiGamepad, label: "JUEGOS" },
      { icon: mdiMusic, label: "MUSICA" },
      { icon: mdiConsoleLine, label: "PROGRAMAR" },
      { icon: mdiMonitorDashboard, label: "DISEÑAR" },
      { icon: mdiCat, label: "MASCOTAS" },
      { icon: mdiAccessPoint, label: "REDES" },
      { icon: mdiBrain, label: "APRENDER" },
      { icon: mdiLinux, label: "LINUX" }
    ])

    const rows = ref([
      { name: "Cumpleaños", label: "27-03-2003" },
      { name: "Teléfono", label: "+58 4141844426" },
      { name: "Email", label: "saidlucena519@gmail.com" },
      { name: "Dirección", label: "Anzoátegui, Venezuela" },
      { name: "Cargo", label: "Junior Developer" }
    ])

    const dataStore = ref(useDataStore())
    const options = ref(null)

    onMounted(() => {
      window.addEventListener("load", () => {
        options.value = dataStore.value.options
      })
    })

    return {
      mdiGamepad,
      mdiMusic,
      mdiConsoleLine,
      mdiMonitorDashboard,
      mdiCat,
      mdiAccessPoint,
      mdiBrain,
      mdiLinux,
      interests,
      rows,
      options,
      dataStore
    };
  },
  components: {
    Tab,
    Particles
  }
};
</script>
<style lang="scss"></style>
