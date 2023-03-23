<template>
  <div style="position: relative;">
    <Particles style="position: absolute; bottom: 0; height: 100vh; width: 80vw;"></Particles>
    <div style="font-family: 'fira-medium';" class="q-pl-lg">
      <span style="color: #A5D6F0">
        &lt;section&gt;
      </span>
    </div>
    <div class="q-pt-sm">
      <div style="font-family: 'fira-medium';" class="q-pl-xl">
        <span style="color: #A5D6F0">
          &lt;h1&gt;
        </span>
      </div>
      <div style="padding-left: 5vw;">
        <h1 style="font-family: 'fira-bold'; font-size: calc(30px + 3vw);" class="text-white no-margin no-padding;">
          <span style="letter-spacing: -0.2rem;">
            Hola, <br>
            Soy Said Lucena, <br>
            Desarrollador Web
          </span>
        </h1>
      </div>
      <div style="font-family: 'fira-medium';" class="q-pl-xl">
        <span style="color: #A5D6F0">
          &lt;/h1&gt;
        </span>
      </div>
    </div>
    <div class="q-pt-sm">
      <div style="font-family: 'fira-medium';" class="q-pl-xl">
        <span style="color: #A5D6F0">
          &lt;p&gt;
        </span>
      </div>
      <div style="padding-left: 5vw;">
        <p style="font-family: 'fira-bold'; font-size: calc(2px + 2vw);" class="text-grey no-margin no-padding;">
          <span>
            Back End - Front End Developer
          </span>
        </p>
      </div>
      <div style="font-family: 'fira-medium';" class="q-pl-xl">
        <span style="color: #A5D6F0">
          &lt;/p&gt;
        </span>
      </div>
    </div>
    <div style="padding-left: 5vw;" class="q-pt-lg q-pb-lg">
      <q-btn class="q-pl-lg q-pr-lg" flat label="CONTACTAME"
        style="font-family: 'fira-light'; color: #1D8EF0; border: 1px solid #1D8EF0; border-radius: 0px 0px 0px 0px;"
        size="lg">

      </q-btn>
    </div>
    <div style="font-family: 'fira-medium';" class="q-pl-lg">
      <span style="color: #A5D6F0">
        &lt;/section&gt;
      </span>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
import Particles from 'src/components/Particles.vue';
export default {
  setup() {
    return {
    }
  },
  components: {
    Particles
  }
}
</script>
<style lang="scss">
h1 {
  line-height: 4.5rem;
}
</style>
