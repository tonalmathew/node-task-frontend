<template>
  <div class="app">
    <Header />
    <div class="container mt-5">
      <h1 class="text-center">The easiest way to buy and sell stocks</h1>
      <p class="text-center">Stock analysis and screening tool for investors in India.</p>
      <div class="mt-5">
      <Search />
      </div>
    </div>

  </div>
</template>

<script>
import Search from "./components/Search.vue";
import Header from "./components/Header.vue"

export default {
  name: "App",
  components: {
    Search,
    Header,
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style>

</style>
