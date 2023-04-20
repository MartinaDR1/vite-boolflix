<script>
import { store } from "../store";

import MoviesList from "../components/MoviesList.vue";

    export default {
       name: 'AppMain',
       
       components:{
        MoviesList,
       },
       data(){
        return{
            store
        }
       },
       mounted() {
        this.store.fetchMovie(' https://api.themoviedb.org/3/movie/popular?api_key=dd47fc13a6b6880337e73dd1422c279c&language=it-IT&page=1')
        }
    }
</script>


<template>
    <main class="bg-black">
        <MoviesList/>
    </main>
</template>


<style lang="scss" scoped>
</style>