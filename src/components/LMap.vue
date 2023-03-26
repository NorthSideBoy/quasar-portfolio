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
  iconUrl: require('leaflet/dist/images/map-marker.svg'),
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
      createMapLayer()
    })

    onBeforeMount(() => {
      console.log(map.value)
      // if (map.value) {
      //   map.value.remove()
      // }
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
<style>
/* container */

#mapContainer {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  filter: saturate(200%) contrast(103%);
}

/* popup message */

.leaflet-container {
  font-family: "fira-bold";
  font-size: 12px;
  font-size: 0.75rem;
  line-height: 1.5;
}

.leaflet-popup-content-wrapper {
  padding: 1px;
  text-align: left;
  border-radius: 5px;
}

.leaflet-popup-content-wrapper,
.leaflet-popup-tip {
  background: #010409;
  color: #58A6FF;
  box-shadow: 0 3px 14px rgba(0, 0, 0, 0.4);
}

/* zoom panel */
.leaflet-bar a {
  background-color: #010409;
  /* border-bottom: 1px solid #ccc; */
  width: 26px;
  height: 26px;
  line-height: 26px;
  display: block;
  text-align: center;
  text-decoration: none;
  color: #58A6FF;
}

.leaflet-bar a:hover,
.leaflet-bar a:focus {
  background-color: #010409;
}

.leaflet-touch .leaflet-control-layers,
.leaflet-touch .leaflet-bar {
  border: 1px solid #58A6FF;
  background-clip: padding-box;
  border-radius: 5px;
}

.leaflet-touch .leaflet-control-zoom-in,
.leaflet-touch .leaflet-control-zoom-out {
  font-size: 20px;
}
</style>
