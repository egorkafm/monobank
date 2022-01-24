<template>
  <div>
    <div>
      <img class="avatar" v-bind:src="user.avatar_url" v-bind:alt="login" />
      <h2><strong>Name:</strong> {{ user.name }}</h2>
      <div><strong>Login: </strong>{{ userName }}</div>
      <div>
        <strong>URL: </strong>
        <a :href="user.html_url" target="_blank">{{ user.html_url }}</a>
      </div>
      <div><strong>Followers:</strong> {{ user.followers }}</div>
      <div><strong>Following:</strong> {{ user.following }}</div>
      <!-- <div><strong>All information: </strong> {{ user }}</div> -->
    </div>
    <button class="clear-button" @click="handlerSelected()">
      <template v-if="!selectedUsers.find(el => el.id === user.id)">Add to selected</template>
      <template v-else>Remove from selected</template>
    </button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'User',
  components: {
  },
  data () {
    return {
      selectedUsers: [],
      userName: this.$route.params.id,
      html_url: this.$route.params.html_url,
    }
  },
  computed: {
    ...mapState({
      user: state => state.users.user,
      isLoading: state => state.users.isLoading,
    })
  },
  async mounted() {
    await this.fetchUser(this.userName)
    this.selectedUsers = JSON.parse(localStorage.getItem('selected')) || []
  },
  methods: {
    ...mapActions([ 'fetchUser' ]),
    handlerSelected () {
      this.selectedUsers.some(el=> el.id === this.user.id)
          ? this.selectedUsers = this.selectedUsers.filter(el => el.id !== this.user.id)
          : this.selectedUsers = [ ...this.selectedUsers, this.user ]

      localStorage.setItem('selected', JSON.stringify(this.selectedUsers))
    },
  },
};
</script>
<style scoped>
.user-list {
  display: flex;
  align-items: center;
  align-content: center;
  align-self: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  overflow: hidden;
}
.user-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Roboto Light", sans-serif;
  font-size: 16px;
  color: #212529;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.user-link.router-link-active {
  color: #fe7a7a;
}
.user-item {
  border-radius: 8px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-basis: 27%;
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
  color: rgb(255, 62, 62)
}
.clear-button {
  margin-top: 24px;
  display: block;
  /*border: none;*/
  background: #fe7a7a;
  border: 2px solid #fe7a7a;
  border-radius: 16px;
  transition: color 0.3s ease;
  font-size: 20px;
  flex-basis: 60px;
  color: #ffffff;
}
.clear-button:hover {
  color: #fe7a7a;
  background: #ffffff;
  border: 2px solid #fe7a7a;
  cursor: pointer;
}
.avatar {
  flex-basis: 50px;
  margin: 4px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
}
a:link {
  color: #fe7a7a;
}
a:visited {
  color: #ff6767;
}
a:hover {
  color: rgb(255, 62, 62);
}
a:active {
  color: rgb(252, 27, 27);
}
</style>
