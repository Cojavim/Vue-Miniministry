<template>
        <form 
            id="entryFrom"
            @submit="submitEntry"
        >
        <v-expansion-panels focusable>
            <v-expansion-panel>
            <v-expansion-panel-header>Date</v-expansion-panel-header>
            <v-expansion-panel-content>
                <v-date-picker 
                v-model="newEntry.date"
                locale="cs"
            ></v-date-picker>
            </v-expansion-panel-content>
            </v-expansion-panel>
            <!-- <v-expansion-panel>
            <v-expansion-panel-header>Time</v-expansion-panel-header>
            <v-expansion-panel-content>
                <v-time-picker
                v-model="newEntry.timeServed"
                format="24hr"
            ></v-time-picker>
            </v-expansion-panel-content>
            </v-expansion-panel> -->
        </v-expansion-panels>

        <v-row justify="center">
            <span>Čas: </span>
            <input class="whiteText" v-model="newEntry.timeServed" id="appt" name="appt" type="time" required>
        </v-row>
        <v-row justify="space-around">
            <span>Publikace :</span>
            <input class="whiteText" v-model.number="newEntry.publications" type="number" placeholder="0">
        </v-row>
        <v-divider></v-divider>
        <v-row justify="space-around">
            <span>Opetovky :</span>
            <input class="whiteText" v-model.number="newEntry.returnVisits" type="number" placeholder="0">
        </v-row>
        <v-divider></v-divider>
        <v-row justify="space-around">
            <span>Videa :</span>
            <input class="whiteText" v-model.number="newEntry.videosPlayed" type="number" placeholder="0">
        </v-row>
        <v-divider></v-divider>
        <v-row justify="space-around">
            <span>Studia :</span>
            <input class="whiteText" v-model.number="newEntry.studiesConducted" type="number" placeholder="0">
        </v-row>
        <v-divider></v-divider>
        <v-row justify="space-around">
            <textarea class="whiteText" v-model="newEntry.note" placeholder="Poznamka"></textarea>
        </v-row>
        <input
        type="submit"
        value="Uložit"
        >
        </form>
</template>

<script>
export default {
    name: 'InputField',
    data: () => ({
        newEntry: {
            date: new Date().toISOString().substr(0, 10),
            timeServed: 0,
            publications: 0,
            returnVisits: 0,
            videosPlayed: 0,
            studiesConducted: 0,
            note: '',
            hoursServed: 0,
            minutesServed: 0,
            year: 0,
            month: 0,
            day: 0,
        }
    }),
    methods:{
        submitEntry: function (e) {
        this.errors = [];

        console.log('SUBMIT!', this.newEntry)
        this.$store.dispatch('saveEntry', this.newEntry);

        this.parseDateTime();

        e.preventDefault();
        },

        parseDateTime() {
            var timeArr = this.newEntry.timeServed.split(":");
            var dateArr = this.newEntry.date.split("-");

            this.newEntry.hoursServed = parseInt(timeArr[0], 10);
            this.newEntry.minutesServed = parseInt(timeArr[1], 10);

            this.newEntry.year = parseInt(dateArr[0], 10);
            this.newEntry.month = parseInt(dateArr[1], 10);
            this.newEntry.day = parseInt(dateArr[2], 10);
            console.log(timeArr, dateArr);
        }
    }

}
</script>

<style>
    .whiteText{
        color: white;
    }
</style>