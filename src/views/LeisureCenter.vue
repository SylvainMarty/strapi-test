<template>
  <div class="leisure-centers">
    <article v-for="center in leisureCenters" :key="center.name">
      <h1>{{ center.Name }}</h1>
      <div v-html="md(center.Description)"></div>
    </article>
  </div>
</template>

<script>
import axios from 'axios'
import marked from 'marked'

export default {
  name: 'LeisureCenter',
  data: function () {
    return {
      leisureCenters: []
    }
  },
  created: function () {
    this.fetchLeisureCenters()
  },
  methods: {
    md: marked,

    async fetchLeisureCenters () {
      const { data } = await axios.get(`${process.env.VUE_APP_STRAPI_URL}/leisure-centers`)
      console.log(data)
      this.leisureCenters = data
    }
  }
}
</script>
