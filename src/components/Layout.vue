<template>
  <div>
    <Header/>
    <main class="main">
      <Sidebar/>
      <div class="content">
        <Loader v-if="isLoading"/>
        <slot/>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Loader from "./Loader";
import { mapState } from "vuex";

export default {
  name: "Layout",
  components: { Header, Sidebar, Footer, Loader },
  computed: {
    ...mapState({
      isLoading: state => state.users.isLoading,
    })
  },
}
</script>

<style scoped>
.main {
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
}
.content {
  position: relative;
  flex-basis: calc(100% - 300px);
}
</style>
