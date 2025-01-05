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
                    <!-- Conditional formatting based on label settings -->
                    <span 
                        v-if="labels[colIndex]?.highlight && labels[colIndex]?.keyGreen === value" 
                        class="green"
                    >
                        {{ value }}
                    </span>
                    <span 
                        v-else-if="labels[colIndex]?.highlight && labels[colIndex]?.keyRed === value" 
                        class="red"
                    >
                        {{ value }}
                    </span>
                    <span v-else>
                        {{ value }}
                    </span>
                </td>
                <td class="d-flex">
                    <v-icon icon="mdi-eye-outline" class="icon" />
                    <v-icon icon="mdi-pencil-outline" class="icon" />
                    <v-icon icon="mdi-delete-outline" class="icon" />
                </td>
            </tr>
        </tbody>
    </v-table>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import '@/assets/table.css';

// Props for labels and data
defineProps<{
    labels: Array<{ title: string, highlight: boolean, keyGreen?: any, keyRed?: any }>;
    data: Array<Array<any>>;
}>();
</script>
