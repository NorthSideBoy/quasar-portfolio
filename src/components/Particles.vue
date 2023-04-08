<template>
  <div :id="id" class="particles" style="position: absolute; height: 100%; width: 100%;"></div>
</template>
<script>
import { ref, onMounted, watch } from 'vue'
import 'particles.js'
import uniqid from 'uniqid';

export default {
  props: {
    options: {
      type: Object,
      required: true
    }
  },
  setup(props, { emit }) {

    const id = ref(uniqid())

    const options = ref()

    const initParticles = () => {
      window.particlesJS(id.value, {
        "particles": {
          "number": {
            "value": props.options.general.quantity,
            "density": {
              "enable": true,
              "value_area": 700
            }
          },
          "color": {
            "value": props.options.particles.color
          },
          "shape": {
            "type": props.options.particles.type,
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
          },
          "opacity": {
            "value": props.options.particles.opacity,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": props.options.particles.width,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": props.options.lines.distance,
            "color": props.options.lines.color,
            "opacity": props.options.lines.opacity,
            "width": props.options.lines.width
          },
          "move": {
            "enable": true,
            "speed": 3,
            "direction": props.options.general.direction,
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": props.options.general.hover
            },
            "onclick": {
              "enable": true,
              "mode": props.options.general.click
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 140,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      })
    }

    onMounted(() => {
      initParticles()
    })

    watch(props.options, async (newValue) => {
      initParticles()
    })
    return {
      id,
      options,
      initParticles
    }
  }
}
</script>
<style lang="scss"></style>
