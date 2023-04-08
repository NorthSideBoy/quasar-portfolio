<template>
  <q-dialog v-model="edit" persistent>
    <q-card style="background: #010205; color:#AFAFB0; border-radius: 0px;" class="shadow-10">

      <q-card-section horizontal class="row justify-between">
        <div class="row justify-center q-gutter-md q-pl-md">
          <div class="column justify-center">
            <q-btn icon="tune" flat size="sm" @click="tab = 'general'"
              :style="{ color: tab == 'general' ? '#1D8EF0' : 'white' }">
              <q-tooltip>
                General
              </q-tooltip>
            </q-btn>
          </div>
          <div class="column justify-center">
            <q-btn :icon="mdiVectorLine" flat size="sm" @click="tab = 'lines'"
              :style="{ color: tab == 'lines' ? '#1D8EF0' : 'white' }">
              <q-tooltip>
                Lineas
              </q-tooltip>
            </q-btn>
          </div>
          <div class="column justify-center">
            <q-btn icon="bubble_chart" flat size="sm" @click="tab = 'particles'"
              :style="{ color: tab == 'particles' ? '#1D8EF0' : 'white' }">
              <q-tooltip>
                Particulas
              </q-tooltip>
            </q-btn>
          </div>
        </div>
        <div style="color:white">
          <q-btn icon="close" size="md" style="border-radius: 0px;" @click="(e) => displayEdit(e)" v-close-popup />
        </div>

      </q-card-section>

      <q-separator color="white"></q-separator>

      <q-card-section>
        <q-tab-panels v-model="tab" animated style="background:#010205;">

          <q-tab-panel name="general">
            <div class="text-h6">General</div>
            <q-list style="min-width:calc(230px + 15vw);">

              <q-item>
                <q-item-section avatar>
                  <div>
                    Cantidad
                  </div>
                </q-item-section>
                <q-item-section>
                  <q-slider color="accent" v-model="options.general.quantity" :min="10" :max="70" label />
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section avatar>
                  <div>
                    Dirección
                  </div>
                </q-item-section>
                <q-item-section>
                  <q-select :popup-content-style="{ background: 'black', color: 'white', height: 'calc(100px + 6vh)' }"
                    bg-color="secondary" transition-show="scale" transition-hide="scale" standout="bg-black"
                    input-class="text-white" outlined v-model="options.general.direction" :options="directions">
                  </q-select>
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section avatar>
                  <div>
                    Hover
                  </div>
                </q-item-section>
                <q-item-section>
                  <q-select :popup-content-style="{ background: 'black', color: 'white', height: 'calc(100px + 6vh)' }"
                    bg-color="secondary" transition-show="scale" transition-hide="scale" standout="bg-black"
                    input-class="text-white" outlined v-model="options.general.hover" :options="hoverModes">
                  </q-select>
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section avatar>
                  <div>
                    Click
                  </div>
                </q-item-section>
                <q-item-section>
                  <q-select :popup-content-style="{ background: 'black', color: 'white', height: 'calc(100px + 6vh)' }"
                    bg-color="secondary" transition-show="scale" transition-hide="scale" standout="bg-black"
                    input-class="text-white" outlined v-model="options.general.click" :options="clickModes">
                  </q-select>
                </q-item-section>
              </q-item>

            </q-list>
          </q-tab-panel>

          <q-tab-panel name="lines">
            <div class="text-h6">Lines</div>
            <q-list style="min-width:calc(230px + 15vw) ;">

              <q-item>
                <q-item-section avatar>
                  <div>
                    Distancia
                  </div>
                </q-item-section>
                <q-item-section>
                  <q-slider color="accent" v-model="options.lines.distance" :min="50" :max="150" label />
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section avatar>
                  <div>
                    Tamaño
                  </div>
                </q-item-section>
                <q-item-section>
                  <q-slider color="accent" v-model="options.lines.width" :min="1" :max="6" :step="0.1" label />
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section avatar>
                  <div>
                    Opacidad
                  </div>
                </q-item-section>
                <q-item-section>
                  <q-slider color="accent" v-model="options.lines.opacity" :min="0" :max="1" :step="0.1" label />
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section avatar>
                  <div>
                    Color
                  </div>
                </q-item-section>
                <q-item-section>
                  <q-input v-model="options.lines.color" bg-color="secondary" standout="bg-black" input-class="text-white"
                    outlined>
                    <template v-slot:append>
                      <q-icon name="colorize" class="cursor-pointer" :style="{ color: options.lines.color }">
                        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                          <q-color v-model="options.lines.color" />
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                </q-item-section>
              </q-item>
            </q-list>
          </q-tab-panel>

          <q-tab-panel name="particles">
            <div class="text-h6">Particles</div>
            <q-list style="min-width:calc(230px + 15vw) ;">
              <q-item>
                <q-item-section avatar>
                  <div>
                    Forma
                  </div>
                </q-item-section>
                <q-item-section>
                  <q-select :popup-content-style="{ background: 'black', color: 'white', height: 'calc(100px + 6vh)' }"
                    bg-color="secondary" transition-show="scale" transition-hide="scale" standout="bg-black"
                    input-class="text-white" outlined v-model="options.particles.type" :options="types">
                  </q-select>
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section avatar>
                  <div>
                    Tamaño
                  </div>
                </q-item-section>
                <q-item-section>
                  <q-slider color="accent" v-model="options.particles.width" :min="2" :max="5" label :step="0.1" />
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section avatar>
                  <div>
                    Opacidad
                  </div>
                </q-item-section>
                <q-item-section>
                  <q-slider color="accent" v-model="options.particles.opacity" :min="0" :max="1" :step="0.1" label />
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section color="accent" avatar>
                  <div>
                    Color
                  </div>
                </q-item-section>
                <q-item-section>
                  <q-input v-model="options.particles.color" bg-color="secondary" standout="bg-black"
                    input-class="text-white" outlined>
                    <template v-slot:append>
                      <q-icon name="colorize" class="cursor-pointer" :style="{ color: options.particles.color }">
                        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                          <q-color v-model="options.particles.color" />
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                </q-item-section>
              </q-item>
            </q-list>
          </q-tab-panel>

        </q-tab-panels>
      </q-card-section>
    </q-card>
  </q-dialog>
  <q-btn size="xs" icon="edit" push rounded @click="(e) => displayEdit(e)">
    <q-tooltip>
      Editar particulas
    </q-tooltip>
  </q-btn>
</template>
<script>
import { ref} from 'vue'
import { mdiVectorLine } from '@mdi/js';
import { useDataStore } from 'src/stores/data-store';
export default {
  props: {
    options: {
      type: Object,
      required: true,
      default: useDataStore().options
    }
  },
  setup(props, { emit }) {
    const tab = ref("general")
    const directions = ref(["none", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left"])
    const hoverModes = ref(["grab", "repulse"])
    const clickModes = ref(["push", "repulse"])
    const types = ref(["circle", "edge", "triangle", "polygon", "star"])
    const edit = ref(false)

    const displayEdit = (e) => {
      edit.value = !edit.value
    }

    const options = ref(props.options)

    return {
      directions,
      edit,
      tab,
      mdiVectorLine,
      hoverModes,
      clickModes,
      options,
      types,
      displayEdit
    }
  }
}
</script>
<style lang="scss">
.q-field__native,
.q-field__prefix,
.q-field__suffix,
.q-field__input {
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0.00937em;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
  border-radius: 0;
  background: none;
  color: white;
  outline: 0;
  padding: 6px 0;
}
</style>
