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
            <q-btn icon="bubble_chart" flat size="sm" @click="tab = 'bubbles'"
              :style="{ color: tab == 'bubbles' ? '#1D8EF0' : 'white' }">
              <q-tooltip>
                Burbujas
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
            <div class="text-h6">Particles</div>
            <q-list style="min-width:calc(230px + 15vw) ;">

              <q-item>
                <q-item-section avatar>
                  <div>
                    Cantidad
                  </div>
                </q-item-section>
                <q-item-section>
                  <q-slider v-model="quantity" :min="30" :max="70" label />
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section avatar>
                  <div>
                    Color
                  </div>
                </q-item-section>
                <q-item-section>
                  <q-input v-model="color" bg-color="secondary" standout="bg-black" input-class="text-white" outlined>
                    <template v-slot:append>
                      <q-icon name="colorize" class="cursor-pointer" color="primary">
                        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                          <q-color v-model="color" />
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section avatar>
                  <div>
                    Dirección
                  </div>
                </q-item-section>
                <q-item-section>
                  <q-select bg-color="secondary" standout="bg-black" input-class="text-white" outlined v-model="direction"
                    :options="directions" />
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
                    Cantidad
                  </div>
                </q-item-section>
                <q-item-section>
                  <q-slider v-model="quantity" :min="30" :max="70" label />
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section avatar>
                  <div>
                    Color
                  </div>
                </q-item-section>
                <q-item-section>
                  <q-input v-model="color" bg-color="secondary" standout="bg-black" input-class="text-white" outlined>
                    <template v-slot:append>
                      <q-icon name="colorize" class="cursor-pointer" color="primary">
                        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                          <q-color v-model="color" />
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section avatar>
                  <div>
                    Dirección
                  </div>
                </q-item-section>
                <q-item-section>
                  <q-select bg-color="secondary" standout="bg-black" input-class="text-white" outlined v-model="direction"
                    :options="directions" />
                </q-item-section>
              </q-item>

            </q-list>
          </q-tab-panel>

          <q-tab-panel name="bubbles">
            <div class="text-h6">Bubbles</div>
            <q-list style="min-width:calc(230px + 15vw) ;">

              <q-item>
                <q-item-section avatar>
                  <div>
                    Cantidad
                  </div>
                </q-item-section>
                <q-item-section>
                  <q-slider v-model="quantity" :min="30" :max="70" label />
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section avatar>
                  <div>
                    Color
                  </div>
                </q-item-section>
                <q-item-section>
                  <q-input v-model="color" bg-color="secondary" standout="bg-black" input-class="text-white" outlined>
                    <template v-slot:append>
                      <q-icon name="colorize" class="cursor-pointer" color="primary">
                        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                          <q-color v-model="color" />
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section avatar>
                  <div>
                    Dirección
                  </div>
                </q-item-section>
                <q-item-section>
                  <q-select bg-color="secondary" standout="bg-black" input-class="text-white" outlined v-model="direction"
                    :options="directions" />
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
import { ref, onMounted } from 'vue'
import { mdiVectorLine } from '@mdi/js';
export default {
  props: {
  },
  setup(props) {
    const quantity = ref(50)
    const color = ref('#FF00FF')
    const direction = ref("none")
    const tab = ref("general")
    const directions = ref(["none", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left"])
    const edit = ref(false)
    const displayEdit = (e) => {
      edit.value = !edit.value
    }

    return {
      quantity,
      color,
      direction,
      directions,
      edit,
      tab,
      mdiVectorLine,
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
