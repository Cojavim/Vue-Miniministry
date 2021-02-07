<template>
  <div>
    <!-- <button v-on:click="decrement">-</button>
    {{ count }}
    <button v-on:click="increment">+</button> -->
    <table>
      <th colspan="4">Zpráva za {{ shownMonth + 1 }} {{ shownYear }}</th>
      <tr>
        <td rowspan="5"><v-icon>mdi-menu-left-outline</v-icon></td>
        <td>Čas:</td>
        <td>Hodiny:{{ totalHous }} Minuty:{{ totalMinutes }}</td>
        <td rowspan="5"><v-icon>mdi-menu-right-outline</v-icon></td>
      </tr>
      <tr>
        <td>Publikace:</td>
        <td>{{ count }}</td>
      </tr>
      <tr>
        <td>Opětovné návštěvy:</td>
        <td>{{ totalVisits }}</td>
      </tr>
      <tr>
        <td>Videa:</td>
        <td>{{ totalVideos }}</td>
      </tr>
      <tr>
        <td>Studia:</td>
        <td>{{ totalStudies }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

// Define the component in class-style
@Component
export default class MonthlyReport extends Vue {
  // Class properties will be component data
  count = 0;
  shownMonth = (new Date()).getMonth();
  shownYear = (new Date()).getFullYear();
  today = new Date();
  totalMinutes = 0;
  totalHous = 0;
  totalVisits = 0;
  totalVideos = 0;
  totalStudies = 0;
  totalPublications = 0;
  // dataEntryList

  get entryList() {
    return this.$store.state.entryList;
  }
  
  created() {
    this.shownMonth = (new Date()).getMonth();
    this.shownYear = (new Date()).getFullYear();
    // this.$store.dispatch('getEntryList').finally(this.getMonthlyReport());
  }
  mounted() {
    console.log(this.entryList);
    this.getMonthlyReport();
  }
  // Methods will be component methods
  increment() {
    console.log('entryList', this.entryList);

    this.getMonthlyReport();

    this.count++
  }

  getMonthlyReport() {
    console.log(this.entryList);
    let sortedData = this.entryList.filter(
      a => a.month == this.shownMonth + 1 && a.year == this.shownYear
    );
    sortedData.forEach(a => {
      this.totalMinutes += a.minutesServed;
      this.totalHous += a.hoursServed;
      this.totalVisits += a.returnVisits;
      this.totalVideos += a.videosPlayed;
      this.totalStudies += a.studiesConducted;
      this.totalPublications += a.publications;
    });

    let lHoursFull = this.totalMinutes / 60;
    let lHoursRounded = Math.floor(this.totalMinutes / 60);

    let lMinutes = (lHoursFull - lHoursRounded) * 60;
    let lMinutesRounded = Math.round(lMinutes);

    this.totalHous += lHoursRounded;
    this.totalMinutes = lMinutesRounded;

    console.log('Hours:', this.totalHous, 'Minutes:', this.totalMinutes, this.totalVisits, this.totalVideos, this.totalStudies, this.totalPublications);
  }

  decrement() {
    this.count--
  }
}
</script>

<style scoped>
  table {
    width: 100%;
  }
</style>