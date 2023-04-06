<template>
  <q-layout view="lHh lpR lFf">

    <q-header class="interfaz column justify-center" style="height: 65px;">

      <q-toolbar>
        <q-icon :name="mdiConsole" size="lg">

        </q-icon>
        <q-toolbar-title style="font-family: 'fira-bold'; color:#D7AC3B;">
          <div class="typing" style=" font-size: calc(15px + 0.8vw);">
            NorthSideBoy
          </div>
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="toggleDrawer" />
      </q-toolbar>

    </q-header>

    <q-drawer show-if-above v-model="drawer" side="left" class="interfaz" :width="260" style="position: relative; ">
      <div class="q-pt-md text-white">

        <q-item clickable v-ripple to="/" active-class="link">
          <q-item-section>
            <div class="q-pl-md" style="color: #58A6FF; font-size: calc(14px + 0.3vw); font-family: 'fira-bold';">
              <q-icon :name="mdiConsoleLine" size="sm" style="color:white" />
              Said Lucena
            </div>
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple @click="(e) => expandFolder(e)">
          <q-item-section>
            <div class="row">
              <q-icon style="color:#ABC2BA; font-size: 1.5rem;" :name="folder ? mdiChevronDown : mdiChevronRight">
              </q-icon>
              <q-icon style="color:#4CAF50; font-size: 2rem; position: relative;"
                :name="folder ? mdiFolderOpen : mdiFolder">
                <q-icon
                  style="position: absolute; bottom: 1; margin-left: 1.2rem; margin-top: 0.8rem; color: #ABC2BA; font-size: calc(10px + 0.6vw);"
                  :name="mdiXml"></q-icon>
              </q-icon>
              <div class="q-pl-sm column justify-center"
                style="color: #D29922; font-size: calc(13px + 0.5vw); font-family: 'fira-regular';">
                src
              </div>
            </div>
          </q-item-section>
        </q-item>

        <q-list v-if="folder" class="animate__animated animate__fadeIn">
          <q-item clickable v-ripple active-class="link" v-for="section, index in sections" :key="index">
            <q-item-section>
              <div style="padding-left: 30px;" class="row">
                <q-icon style="color:#4CAF50; font-size: 2em;" :name="mdiVuejs">
                </q-icon>
                <div class="q-pl-sm column justify-center"
                  style="position: color: white; font-size: calc(10px + 0.5vw); font-family: 'fira-regular';">
                  {{ section.label }}
                </div>
              </div>
            </q-item-section>
          </q-item>
        </q-list>
      </div>

      <q-item style="position: absolute; bottom: 0;">
        <q-item-section>
          <q-item-label>
            <span class="text-weight-medium" style="font-family: 'fira-bold'; color:#D7AC3B">[quasar-portfolio]</span>
            <span class="text-grey-8"> - GitHub repository</span>
          </q-item-label>
          <q-item-label caption style="font-family: 'fira-bold'" class="text-white">
            @northsideboy - saidlucena519@gmail.com
          </q-item-label>
          <q-item-label class="q-mt-xs text-uppercase" style="font-family:'fira-bold'; color:#58A6FF">
            <span class="cursor-pointer" @click="(e) => toGithub(e)">Open in GitHub</span>
            <q-icon class="q-pl-sm" style="color: white;" size="sm" name="fi-brands-github"></q-icon>
          </q-item-label>
        </q-item-section>
      </q-item>
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
  mdiVuejs,
  mdiConsole,
  mdiConsoleLine
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

    const toGithub = () => {
      window.location.href = "https://github.com/NorthSideBoy/quasar-portfolio"
    }

    const sections = ref([
      { label: "Inicio.vue" },
      { label: "SobreMi.vue" },
      { label: "Skills.vue" },
      { label: "Curriculum.vue" },
      { label: "Proyectos.vue" },
      { label: "Contacto.vue" }
    ])

    return {
      drawer,
      folder,
      sections,
      mdiFolder,
      mdiChevronRight,
      mdiXml,
      mdiChevronDown,
      mdiFolderOpen,
      mdiVuejs,
      mdiConsole,
      mdiConsoleLine,
      toggleDrawer,
      expandFolder,
      toGithub,
    }
  }
}
</script>
<style>
@import "~@flaticon/flaticon-uicons/css/all/all";
@import 'animate.css';

.interfaz {
  background: #010409;
  border: 1px solid #30363D;
}

.typing {
  display: block;
  font-family: monospace;
  white-space: nowrap;
  border-right: 4px solid;
  width: 12.5ch;

  animation: effect 2s steps(12), blink .5s infinite step-end alternate;
  overflow: hidden;
}

@keyframes effect {
  from {
    width: 0
  }
}

@keyframes blink {
  50% {
    border-color: transparent
  }
}

.link {
  color: #D29922
}
</style>
