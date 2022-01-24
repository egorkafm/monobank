<template>
  <div>
    <button
        className="clear-button"
        type="button"
        @click="() => clearSelectedUsers()"
    >
      Clear all selected users &#9746;
    </button>
    <ul className="user-list" v-if="!isLoading">
      <li
        className="user-item"
        v-for="{ id, login, avatar_url } of preparedUsers"
        v-bind:key="id"
      >
        <button
          className="user-button"
          type="button"
          @click="() => removeFromSelected(id)"
        >
          &#215;
        </button>
        <router-link className="user-link" v-bind:to="login">
          <v-link><strong>{{ login }}</strong></v-link>
          <img className="avatar" v-bind:src="avatar_url" v-bind:alt="login" />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Users",
  data() {
    return {
      selectedUsers: [],
      preparedUsers: [],
    };
  },
  computed: {
    ...mapState({
      search: (state) => state.search.search,
      user: state => state.users.user,
      isLoading: state => state.users.isLoading,
    })
  },
  watch: {
    search (value) {
      const searchedList = value !== ''
          ? [...this.preparedUsers]
              .filter(user => user.id.toString().includes(value) || user.login.includes(value))
          : this.selectedUsers

      this.preparedUsers = searchedList},
  },
  methods: {
    ...mapActions(['setSearch']),
    removeFromSelected(id) {
      this.preparedUsers = this.preparedUsers.filter((el) => el.id !== id);

      localStorage.setItem("selected", JSON.stringify(this.preparedUsers));
    },
    clearSelectedUsers() {
      localStorage.clear();
      this.updateStateFromLocalStorage();
    },
    updateStateFromLocalStorage() {
      this.selectedUsers = JSON.parse(localStorage.getItem("selected")) || [];
      this.preparedUsers = JSON.parse(localStorage.getItem("selected")) || [];
    },
  },
  mounted() {
    this.updateStateFromLocalStorage();
  },
};
</script>

<style scoped>
.clear-button {
  display: block;
  border: none;
  background: transparent;
  transition: color 0.3s ease;
  font-size: 20px;
  color: #000000;
  margin-left: auto;
  margin-bottom: 16px;
}
.clear-button:hover {
  color: #fe7a7a;
  cursor: pointer;
}
</style>
