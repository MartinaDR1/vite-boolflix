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
    <div class="appHeader d-flex bg-black justify-content-between p-2">
        <div class="logo d-flex">
            <img src="../assets/img/Netflix-Logo.png" alt="">

            <ul class="d-flex">
                <li ><a href="" class="active">Home</a></li>
                <li><a href="">Serie Tv</a></li>
                <li><a href="">Film</a></li>
                <li><a href="">Originali</a></li>
                <li><a href="">Aggiunti di recente</a></li>
                <li><a href="">La mia lista</a></li>
            </ul>
        </div>
        <div class="searchBox">
            <SearchBox @makeSearch = "searchFromApi(this.store.API_URL_Movies), searchFromApi(this.store.API_URL_Series)"/>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .logo{
        img{
            width: 110px
        }

        ul{
            list-style: none;
            align-self: flex-end
        }

        a{
            text-decoration: none;
            color: grey;
            padding-right: 0.5rem;

        }
        .active{
            color:white
        }
    }

    .searchBox{
        align-self: flex-end;
    }
</style>