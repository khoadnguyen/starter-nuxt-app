import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    page: 'index'
  },
  mutations: {
    updatePage(state, pageName) {
      state.page = pageName
    }
  },
  actions: {

  },
});
