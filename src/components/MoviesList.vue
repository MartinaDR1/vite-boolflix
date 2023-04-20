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
        <div class="row row-cols-sm-2 row-cols-md-4 ">

            <MovieItem :movie="movie" v-for="movie in store.movies "/>
        </div>
    </div>
</template>


<style lang="scss" scoped>

</style>