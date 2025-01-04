<template>
    <v-card class="dashboard">
        <v-layout>
            <v-navigation-drawer v-model="drawer" :rail="rail" permanent @click="rail = false">
                <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg" title="John Leider" nav>
                    <template v-slot:append>
                        <v-btn icon="mdi-chevron-left" variant="text" @click.stop="rail = !rail"></v-btn>
                    </template>
                </v-list-item>

                <v-divider></v-divider>

                <v-list density="compact" nav>
                    <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard" value="Dashboard" link to="/"></v-list-item>
                    <v-list-item prepend-icon="mdi-movie-cog" title="Movie Management" value="movie table" link to="/table"></v-list-item>
                </v-list>
            </v-navigation-drawer>
            <v-main style="height: 250px">
            <router-view></router-view>
            </v-main>
        </v-layout>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            drawer: true,
            rail: true,
        }
    },
}
</script>