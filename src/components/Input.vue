<template>
  <div>
    <input class="text-field__input" type="text" placeholder="Search" v-model="search"/>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Input",
  data () {
    return {
      search: '',
    }
  },
  watch: {
    search (value) {
      this.setSearch(value.toLowerCase())
    }
  },
  methods: {
    ...mapActions(['setSearch']),
  },
};
</script>

<style scoped>
.text-field__input {
  display: block;
  height: calc(1.25rem + 2px);
  min-width: 240px;
  padding: 0.375rem 0.75rem;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #ffffff;
  background-clip: padding-box;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.text-field__input::placeholder {
  color: #212529;
  opacity: 0.4;
}

.text-field__input:focus {
  color: #212529;
  background-color: #ffffff;
  border-color: #fdc4c4;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(254, 122, 122, 0.25);
}

.text-field__input:disabled,
.text-field__input[readonly] {
  background-color: #f5f5f5;
  opacity: 1;
}
</style>
