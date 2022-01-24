import { getData } from "../../api/api";

const URL = "https://api.github.com/users";

export const USERS = {
  state: () => ({
    users: [],
    user: {},
    isLoading: false,
  }),
  mutations: {
    setUsersData(state, data) {
      state[data.prop] = data.value;
    },
  },
  actions: {
    async fetchAllUsers({ commit }) {
      commit("setUsersData", {
        prop: "isLoading",
        value: true,
      });
      return await getData(URL)
        .then((response) => {
          commit("setUsersData", {
            prop: "users",
            value: response,
          });
        })
        .catch((error) => {
          console.log("Looks like there was a problem: \n", error);
        })
        .finally(() =>
          commit("setUsersData", {
            prop: "isLoading",
            value: false,
          })
        );
    },

    async fetchUser({ commit }, id) {
      commit("setUsersData", {
        prop: "isLoading",
        value: true,
      });
      return await getData(`${URL}/${id}`)
        .then((user) => {
          commit("setUsersData", {
            prop: "user",
            value: user,
          });
        })
        .catch((error) => {
          console.log("Looks like there was a problem: \n", error);
        })
        .finally(() =>
          commit("setUsersData", {
            prop: "isLoading",
            value: false,
          })
        );
    },
  },
};
