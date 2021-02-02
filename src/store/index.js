import Vue from 'vue'
import Vuex from 'vuex'
import idb from "../api/idb";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    entryList: [],
    online: true
  },
  mutations: {
  },
  actions: {
    async saveEntry(context, newEntry) {
      idb.saveEntry(newEntry);
    },
    async getEntryList(context) {
      context.state.entryList = [];
      let lEntryList = await idb.getEntries();

      lEntryList.forEach(a => {
        context.state.entryList.push(a);
      });
    },
    async clearAll(context) {
      await idb.clearAll();
      context.state.entryList = [];
    },
    async deleteEntry(context, aEntry) {
      await idb.deleteEntry(aEntry); 
    },
  },
  modules: {
  }
})
