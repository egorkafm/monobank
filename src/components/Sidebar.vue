<template>
  <div class="nav">
    <router-link class="user-link" to="/"><strong>Users</strong></router-link>
    <router-link class="user-link" to="/selected-users"><strong>Selected Users</strong></router-link>
  </div>
</template>

<script>
export default {
  name: "Sidebar"
}
</script>

<style>
.nav {
  flex-basis: 300px;
  margin-top: 24px;
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
</style>
