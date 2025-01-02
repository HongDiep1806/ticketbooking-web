<template>
    <v-card>
        <v-layout>
            <v-navigation-drawer v-model="drawer" :rail="rail" permanent @click="rail = false">
                <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg" title="John Leider" nav>
                    <template v-slot:append>
                        <v-btn icon="mdi-chevron-left" variant="text" @click.stop="rail = !rail"></v-btn>
                    </template>
                </v-list-item>

                <v-divider></v-divider>

                <v-list density="compact" nav>
                    <v-list-item prepend-icon="mdi-home-city" title="Dashboard" value="Dashboard" link
                        to="/"></v-list-item>
                    <v-list-item prepend-icon="mdi-account" title="Movie Management" value="movie table" link
                        to="/table"></v-list-item>
                </v-list>
            </v-navigation-drawer>
            <v-main style="height: max-content">
                <v-table>
                    <thead>
                        <tr>
                            <th class="text-left">Name</th>
                            <th class="text-left">Rating</th>
                            <th class="text-left">Topic</th>
                            <th class="text-left">Status</th>
                            <th class="text-left"> Created date</th>
                            <th class="text-left"> Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in desserts" :key="item.name">
                            <td class="text-left">{{ item.name }}</td>
                            <td class="text-left">{{ item.rating }}</td>
                            <td class="text-left">{{ item.topic }}</td>
                            <td v-if="item.status == 'Visible'" style="color: green">{{ item.status }}</td>
                            <td v-if="item.status == 'Hidden'" style="color: red">{{ item.status }}</td>
                            <td>{{ item.createdDate }}</td>
                            <td class="d-flex"><v-img src="../assets/eye-icon.png" alt="" style="height: 20px;"></v-img>
                                <v-img src="../assets/edit-icon.png" alt="" style="height: 20px;"></v-img>
                                <v-img src="../assets/delete-icon.png" alt="" style="height: 20px;"></v-img>
                            </td>
                        </tr>
                    </tbody>
                </v-table>
            </v-main>
        </v-layout>
    </v-card>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const drawer = ref(true)
const rail = ref(true)

const desserts = [
    {
        name: 'Frozen Yogurt',
        rating: 159,
        topic: "Cartoon",
        status: "Visible",
        createdDate: "2022-01-01"
    },
    {
        name: 'Ice cream sandwich',
        rating: 237,
        topic: "Cartoon",
        status: "Visible",
        createdDate: "2022-01-01"
    },
    {
        name: 'Eclair',
        rating: 262,
        topic: "Cartoon",
        status: "Hidden",
        createdDate: "2022-01-01"
    },
    {
        name: 'Cupcake',
        rating: 305,
        topic: "Cartoon",
        status: "Hidden",
        createdDate: "2022-01-01"
    },
    {
        name: 'Gingerbread',
        rating: 356,
        topic: "Cartoon",
        status: "Hidden",
        createdDate: "2022-01-01"
    },
    {
        name: 'Jelly bean',
        rating: 375,
        topic: "Cartoon",
        status: "Visible",
        createdDate: "2022-01-01"
    },
    {
        name: 'Lollipop',
        rating: 392,
        topic: "Cartoon",
        status: "Visible",
        createdDate: "2022-01-01"
    },
    {
        name: 'Honeycomb',
        rating: 408,
        topic: "Cartoon",
        status: "Visible",
        createdDate: "2022-01-01"
    },
    {
        name: 'Donut',
        rating: 452,
        topic: "Cartoon",
        status: "Visible",
        createdDate: "2022-01-01"
    },
    {
        name: 'KitKat',
        rating: 518,
        topic: "Cartoon",
        status: "Visible",
        createdDate: "2022-01-01"
    }]



</script>