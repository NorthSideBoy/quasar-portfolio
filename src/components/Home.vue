<template>
  <div style="position: relative;" class="q-pt-md">

    <Particles style="position: absolute; bottom: 0; height: 100vh; width: 80vw;"></Particles>

    <Label name="section" class="q-pl-lg"></Label>

    <div class="q-pt-sm">

      <Label name="h1" class="q-pl-xl"></Label>

      <div style="padding-left: 5vw;" class="animate__animated animate__fadeInLeft"
        @animationend="(e) => displaySubtitle(e, 'animate__fadeInLeft')">

        <h1 style="font-family: 'fira-bold'; font-size: calc(30px + 3vw);" class="text-white no-margin no-padding;">

          <span style="letter-spacing: -0.2rem;">
            Hola, <br>
            Soy Said Lucena, <br>
            Desarrollador Web
          </span>

        </h1>

      </div>

      <Label name="/h1" class="q-pl-xl"></Label>

    </div>

    <div class="q-pt-sm">

      <Label name="p" class="q-pl-xl"></Label>

      <div style="padding-left: 5vw;" v-if="subtitle" class="animate__animated animate__fadeIn">

        <p style="font-family: 'fira-bold'; font-size: calc(2px + 2vw);" class="text-grey no-margin no-padding;">

          <span>
            Back End - Front End Developer
          </span>

        </p>

      </div>

      <div v-else>
        <p style="font-family: 'fira-bold'; font-size: calc(2px + 2vw);" class="no-margin no-padding;">
          <span>
            &nbsp;
          </span>
        </p>
      </div>

      <Label name="/p" class="q-pl-xl"></Label>

    </div>

    <div style="padding-left: 5vw;" class="q-pt-lg q-pb-lg">

      <q-btn class="q-pl-lg q-pr-lg animate__animated animate__headShake animate__delay-1s" flat label="CONTACTAME"
        v-if="contact"
        style="font-family: 'fira-light'; color: #1D8EF0; border: 1px solid #1D8EF0; border-radius: 0px 0px 0px 0px;"
        size="lg">
      </q-btn>

      <q-btn class="q-pl-lg q-pr-lg" flat label="CONTACTAME" v-else
        style="font-family: 'fira-light'; color: #1D8EF0; border: 1px solid #1D8EF0; border-radius: 0px 0px 0px 0px;"
        size="lg">
      </q-btn>

    </div>

    <Label name="/section" class="q-pl-lg"></Label>

  </div>
</template>
<script>
import { ref } from 'vue'
import Particles from 'src/components/Particles.vue';
import Label from './Label.vue'
export default {
  setup() {
    const contact = ref(false)
    const subtitle = ref(false)
    const displaySubtitle = (e, animation) => {
      const prefix = "animated__"
      e.target.classList.remove(`${prefix}animated`, animation);
      subtitle.value = !subtitle.value
      contact.value = true
    }
    return {
      contact,
      subtitle,
      displaySubtitle
    }
  },
  components: {
    Particles,
    Label
  }
}
</script>
<style lang="scss">
h1 {
  line-height: 4.5rem;
}
</style>
