<template>
  <div style="position: relative" class="q-pt-md">
    <ParticlesBlue
      style="position: absolute; bottom: 0; height: 100vh; width: 80vw"
    ></ParticlesBlue>
    <div style="font-family: 'fira-medium'" class="q-pl-lg">
      <span style="color: #a5d6f0"> &lt;section&gt; </span>
    </div>

    <div class="q-pt-sm">
      <div style="font-family: 'fira-medium'" class="q-pl-xl">
        <span style="color: #a5d6f0"> &lt;h2&gt; </span>
      </div>
      <div style="padding-left: 5vw">
        <h2
          style="font-family: 'fira-bold'; font-size: calc(30px + 3vw)"
          class="text-white no-margin no-padding;"
        >
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
          <p
            style="
              font-family: 'fira-medium';
              font-size: calc(8px + 0.8vw);
              word-wrap: break-word;
            "
            class="text-white no-margin no-padding"
          >
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
    </div>

    <div style="font-family: 'fira-medium'" class="q-pl-lg">
      <span style="color: #a5d6f0"> &lt;/section&gt; </span>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import ParticlesBlue from "src/components/ParticlesBlue.vue";
export default {
  setup() {
    return {};
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
