<template>
<div>Sum</div>
    <!-- <InputField/> -->
</template>

<script>
// @ is an alias to /src
// import InputField from '@/components/InputField.vue'

export default {
  name: 'Home',
  components: {
    // InputField
  },
  computed: {
    entryList() {
      return this.$store.state.entryList;
    }
  },
  created() {
    this.$store.dispatch('getEntryList');
  },
  mounted() 
  {
    this.shownMonth = (new Date()).getMonth();
    this.shownYear = (new Date()).getFullYear();

    console.log(this.entryList);
    this.rawDataList = this.entryList.filter(a => a.month === this.shownMonth);
    
    console.log("Data found", this.rawDataList);
  },
  data: () => ({
    sumData: {},
    rawDataList: [],
    shownMonth: Number,
    shownYear: Number,
  }),
  methods: {}
}
</script>
