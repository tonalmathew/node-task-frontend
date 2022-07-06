<template>
    <div class="card">
        <p>{{note.title}}</p>
        <p>{{note.body}}</p>
    </div>
</template>

<script>
    export default {
        name: "NoteItem",
        props : ["note"]
    }
</script>