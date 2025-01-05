<template>
    <v-icon v-if="viewIcon" icon="mdi-eye" class="icon"></v-icon>
    <v-icon v-if="editIcon" icon="mdi-pencil" class="icon"></v-icon>
    <v-icon v-if="deleteIcon" icon="mdi-delete" class="icon"></v-icon>

</template>
<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps({
    viewIcon: Boolean,
    deleteIcon: Boolean,
    editIcon: Boolean,
});
</script>