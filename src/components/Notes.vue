<template>
  <div>
        <!-- <h1>My Notes</h1> -->
        <div :key="note.id" v-for="note in notes">
            <NoteItem :note="note"></NoteItem>
        </div>
        
    </div>
</template>
<script>
import NoteItem from './NoteItem.vue';
export default {
  name: 'Notes',
  props:["notes"],
  components: {
            NoteItem
        }
  
}
</script>
<style scoped>

</style>