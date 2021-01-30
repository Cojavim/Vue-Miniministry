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
            <v-expansion-panel>
            <v-expansion-panel-header>Time</v-expansion-panel-header>
            <v-expansion-panel-content>
                <v-time-picker
                v-model="newEntry.timeServed"
                format="24hr"
            ></v-time-picker>
            </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
        <v-row justify="center">
            
        </v-row>
        <v-row justify="space-around">
            
        </v-row>
        <v-row justify="space-around">
            <span>Publikace :</span>
            <input v-model.number="newEntry.publications" type="number" placeholder="0">
        </v-row>
        <v-divider></v-divider>
        <v-row justify="space-around">
            <span>Opetovky :</span>
            <input v-model.number="newEntry.returnVisits" type="number" placeholder="0">
        </v-row>
        <v-divider></v-divider>
        <v-row justify="space-around">
            <span>Videa :</span>
            <input v-model.number="newEntry.videosPlayed" type="number" placeholder="0">
        </v-row>
        <v-divider></v-divider>
        <v-row justify="space-around">
            <span>Studia :</span>
            <input v-model.number="newEntry.studiesConducted" type="number" placeholder="0">
        </v-row>
        <v-divider></v-divider>
        <v-row justify="space-around">
            <textarea v-model="newEntry.note" placeholder="Poznamka"></textarea>
        </v-row>
        <input
        type="submit"
        value="Submit"
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
        }
    }),
    methods:{
        submitEntry: function (e) {
        this.errors = [];

        console.log('SUBMIT!', this.newEntry)
        
        e.preventDefault();
        }
    }

}
</script>

<style>

</style>