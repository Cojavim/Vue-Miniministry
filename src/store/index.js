import Vue from 'vue'
import Vuex from 'vuex'
import idb from "../api/idb";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    EntryList: [],
    online: true
  },
  mutations: {
  },
  actions: {
    async saveEntry(context, newEntry) {
      idb.saveEntry(newEntry);
    }
  },
  modules: {
  }
})
