<template>
  <q-layout view="lHh lpR lFf">

    <q-header class="interfaz">
      <q-toolbar>
        <q-toolbar-title>
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="toggleDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="drawer" side="left" class="interfaz" :width="250">
      <div class="q-pt-md text-white">
        <q-item>
          <q-item-section>
            <div class="row">
              <div class="q-pl-md" style="color: white; font-size: calc(4px + 1vw); font-family: 'fira-bold';">
                QUASAR-PORTFOLIO
              </div>
            </div>
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple @click="(e) => expandFolder(e)">
          <q-item-section>
            <div class="row">
              <q-icon style="color:#ABC2BA; font-size: 1.5em;" :name="folder ? mdiChevronDown : mdiChevronRight">
              </q-icon>
              <q-icon style="color:#4CAF50; font-size: 2em; position: relative;"
                :name="folder ? mdiFolderOpen  : mdiFolder ">
                <q-icon
                  style="position: absolute; bottom: 1; margin-left: 0.8em; margin-top: 0.8em; color: #ABC2BA; font-size: calc(3px + 1vw);"
                  :name="mdiXml"></q-icon>
              </q-icon>
              <div class="q-pl-sm" style="color: white; font-size: calc(4px + 1vw); font-family: 'fira-regular';">
                src
              </div>
            </div>
          </q-item-section>
        </q-item>

        <q-list v-if="folder" class="animate__animated animate__bounceIn">
          <q-item clickable v-ripple>
            <q-item-section>
              <div style="padding-left: 30px;" class="row">
                <q-icon style="color:#4CAF50; font-size: 2em;" :name="mdiVuejs">
                </q-icon>
                <div class="q-pl-sm" style="position: color: white; font-size: calc(2px + 1vw); font-family: 'fira-regular';">
                  Inicio.vue
                </div>
              </div>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section>
              <div style="padding-left: 30px;" class="row">
                <q-icon style="color:#4CAF50; font-size: 2em;" :name="mdiVuejs">
                </q-icon>
                <div class="q-pl-sm" style="position: color: white; font-size: calc(2px + 1vw); font-family: 'fira-regular';">
                  SobreMi.vue
                </div>
              </div>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section>
              <div style="padding-left: 30px;" class="row">
                <q-icon style="color:#4CAF50; font-size: 2em;" :name="mdiVuejs">
                </q-icon>
                <div class="q-pl-sm" style="position: color: white; font-size: calc(2px + 1vw); font-family: 'fira-regular';">
                  Skills.vue
                </div>
              </div>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section>
              <div style="padding-left: 30px;" class="row">
                <q-icon style="color:#4CAF50; font-size: 2em;" :name="mdiVuejs">
                </q-icon>
                <div class="q-pl-sm" style="position: color: white; font-size: calc(2px + 1vw); font-family: 'fira-regular';">
                  Curriculum.vue
                </div>
              </div>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section>
              <div style="padding-left: 30px;" class="row">
                <q-icon style="color:#4CAF50; font-size: 2em;" :name="mdiVuejs">
                </q-icon>
                <div class="q-pl-sm" style="position: color: white; font-size: calc(2px + 1vw); font-family: 'fira-regular';">
                  Proyectos.vue
                </div>
              </div>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section>
              <div style="padding-left: 30px;" class="row">
                <q-icon style="color:#4CAF50; font-size: 2em;" :name="mdiVuejs">
                </q-icon>
                <div class="q-pl-sm" style="position: color: white; font-size: calc(2px + 1vw); font-family: 'fira-regular';">
                  Contacto.vue
                </div>
              </div>
            </q-item-section>
          </q-item>
        </q-list>
      </div>

    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'
import {
  mdiFolder,
  mdiChevronRight,
  mdiXml,
  mdiChevronDown,
  mdiFolderOpen,
  mdiVuejs
} from '@mdi/js';


export default {
  setup() {
    const drawer = ref(false)
    const folder = ref(true)
    const toggleDrawer = () => {
      drawer.value = !drawer.value
    }
    const expandFolder = () => {
      folder.value = !folder.value
    }
    return {
      drawer,
      folder,
      toggleDrawer,
      expandFolder,
      mdiFolder,
      mdiChevronRight,
      mdiXml,
      mdiChevronDown,
      mdiFolderOpen,
      mdiVuejs
    }
  }
}
</script>
<style lang="scss">
@import 'animate.css';
.interfaz {
  background: #010409;
  border: 1px solid #30363D;
}
</style>
