<template>

    <head>
        <link rel="stylesheet" href="@/assets/movie.css">
    </head>

    <body>
        <v-card class="dashboard">
            <v-layout>
                <v-navigation-drawer v-model="drawer" :rail="rail" permanent @click="rail = false">
                    <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg" title="John Leider"
                        nav>
                        <template v-slot:append>
                            <v-btn icon="mdi-chevron-left" variant="text" @click.stop="rail = !rail"></v-btn>
                        </template>
                    </v-list-item>
                    <v-list density="compact" nav>
                        <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard" link to="/" />
                        <v-list-item prepend-icon="mdi-movie-cog" title="Movie Management" link to="/table" />
                    </v-list>
                </v-navigation-drawer>
                <v-main>
                    <v-container class="movie-content">
                        <div class="test"></div>
                        <FullTable :labels="labels" :data="data" :icons="icons" />
                    </v-container>
                </v-main>
            </v-layout>
        </v-card>
       
    </body>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import '@/assets/movie.css';
import FullTable from './FullTable.vue';

// Navigation states
const drawer = ref(true);
const rail = ref(true);

// Table labels and data
const labels = ref([
    { title: 'Name', highlight: false },
    { title: 'Rating', highlight: false },
    { title: 'Topic', highlight: false, isAutocomplete: true, searchItems: ['Cartoon', 'Anime', 'Fiction'] },
    { title: 'Status', highlight: true, keyGreen: 'Visible', keyRed: 'Hidden', isAutocomplete: true, searchItems: ['Visible', 'Hidden'] },
    { title: 'Created Date', highlight: false },
    { title: 'Actions', highlight: false }
]);

const data: any[][] = [
    [
        'Frozen Yogurt',
        159,
        "Anime",
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
        "Fiction",
        "Hidden",
        "2022-01-01"
    ],
    [
        'Gingerbread',
        356,
        "Anime",
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
        "Fiction",
        "Hidden",
        "2022-01-01"
    ],
    [
        'Honeycomb',
        408,
        "Anime",
        "Visible",
        "2022-01-01"
    ],
    [
        'Donut',
        452,
        "Fiction",
        "Hidden",
        "2022-01-01"
    ]

];
const icons = ref({
    viewIcon: true,
    deleteIcon: true,
    editIcon: true
}
);

</script>
