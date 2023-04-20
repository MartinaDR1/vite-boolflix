<script>
import { store } from "../store";
import MovieItem from "../components/MovieItem.vue";
    export default {
        name: 'MoviesList',

        components:{
            MovieItem,
        },
        data(){
            return {
                store
            }
        },
        mounted() {
            this.store.fetchMovie(' https://api.themoviedb.org/3/movie/popular?api_key=dd47fc13a6b6880337e73dd1422c279c&language=it-IT&page=1')
        }
    }

</script>


<template>
    <div class="ms_container">
        <div class="row row-cols-sm-2 row-cols-md-4 row-cols-lg-5 ">
            <MovieItem :movie="movie" v-for="movie in store.movies "/>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.ms_container{
   margin: 0 2rem;
}
</style>