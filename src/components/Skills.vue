<template>
  <div style="position: relative;" class="q-pt-md">
    <Particles color="#D7AC3B"></Particles>
    <Label name="section" class="q-pl-lg"></Label>
    <div class="row">
      <div class="col-6 column justify-center">
        <div class="q-pt-sm">
          <Label name="h2" class="q-pl-xl"></Label>
          <div style="padding-left: 5vw;">
            <h2 style="font-family: 'fira-bold'; font-size: calc(25px + 3vw);" class="text-white no-margin no-padding;">
              <span style="letter-spacing: -0.2rem;">
                Habilidades
              </span>
            </h2>
          </div>
          <Label name="/h2" class="q-pl-xl"></Label>
        </div>
        <div class="q-pt-sm">
          <Label name="p" class="q-pl-xl"></Label>
          <div style="padding-left: 5vw">
            <p style="font-family: 'fira-light'; font-size: calc(8px + 0.5vw); word-wrap: break-word; "
              class="text-white no-margin no-padding">
              <span>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </span>
            </p>
          </div>
          <Label name="/p" class="q-pl-xl"></Label>
        </div>
      </div>
      <div class="col-6 q-pa-lg">
        <Sphere></Sphere>
      </div>
    </div>
    <Label name="/section" class="q-pl-lg q-pt-md"></Label>
  </div>
</template>
<script>
import { ref, onMounted } from 'vue'
import Label from "src/components/Label.vue";
import Sphere from './Sphere.vue';
import Particles from './Particles.vue';
export default {
  setup() {

    onMounted(() => {
    })

    return {
    }
  },
  components: {
    Label,
    Sphere,
    Particles
  }
}
</script>
<style lang="scss"></style>
