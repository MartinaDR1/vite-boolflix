<script>
import { store } from "../store";
import MovieItem from "../components/MovieItem.vue";

    export default {
        name: 'MoviesList',

        components:{
            MovieItem
        },
        data(){
            return {
                store
            }
        }      
    }
</script>


<template>
    <div class="container">
        <MovieItem :movie="movie" v-for="movie in store.movies "/>
    </div>
</template>


<style lang="scss" scoped>

</style>