<template>
  <div>
    <Layout>
      <router-view/>
    </Layout>
  </div>
</template>

<script>
import Layout from "./components/Layout";

export default {
  name: 'App',
  components: { Layout }
}
</script>

<style>
#app {
  max-width: 1224px;
  margin: 0 auto;
}
body {
  padding: 0;
  margin: 0;
}
::-webkit-scrollbar {
  width: 8px;
  background-color: #f9f9fd;
}

::-webkit-scrollbar-thumb {
  border-radius: 16px;
  background-color: #fdc4c4;
}

:-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.2);
  border-radius: 16px;
  background-color: #f9f9fd;
}
</style>
