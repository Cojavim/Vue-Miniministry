<template>
    <div class="input-container">
        <v-expansion-panels focusable>
            <v-expansion-panel>
            <v-expansion-panel-header>Date</v-expansion-panel-header>
            <v-expansion-panel-content>
                <v-date-picker 
                v-model="picker"
                locale="cs"
            ></v-date-picker>
            </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
            <v-expansion-panel-header>Time</v-expansion-panel-header>
            <v-expansion-panel-content>
                <v-time-picker
                v-model="e7"
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
            <input v-model.number="pub" type="number" placeholder="0">
        </v-row>
        <v-divider></v-divider>
        <v-row justify="space-around">
            <span>Opetovky :</span>
            <input v-model.number="returns" type="number" placeholder="0">
        </v-row>
        <v-divider></v-divider>
        <v-row justify="space-around">
            <span>Videa :</span>
            <input v-model.number="video" type="number" placeholder="0">
        </v-row>
        <v-divider></v-divider>
        <v-row justify="space-around">
            <span>Studia :</span>
            <input v-model.number="study" type="number" placeholder="0">
        </v-row>
        <v-divider></v-divider>
        <v-row justify="space-around">
            <textarea v-model="note" placeholder="Poznamka"></textarea>
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'InputField',
    data: () => ({
    //
    }),
}
</script>

<style>

</style>