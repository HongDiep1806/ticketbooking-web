<template>
    <v-table class="table-config">
        <!-- Table Header -->
        <thead>
            <tr>
                <!-- Render the table headers -->
                <th v-for="label in labels" :key="label.title" class="text-left">
                    {{ label.title }}
                </th>
            </tr>
        </thead>

        <!-- Table Body -->
        <tbody>
            <tr v-for="(row, rowIndex) in data" :key="rowIndex">
                <!-- Loop over each row's data -->
                <td v-for="(value, colIndex) in row" :key="colIndex" class="text-left">
                    <span 
                        v-if="labels[colIndex].highlight && labels[colIndex].keyGreen === value" 
                        class="green"
                    >
                        {{ value }}
                    </span>
                    <span 
                        v-else-if="labels[colIndex].highlight && labels[colIndex].keyRed === value" 
                        class="red"
                    >
                        {{ value }}
                    </span>
                    <span v-else>
                        {{ value }}
                    </span>
                </td>
                <td class="d-flex">
                    <ActionIcon :viewIcon="icons.viewIcon" :deleteIcon="icons.deleteIcon" :editIcon="icons.editIcon" /> 
                </td>
            </tr>
        </tbody>
    </v-table>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import '@/assets/table.css';
import ActionIcon from './ActionIcon.vue';

// Props for labels and data
defineProps<{
    labels: Array<{ title: string, highlight: boolean, keyGreen?: any, keyRed?: any }>;
    data: Array<Array<any>>;
    icons: { viewIcon: boolean, deleteIcon: boolean, editIcon: boolean }
}>();
</script>
