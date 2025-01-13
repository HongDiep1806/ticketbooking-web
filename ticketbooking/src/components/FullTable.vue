<template>
    <v-table class="table-config">
        <thead>
            <tr>
                <th v-for="label in labels" :key="label.title" class="table-header">
                    {{ label.title }}
                </th>
            </tr>
            <tr>
                <td v-for="(label, index) in labels" :key="label.title" class="table-filter-row">
                    <v-autocomplete
                        v-if="label.isAutocomplete"
                        clearable
                        label="Filter"
                        :items="label.searchItems"
                        v-model="filters[index]"
                        outlined
                        dense
                        class="filter-input"
                    />
                </td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(row, rowIndex) in filteredData" :key="rowIndex" class="table-row">
                <td v-for="(value, colIndex) in row" :key="colIndex" class="table-cell">
                    <span v-if="labels[colIndex].highlight && labels[colIndex].keyGreen === value" class="green">
                        {{ value }}
                    </span>
                    <span v-else-if="labels[colIndex].highlight && labels[colIndex].keyRed === value" class="red">
                        {{ value }}
                    </span>
                    <span v-else>
                        {{ value }}
                    </span>
                </td>
                <td class="table-actions">
                    <ActionIcon :viewIcon="icons.viewIcon" :deleteIcon="icons.deleteIcon" :editIcon="icons.editIcon" />
                </td>
            </tr>
        </tbody>
    </v-table>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue';
import '@/assets/table.css';
import ActionIcon from './ActionIcon.vue';
import { defineProps } from 'vue'; // defineProps

const props = defineProps<{
    labels: Array<{ title: string, highlight: boolean, keyGreen?: any, keyRed?: any, isAutocomplete?: boolean, searchItems?: Array<string> }>;
    data: Array<Array<any>>;
    icons: { viewIcon: boolean, deleteIcon: boolean, editIcon: boolean };
}>();

// Reactive state for filters
const filters = ref(props.labels.map(() => ''));

// Computed property to filter data
const filteredData = computed(() => {
    return props.data.filter(row =>
        row.every((value, colIndex) => {
            const filter = filters.value[colIndex];
            return !filter || value.toString().toLowerCase().includes(filter.toString().toLowerCase());
        })
    );
});
</script>