<template>
  <v-app>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/overview">overview</router-link> |
    </div>
    <v-main>
          <router-view />
    </v-main>
    <v-bottom-navigation 
      v-model="value"
      absolute
      grow
      shift
      fixed
    >
    <v-btn @click="navigateTo('Home')">
      <span></span>

      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn @click="navigateTo('NewEntry')">
      <span></span>

      <v-icon>mdi-plus-circle-outline</v-icon>
    </v-btn>

    <v-btn @click="navigateTo('Overview')">
      <span></span>

      <v-icon>mdi-notebook</v-icon>
    </v-btn>
  </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  components: {
  },
  created () {
    this.$vuetify.theme.dark = true
  },
  data: () => ({
      active: true,
      value: 1
    }),
  methods: {
    navigateTo(aTo) {
      this.value = aTo;
      this.$router.push({ name: aTo });
    }
  }
}
</script>
