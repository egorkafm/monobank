
export const SEARCH = {
  state: () => ({
    search: '',
  }),
  mutations: {
    setUsersData(state, data) {
      state[data.prop] = data.value;
    },
  },

  actions: {
    setSearch({ commit }, value) {
          commit("setUsersData", {
            prop: "search",
            value,
          });
    },
  },
};
