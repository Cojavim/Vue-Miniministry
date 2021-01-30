<template>
  <v-app>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/overview">overview</router-link> |
    </div>
    <v-main>
          <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  components: {
  },
  created () {
    this.$vuetify.theme.dark = true
  }
}
</script>
