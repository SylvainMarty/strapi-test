<template>
  <div class="locations">
    <div id="map" style='width: 100%; height: 500px;'></div>
    <ul>
      <li v-for="l in locations" :key="l.Name">{{ l.Name }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import 'mapbox-gl/dist/mapbox-gl.css'
import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_KEY

export default {
  name: 'Location',
  data: function () {
    return {
      locations: [],
      map: null
    }
  },
  created: function () {
    this.fetchLocations()
  },
  methods: {
    async fetchLocations () {
      const { data } = await axios.get(`${process.env.VUE_APP_STRAPI_URL}/locations`)
      this.locations = data
      this.createMap()
    },
    createMap () {
      this.map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [0.9658186, 30.6007512], // starting position [lng, lat]
        zoom: 2 // starting zoom
      })
      this.locations.forEach(location => {
        new mapboxgl.Marker()
          .setLngLat([location.longitude, location.latitude])
          .addTo(this.map)
      })
    }
  }
}
</script>

<style lang="scss">
.locations {
  article {
    text-align: left;
    .content {
      padding: 0 120px;
    }
    hr {
      margin: 20px 0;
    }
  }
}
</style>
