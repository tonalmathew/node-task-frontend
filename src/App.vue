<template>
  <div class="app">
    <h1>My Note</h1>
    <AddNote v-on:add-note-event="addNoteMethod"></AddNote>
    <Notes :notes="notes" />
  </div>
</template>

<script>
import Notes from "./components/Notes.vue";
import AddNote from "./components/AddNote.vue";

export default {
  name: "App",
  components: {
    Notes,
    AddNote,
  },
  data() {
    return {
      notes: [],
    };
  },
  mounted() {
    console.log("App Mounted");
    if (localStorage.getItem("notes"))
      this.notes = JSON.parse(localStorage.getItem("notes"));
  },
  methods: {
    addNoteMethod(newNote) {
      this.notes = [...this.notes, newNote];
    },
  },
  watch: {
    notes: {
      handler() {
        console.log("Notes array changed!");
        localStorage.setItem("notes", JSON.stringify(this.notes));
      },
      deep: true,
    },
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
