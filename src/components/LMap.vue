<template>
  <div id="mapContainer">
  </div>
</template>
<script>
import { ref, onMounted, onBeforeMount } from "vue";
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export default {
  props: {
    markers: {
      type: Array,
      required: false,
      default: () => []
    }
  },

  setup(props) {
    const map = ref(null)

    onMounted(() => {
      console.log(props.markers)
      createMapLayer()
    })

    onBeforeMount(() => {
      if (map.value) {
        map.value.remove()
      }
    })

    const createMapLayer = () => {
      map.value = L.map('mapContainer').setView([8.8875200, -64.2454400], 6)
      L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map.value)

      if (props.markers.length) {
        setMarkers()
      }
    }

    const setMarkers = () => {
      props.markers.map((marker) => {
        return L.marker([marker.latitude, marker.longitude]).addTo(map.value)
          .bindPopup(marker.text)
      })
    }

    return {
      map,
      createMapLayer,
      setMarkers
    }
  }
}
</script>
<style scoped>
#mapContainer {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  filter: brightness(100%);
}
</style>
