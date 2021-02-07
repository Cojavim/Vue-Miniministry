<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
    <v-bottom-navigation 
      v-model="value"
      absolute
      grow
      shift
      fixed
      app
    >
    <v-btn class="tallBtn" @click="navigateTo('MothlyReport')">
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn class="tallBtn" @click="navigateTo('NewEntry')">
      <v-icon>mdi-plus-circle-outline</v-icon>
    </v-btn>
    <v-btn class="tallBtn" @click="navigateTo('Overview')">
      <v-icon>mdi-notebook</v-icon>
    </v-btn>
    <v-btn class="tallBtn" @click="navigateTo('Dummy')">
      <v-icon>mdi-bug</v-icon>
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
<style scoped>
  .tallBtn {
    height: auto!important;
  }
</style>