<template>
  <div>
    <v-btn @click="refreshIdbDataStruct()">
      <v-icon>mdi-settings</v-icon>
      <span>Renew Data Structure</span>
    </v-btn>
    <v-btn @click="clearAll()">
      <v-icon>mdi-window-close</v-icon>
      <span>Clear All</span>
    </v-btn>
  </div>
</template>

<script>
export default {
    name: 'Dummy',
    data: () => ({}),
    computed: {
    entryList() {
      return this.$store.state.entryList;
    }
  },
  created() {
    this.$store.dispatch('getEntryList');
  },
    methods:{
        refreshIdbDataStruct() {
            this.entryList.forEach(lEntry => {
              this.parseDateTime(lEntry);
              this.$store.dispatch('saveEntry', lEntry);
            });
        },
        parseDateTime(aEntry) {
            var timeArr = aEntry.timeServed.split(":");
            var dateArr = aEntry.date.split("-");

            aEntry.hoursServed = parseInt(timeArr[0], 10);
            aEntry.minutesServed = parseInt(timeArr[1], 10);

            aEntry.year = parseInt(dateArr[0], 10);
            aEntry.month = parseInt(dateArr[1], 10);
            aEntry.day = parseInt(dateArr[2], 10);
        }
    }
}
</script>

<style>

</style>