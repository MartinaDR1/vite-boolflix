<script>
import { store } from "../store";
import SearchBox from "../components/SearchBox.vue";
    export default {
        name:'AppHeader',

        components:{
            SearchBox
        },
        data(){
            return{
                store
            }
        }, 
        methods:{
            searchMovies(){
                console.log(this.store.searchText);

                const url = this.store.API_URL + `&query=${this.store.searchText}`
                console.log(url);   
                this.store.fetchMovie(url)
            }
        }  
    }
</script>


<template>
    <SearchBox @makeSearch = 'searchMovies()'/>
</template>


<style lang="scss" scoped>

</style>