<template>
  <div>
    <form @submit.prevent="addNote">
            <input type="text" v-model="title" name="title" placeholder="Add Note Title...">
            <textarea type="text" v-model="body" name="body" placeholder="Add Note..."></textarea>
            <input type="submit" value="Submit" class="btn">
        </form>
  </div>
</template>

<script>
import uuid from 'uuid/dist/v4';
export default {
  name: "AddNote",
  data() {
    return{
      title: "",
      body: "",
    }
  },
  methods: {
    addNote() {
      // e.preventDefault();
      const newNote = {
        title: this.title,
        body: this.body,
        id: uuid()
      }
      console.log(newNote);
      this.$emit('add-note-event', newNote);
      this.title="";
      this.body="";
    }
  }
}
</script>