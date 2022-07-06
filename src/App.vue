<template>
  <Notes :notes="notes" />
</template>

<script>
import Notes from "./components/Notes.vue";

export default {
  name: "App",
  components: {
    Notes,
  },
  data() {
    return {
      notes: [
        {
          id: 0,
          title: "First Title",
          body: "first body",
        },
        {
          id: 1,
          title: "Second title",
          body: "second body",
        },
        {
          id: 2,
          title: "Third title",
          body: "third body",
        },
        {
          id: 3,
          title: "Fourth title",
          body: "fourth body",
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}
</style>
