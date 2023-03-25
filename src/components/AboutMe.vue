<template>
  <div style="position: relative" class="q-pt-md">
    <ParticlesBlue style="position: absolute; bottom: 0; height: 100vh; width: 80vw"></ParticlesBlue>
    <div style="font-family: 'fira-medium'" class="q-pl-lg">
      <span style="color: #a5d6f0"> &lt;section&gt; </span>
    </div>

    <div class="q-pt-sm">
      <div style="font-family: 'fira-medium'" class="q-pl-xl">
        <span style="color: #a5d6f0"> &lt;h2&gt; </span>
      </div>
      <div style="padding-left: 5vw">
        <h2 style="font-family: 'fira-bold'; font-size: calc(30px + 3vw)" class="text-white no-margin no-padding;">
          <span style="letter-spacing: -0.2rem"> Sobre Mi </span>
        </h2>
      </div>
      <div style="font-family: 'fira-medium'" class="q-pl-xl">
        <span style="color: #a5d6f0"> &lt;/h2&gt;</span>
      </div>
    </div>

    <div class="q-pt-sm">
      <div style="font-family: 'fira-medium'" class="q-pl-xl">
        <span style="color: #a5d6f0"> &lt;p&gt; </span>
      </div>
      <div style="padding-left: 5vw" class="row">
        <div class="col-10 q-pr-xl">
          <p style="font-family: 'fira-light'; font-size: calc(8px + 0.5vw); word-wrap: break-word; "
            class="text-white no-margin no-padding">
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
          </p>
        </div>
      </div>
      <div style="font-family: 'fira-medium'" class="q-pl-xl">
        <span style="color: #a5d6f0"> &lt;/p&gt; </span>
      </div>

      <div style="padding-left: 5vw;" class="row justify-between q-pt-md">
        <div class="col-5">
          <h3 style="font-family: 'fira-bold'; font-size: calc(25px + 1vw)" class="text-white no-margin no-padding">
            <span style="letter-spacing: -0.2rem"> Datos Personales </span>
          </h3>
          <div class="row justify-start text-start q-pt-md">
            <div class="row col-12">
              <span
                style="font-family: 'fira-bold';font-size: calc(8px + 0.8vw); width: 150px; display: inline-block; color: #1D8EF0;"
                class="">
                Cumpleaños
              </span>
              <span style="font-family: 'fira-light';font-size: calc(8px + 0.8vw); " class="text-white">
                27-10-2003
              </span>
            </div>
            <div class="row col-12">
              <span
                style="font-family: 'fira-bold';font-size: calc(8px + 0.8vw); width: 150px; display: inline-block; color: #1D8EF0;"
                class="">
                Télefono
              </span>
              <span style="font-family: 'fira-light';font-size: calc(8px + 0.8vw); " class="text-white">
                +58 4141844426
              </span>
            </div>
            <div class="row col-12">
              <span
                style="font-family: 'fira-bold';font-size: calc(8px + 0.8vw); width: 150px; display: inline-block; color: #1D8EF0;"
                class="">
                Email
              </span>
              <span style="font-family: 'fira-light';font-size: calc(8px + 0.8vw); " class="text-white">
                saidlucena519@gmail.com
              </span>
            </div>
            <div class="row col-12">
              <span
                style="font-family: 'fira-bold';font-size: calc(8px + 0.8vw); width: 150px; display: inline-block; color: #1D8EF0;"
                class="">
                Dirección
              </span>
              <span style="font-family: 'fira-light';font-size: calc(8px + 0.8vw); " class="text-white">
                Anzoátegui, Venezuela
              </span>
            </div>
            <div class="row col-12">
              <span
                style="font-family: 'fira-bold';font-size: calc(8px + 0.8vw); width: 150px; display: inline-block; color: #1D8EF0;"
                class="">
                Cargo
              </span>
              <span style="font-family: 'fira-light';font-size: calc(8px + 0.8vw); " class="text-white">
                Junior Developer
              </span>
            </div>
          </div>
        </div>

        <div class="col-6" style="margin-right:35px ;">
          <h3 style="font-family: 'fira-bold'; font-size: calc(25px + 1vw)" class="text-white no-margin no-padding">
            <span style="letter-spacing: -0.2rem"> Mis Intereses </span>
          </h3>

          <div class="row justify-start q-pt-md" style="gap:15px;">
            <div class="column justify-center"
              style="background: #010409; border-radius: 10px; flex-basis: calc(100% / 4); height: 50%; min-height: 100px ; min-width: 100px; max-height: 100px; max-width: 100px;">
              <div class="justify-center row q-pa-sm">
                <q-icon :name="mdiGamepad" size="xl" color="white">
                </q-icon>
                <div style="font-family:'fira-bold';color:#1D8EF0">
                  JUEGOS
                </div>
              </div>
            </div>
            <div class="column justify-center"
              style="background: #010409; border-radius: 10px; flex-basis: calc(100% / 4); height: 50%; min-height: 100px ; min-width: 100px; max-height: 100px; max-width: 100px;">
              <div class="justify-center row q-pa-sm">
                <q-icon :name="mdiMusic" size="xl" color="white">
                </q-icon>
                <div style="font-family:'fira-bold';color:#1D8EF0">
                  MUSICA
                </div>
              </div>
            </div>
            <div class="column justify-center"
              style="background: #010409; border-radius: 10px; flex-basis: calc(100% / 4); height: 50%; min-height: 100px ; min-width: 100px; max-height: 100px; max-width: 100px;">
              <div class="justify-center row q-pa-sm">
                <q-icon :name="mdiConsoleLine" size="xl" color="white">
                </q-icon>
                <div style="font-family:'fira-bold';color:#1D8EF0">
                  PROGRAMAR
                </div>
              </div>
            </div>
            <div class="column justify-center"
              style="background: #010409; border-radius: 10px; flex-basis: calc(100% / 4); height: 50%; min-height: 100px ; min-width: 100px; max-height: 100px; max-width: 100px;">
              <div class="justify-center row q-pa-sm">
                <q-icon :name="mdiMonitorDashboard" size="xl" color="white">
                </q-icon>
                <div style="font-family:'fira-bold';color:#1D8EF0">
                  DISEÑAR
                </div>
              </div>
            </div>
            <div class="column justify-center"
              style="background: #010409; border-radius: 10px; flex-basis: calc(100% / 4); height: 50%; min-height: 100px ; min-width: 100px; max-height: 100px; max-width: 100px;">
              <div class="justify-center row q-pa-sm">
                <q-icon :name="mdiCat" size="xl" color="white">
                </q-icon>
                <div style="font-family:'fira-bold';color:#1D8EF0">
                  MASCOTAS
                </div>
              </div>
            </div>
            <div class="column justify-center"
              style="background: #010409; border-radius: 10px; flex-basis: calc(100% / 4); height: 50%; min-height: 100px ; min-width: 100px; max-height: 100px; max-width: 100px;">
              <div class="justify-center row q-pa-sm">
                <q-icon :name="mdiAccessPoint" size="xl" color="white">
                </q-icon>
                <div style="font-family:'fira-bold';color:#1D8EF0">
                  REDES
                </div>
              </div>
            </div>
            <div class="column justify-center"
              style="background: #010409; border-radius: 10px; flex-basis: calc(100% / 4); height: 50%; min-height: 100px ; min-width: 100px; max-height: 100px; max-width: 100px;">
              <div class="justify-center row q-pa-sm">
                <q-icon :name="mdiBrain" size="xl" color="white">
                </q-icon>
                <div style="font-family:'fira-bold';color:#1D8EF0">
                  APRENDER
                </div>
              </div>
            </div>
            <div class="column justify-center"
              style="background: #010409; border-radius: 10px; flex-basis: calc(100% / 4); height: 50%; min-height: 100px ; min-width: 100px; max-height: 100px; max-width: 100px;">
              <div class="justify-center row q-pa-sm">
                <q-icon :name="mdiLinux" size="xl" color="white">
                </q-icon>
                <div style="font-family:'fira-bold';color:#1D8EF0">
                  LINUX
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div style="font-family: 'fira-medium'" class="q-pl-lg">
      <span style="color: #a5d6f0"> &lt;/section&gt; </span>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import ParticlesBlue from "src/components/ParticlesBlue.vue";
import { mdiGamepad,  mdiMusic, mdiConsoleLine, mdiMonitorDashboard, mdiCat, mdiAccessPoint, mdiBrain, mdiLinux    } from '@mdi/js';
export default {
  setup() {
    return {
      mdiGamepad,
      mdiMusic,
      mdiConsoleLine,
      mdiMonitorDashboard,
      mdiCat,
      mdiAccessPoint,
      mdiBrain,
      mdiLinux
    };
  },
  components: {
    ParticlesBlue,
  },
};
</script>
<style lang="scss">
h2 {
  line-height: 4.5rem;
}
</style>
