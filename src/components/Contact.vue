<template>
  <div style="position: relative;" class="q-pt-md">
    <Particles style="position: absolute; bottom: 0; height: 100vh; width: 80vw;"></Particles>
    <div style="font-family: 'fira-medium';" class="q-pl-lg">
      <span style="color: #A5D6F0">
        &lt;section&gt;
      </span>
    </div>
    <div class="row">
      <div class="col-6">
        <div class="q-pt-sm">
          <div style="font-family: 'fira-medium';" class="q-pl-xl">
            <span style="color: #A5D6F0">
              &lt;h2&gt;
            </span>
          </div>
          <div style="padding-left: 5vw;">
            <h2 style="font-family: 'fira-bold'; font-size: calc(25px + 3vw);" class="text-white no-margin no-padding;">
              <span style="letter-spacing: -0.2rem;">
                Contacto
              </span>
            </h2>
          </div>
          <div style="font-family: 'fira-medium';" class="q-pl-xl">
            <span style="color: #A5D6F0">
              &lt;/h2&gt;
            </span>
          </div>
        </div>
        <div class="q-pt-sm">
          <div style="font-family: 'fira-medium';" class="q-pl-xl">
            <span style="color: #A5D6F0">
              &lt;p&gt;
            </span>
          </div>
          <div style="padding-left: 5vw">
            <p style="font-family: 'fira-light'; font-size: calc(8px + 0.5vw); word-wrap: break-word; "
              class="text-white no-margin no-padding">
              <span>
                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections
                1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact
                original form
              </span>
            </p>
          </div>
          <div style="font-family: 'fira-medium';" class="q-pl-xl">
            <span style="color: #A5D6F0">
              &lt;/p&gt;
            </span>
          </div>
        </div>
        <div class="q-pt-sm">
          <div style="font-family: 'fira-medium';" class="q-pl-xl">
            <span style="color: #A5D6F0">
              &lt;q-form&gt;
            </span>
          </div>
          <div style="padding-left: 5vw" class="q-pt-sm">
            <q-form @submit="onSubmit" @reset="onReset">
              <div class="row justify-center">
                <q-input standout="bg-black input-title" input-class="text-white input-content" outlined
                  v-model="name" label="Nombre" class="text-color col-6 q-pr-md input-title" bg-color="secondary" />
                <q-input standout="bg-black input-title" input-class="text-white input-content" outlined
                  v-model="email" label="Email" class="col-6 input-title" bg-color="secondary" />
                <q-input standout="bg-black input-title" input-class="text-white input-content" outlined
                  v-model="affair" label="Asunto" class="col-12 q-pt-md input-title" bg-color="secondary" />
                <q-input standout="bg-black input-title" input-class="text-white input-content" outlined
                  v-model="message" type="textarea" label="Email" class="col-12 q-pt-md input-title"
                  bg-color="secondary" />
              </div>
              <div class="q-pt-xl" style="position: relative; overflow: auto; height: 100px;">
                <q-btn class="q-pl-lg q-pr-lg" flat label="Enviar"
                  style="font-family: 'fira-light'; color: #1D8EF0; border: 1px solid #1D8EF0; border-radius: 3px; position: absolute; right: 0;"
                  size="lg">
                </q-btn>
              </div>
            </q-form>
          </div>
          <div style="font-family: 'fira-medium';" class="q-pl-xl">
            <span style="color: #A5D6F0">
              &lt;/q-form&gt;
            </span>
          </div>
        </div>
      </div>
      <div class="col-6 q-pa-xl">
        <l-map :markers="marker" class="shadow-10" ></l-map>
      </div>
    </div>
    <div style="font-family: 'fira-medium';" class="q-pl-lg">
      <span style="color: #A5D6F0;">
        &lt;/section&gt;
      </span>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
import LMap from "./LMap.vue"
import Particles from './Particles.vue'

export default {
  setup() {
    const marker = ref([{
      latitude: 8.8875200,
      longitude: -64.2454400,
      text: "El Tigre 6050, Anzoátegui, Venezuela"
    }])
    const name = ref(null)
    const email = ref(null)
    const affair = ref(null)
    const message = ref(null)
    return {
      name,
      email,
      affair,
      message,
      marker
    }
  },
  components: {
    LMap,
    Particles
  }
}
</script>
<style lang="scss">
h2 {
  line-height: 4.5rem;
}

.input-title {
  font-family: 'fira-bold';
  color:#1D8EF0;
}

.input-content {
  font-family: 'fira-light';
}
.bg-black{
background: #010409 !important
}
</style>
