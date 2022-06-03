<template>
    <div>
        <ul>
            <li v-for="(note, index) in notes" :key="index">{{ note }}</li>
        </ul>
    </div>
    <input type="text" v-model="title" @keypress.enter="save">
</template>

<script>
import { ref } from "vue";

export default {
    setup() {
        const notes = ref([]);

        const title = ref("")

        function save () {
            notes.value.push(title.value);

        }

        return {
            notes,
            title,
            save,
        }
    }
}
</script>

<style>
    
</style>