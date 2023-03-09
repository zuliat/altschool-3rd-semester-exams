import { createStore } from "vuex";

// Using vuex store in vue 3 for state management
const store = createStore({
  state: {
    count: 0,
  },
  getters: {
    counter(state) {
      return state.count;
    },
  },

  actions: {
    increment({ commit }) {
      commit("increment");
    },
    decrement({ commit }) {
      commit("decrement");
    },
    reset({ commit }) {
      commit("reset");
    },
  },
  mutations: {
    increment(state) {
      state.count++;
    },

    decrement(state) {
      state.count--;
    },

    reset(state) {
      state.count = 0;
    },
  },
});

export default store;
