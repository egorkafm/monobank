import { createStore } from "vuex";
import { SEARCH } from "./modules/search";
import { USERS } from "./modules/users";

export const store = createStore({
  modules: {
    users: USERS,
    search: SEARCH,
  },
});
