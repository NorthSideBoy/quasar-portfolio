<template>
  <div style="position: relative;">
    <Particles></Particles>
    <Tab class="q-pt-md q-pb-md" label="section" :level="3">
      <template v-slot:body>
        <div class="row">
          <div class="col-12 col-sm-6">
            <Tab class="q-pt-md" label="h2" :level="3">
              <template v-slot:body>
                <div style="font-family: 'fira-bold'; font-size: calc(25px + 3vw); line-height: 100%;" class="text-white">
                  <span>
                    Contacto
                  </span>
                </div>
              </template>
            </Tab>
            <Tab class="q-pt-md" label="p" :level="3">
              <template v-slot:body>
                <div style="font-family: 'fira-light'; font-size: calc(12px + 0.5vw); word-wrap: break-word; "
                  class="text-white q-pr-xl">
                  <span>
                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                    Sections
                    1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their
                    exact
                    original form
                  </span>
                </div>
              </template>
            </Tab>
            <Tab class="q-pt-md q-pb-md" label="q-form" :level="3">
              <template v-slot:body>
                <div class="q-pr-lg">
                  <q-form @submit="onSubmit" @reset="onReset">
                    <div class="row justify-center">
                      <q-input standout="bg-black input-title" input-class="text-white input-content" outlined
                        v-model="name" label="Nombre *" class="text-color col-6 q-pr-md input-title"
                        bg-color="secondary" />
                      <q-input standout="bg-black input-title" input-class="text-white input-content" outlined
                        v-model="email" label="Email *" class="col-6 input-title" bg-color="secondary" />
                      <q-input standout="bg-black input-title" input-class="text-white input-content" outlined
                        v-model="affair" label="Asunto *" class="col-12 q-pt-md input-title" bg-color="secondary" />
                      <q-input standout="bg-black input-title" input-class="text-white input-content" outlined
                        v-model="message" type="textarea" label="Mensaje *" class="col-12 q-pt-md input-title"
                        bg-color="secondary" />
                    </div>
                    <div class="q-pt-lg" style="position: relative; overflow: auto; height: 80px;">
                      <q-btn class="q-pl-lg q-pr-lg" flat label="Enviar"
                        style="font-family: 'fira-light'; color: #1D8EF0; border: 1px solid #1D8EF0; border-radius: 3px; position: absolute; right: 0;"
                        size="lg">
                      </q-btn>
                    </div>
                  </q-form>
                </div>
              </template>
            </Tab>
          </div>
          <div class="col-12 col-sm-6 q-pa-md">
            <l-map v-if="isGetClient" :markers="markers" class="shadow-10" style="min-height: 400px;"></l-map>
          </div>
        </div>
      </template>
    </Tab>
  </div>
</template>
<script>
import { ref, onMounted } from 'vue'
import LMap from "./LMap.vue"
import Particles from './Particles.vue'
import Tab from './Tab.vue'

export default {
  setup() {
    onMounted(() => {
      getClient()
    })
    const markers = ref([{
      latitude: 8.8875200,
      longitude: -64.2454400,
      text: `I'm here <br>
      <hr>
      El Tigre 6050, Anzoátegui, Venezuela`
    }])
    const getClient = () => {
      fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(response => {
          const publicIp = response.ip
          console.log(publicIp)
          markers.value.push({
            latitude: publicIp.lat,
            longitude: publicIp.lon,
            text: `Are you here ;) <br>
            <hr>
            ${publicIp.city}, ${publicIp.country}`
          })
          // isGetClient.value = true
        })
        .catch((err) => {
          console.log(err)
        });
    }
    const isGetClient = ref(true)
    const name = ref(null)
    const email = ref(null)
    const affair = ref(null)
    const message = ref(null)
    return {
      name,
      email,
      affair,
      message,
      getClient,
      isGetClient,
      markers
    }
  },
  components: {
    LMap,
    Particles,
    Tab
  }
}
</script>
<style lang="scss">

.input-title {
  font-family: 'fira-bold';
  color: #1D8EF0;
}

.input-content {
  font-family: 'fira-light';
}

.bg-black {
  background: #010409 !important
}
</style>
