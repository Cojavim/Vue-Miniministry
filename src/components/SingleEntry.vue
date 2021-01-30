<template>

  <v-card>
    <v-card-title>
      {{ entry.date }}
    </v-card-title>
    <v-card-text>
      <p>
        {{ entry.note }}
      </p>
      <p>
        Hodiny: {{ entry.timeServed }}, Publikace: {{ entry.publications }}, ON: {{ entry.returnVisits }}, 
        Videa: {{ entry.videosPlayed }}, Studia:{{ entry.studiesConducted }}
      </p>
    </v-card-text>
    <v-card-actions>
      <v-btn color="red" @click="$emit('delete',entry)">Delete</v-btn>
      <v-btn @click="$emit('edit',entry)">Edit</v-btn>
    </v-card-actions>
  </v-card>

</template>

<script>
export default {
  props: ['entry'], 
  data: () => ({

  }),
  created() {
  },
  methods: {
  }
};
</script>
