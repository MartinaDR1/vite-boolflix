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
            searchFromApi(urlApi){
                console.log(this.store.searchText);

                const url = urlApi + `&query=${this.store.searchText}`
                console.log(url);   
                this.store.fetchMovie(url)
            }
        }  
    }
</script>


<template>
    <SearchBox @makeSearch = "searchFromApi(this.store.API_URL_Movies), searchFromApi(this.store.API_URL_Series)"/>
</template>


<style lang="scss" scoped>

</style>