<template>
    <v-card class="dashboard">
        <v-layout>
            <!-- Navigation Drawer -->
            <v-navigation-drawer v-model="drawer" :rail="rail" permanent @click="rail = false">
                <v-list-item 
                    prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg" 
                    title="John Leider" 
                    nav>
                    <template v-slot:append>
                        <v-btn icon="mdi-chevron-left" variant="text" @click.stop="rail = !rail"></v-btn>
                    </template>
                </v-list-item>

                <v-divider></v-divider>

                <v-list density="compact" nav>
                    <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard" link to="/" />
                    <v-list-item prepend-icon="mdi-movie-cog" title="Movie Management" link to="/table" />
                </v-list>
            </v-navigation-drawer>

            <!-- Main Content -->
            <v-main>
                <v-container class="head-nav">
                    <v-img src="../assets/noti-icon.png" class="icon"></v-img>
                </v-container>
                <FullTable :labels="labels" :data="data" />
            </v-main>
        </v-layout>
    </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import '@/assets/table.css';
import FullTable from './FullTable.vue';

// Navigation states
const drawer = ref(true);
const rail = ref(true);

// Table labels and data
const labels = ref([
    { title: 'Name', highlight: false }, 
    { title: 'Rating', highlight:false }, 
    { title: 'Topic', highlight: false }, 
    { title: 'Status', highlight: true, keyGreen: 'Visible', keyRed: 'Hidden' }, 
    { title: 'Created Date', highlight: false }, 
    { title: 'Actions', highlight: false }
]);

const data: any[][] = [
    [
        'Frozen Yogurt',
        159,
        "Cartoon",
        "Visible",
        "2022-01-01"
    ],
    [
        'Ice cream sandwich',
        237,
        "Cartoon",
        "Visible",
        "2022-01-01"
    ],
    [
        'Eclair',
        262,
        "Cartoon",
        "Hidden",
        "2022-01-01"
    ],
    [
        'Cupcake',
        305,
        "Cartoon",
        "Hidden",
        "2022-01-01"
    ],
    [
        'Gingerbread',
        356,
        "Cartoon",
        "Visible",
        "2022-01-01"
    ],
    [
        'Jelly bean',
        375,
        "Cartoon",
        "Hidden",
        "2022-01-01"
    ],
    [
        'Lollipop',
        392,
        "Cartoon",
        "Hidden",
        "2022-01-01"
    ],
    [
        'Honeycomb',
        408,
        "Cartoon",
        "Visible",
        "2022-01-01"
    ],
    [
        'Donut',
        452,
        "Cartoon",
        "Hidden",
        "2022-01-01"
    ]
    
];
        
</script>
