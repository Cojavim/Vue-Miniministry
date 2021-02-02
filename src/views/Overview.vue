<template>
  <v-container>
    <v-row>
      <v-col cols="12" v-for="(entry,idx) in entryList" :key="idx">
        <SingleEntry :entry="entry" @delete="deleteEntry" @edit="editEntry" />
      </v-col>
    </v-row>
    <v-row>
    </v-row>
  </v-container>
</template>

<script>
import SingleEntry from '../components/SingleEntry';

export default {
  components: {
    SingleEntry
  },
  computed: {
    entryList() {
      return this.$store.state.entryList;
    }
  },
  created() {
    this.$store.dispatch('getEntryList');
  },
  methods: {
    addEntry() {
      this.$router.push({ name: 'edit' });
    },
    async deleteEntry(aEntry) {
      console.log('delete', aEntry.id);
      await this.$store.dispatch('deleteEntry', aEntry);
      this.$store.dispatch('getEntryList');
    },
    editEntry(aEntry) {
      console.log('edit', aEntry.id);
      this.$router.push({ name: 'edit', params: {newEntry: aEntry} });
    }
  }
};
</script>

<style>

</style>