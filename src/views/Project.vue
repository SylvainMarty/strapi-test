<template>
  <div class="projects">
    <article v-for="(p, idx) in projects" :key="p.name">
      <hr v-if="idx > 0">
      <div class="thumbnail" :style="{'background-image': 'url('+getImageUrl(p, 'thumbnail')+')'}"></div>
      <div class="content">
        <h1>{{ p.Name }}</h1>
        <div v-html="md(p.Description)"></div>
        <p><a :href="p.GithubLink" target="_blank">GitHub</a></p>
      </div>
    </article>
  </div>
</template>

<script>
import axios from 'axios'
import marked from 'marked'

export default {
  name: 'Project',
  data: function () {
    return {
      projects: []
    }
  },
  created: function () {
    this.fetchProjects()
  },
  methods: {
    md: marked,

    async fetchProjects () {
      const { data } = await axios.get(`${process.env.VUE_APP_STRAPI_URL}/projects`)
      console.log(data)
      this.projects = data
    },
    getImageUrl (project, size = 'large') {
      const coverImage = project.CoverImage[0]
      if (!coverImage) {
        return ''
      }
      const url = coverImage.formats ? coverImage.formats[size].url : coverImage.url
      return `${process.env.VUE_APP_STRAPI_URL}${url}`
    }
  }
}
</script>

<style lang="scss">
.projects {
  article {
    text-align: left;
    .content {
      padding: 0 120px;
    }
    hr {
      margin: 20px 0;
    }
  }
  .cover {
    height: 400px;
    background-size: cover;
    background-position: center;
  }
  .thumbnail {
    float: left;
    width: 100px;
    height: 100px;
    background-size: cover;
    background-position: center;
    border-radius: 100%;
  }
}
</style>
