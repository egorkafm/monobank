<template>
  <div class="header">
    <div>
      <a href="https://www.monobank.ua/" target="_blank">
        <img class="logo" alt="Monologo" src="@/assets/monologo.png">
      </a>
      <img class="logo" alt="Monocat" src="@/assets/monocat.png">
    </div>
    <div>
      <Input />
    </div>
  </div>
</template>

<script>
    import Input from './Input';
    export default {
        name: 'Header',
        components: {
          Input,
        },
    };
</script>

<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    height: 100px;
  }
</style>
