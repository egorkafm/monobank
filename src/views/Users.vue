<template>
  <div>
    <ul class="user-list" v-if="!isLoading">
      <li
          class="user-item"
          v-for="{ id, login, avatar_url } of preparedUsers"
          v-bind:key="id"
      >
        <button
            class="user-button"
            type="button"
            @click="() => handlerSelected({ id, login, avatar_url })"
        >
          <template v-if="selectedUsers.some((el) => el.id === id)">&starf;</template>
          <template v-else>&star;</template>
        </button>
        <router-link class="user-link" v-bind:to="login">
          <strong>{{ login }}</strong>
          <img class="avatar" v-bind:src="avatar_url" v-bind:alt="login" />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Users",
  components: {
  },
  data() {
    return {
      selectedUsers: [],
      preparedUsers: [],
    };
  },
  computed: {
    ...mapState({
      search: (state) => state.search.search,
      users: (state) => state.users.users,
      isLoading: (state) => state.users.isLoading,
    }),
  },
  watch: {
    search (value) {
      const searchedList = value !== ''
          ? [...this.preparedUsers]
          .filter(user => user.id.toString().includes(value) || user.login.includes(value))
          : this.users

      this.preparedUsers = searchedList},
  },
  methods: {
    ...mapActions(['fetchAllUsers', 'setSearch']),

    handlerSelected(user) {
      this.selectedUsers.some((el) => el.id === user.id)
        ? (this.selectedUsers = this.selectedUsers.filter(
            (el) => el.id !== user.id
          ))
        : (this.selectedUsers = [...this.selectedUsers, user]);

      localStorage.setItem("selected", JSON.stringify(this.selectedUsers));
    },
  },
  async mounted () {
    await this.fetchAllUsers();
    this.preparedUsers = this.users;
    this.selectedUsers = JSON.parse(localStorage.getItem("selected")) || [];
  },
};
</script>

<style>
.user-list {
  display: flex;
  align-items: center;
  align-content: center;
  align-self: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
.user-item {
  border-radius: 8px;
  padding: 10px 10px;
  display: flex;

  justify-content: space-between;
  align-items: center;
  flex-basis: calc((100% - 160px) / 2);
  margin-left: 60px;
  list-style: none;
  transition: background-color 0.3s ease;
}
.user-item:hover {
  background-color: #fdc4c4;
}
.user-button {
  border: none;
  background: transparent;
  transition: color 0.3s ease;
  font-size: 20px;
  flex-basis: 60px;
  color: #fe7a7a;
}
.user-button:hover {
  color: rgb(255, 62, 62);
  cursor: pointer;
}
.avatar {
  flex-basis: 50px;
  margin: 4px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}
</style>
