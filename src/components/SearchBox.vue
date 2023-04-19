<script>
import { store } from "../store";
    export default {
        name: 'SearchBox', 
        emit:'[makeSearch]',
        data(){
            return{
                store
            }
        }
    }
</script>


<template>
    
    <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search movies" v-model="store.searchText"  @keyup="$emit('makeSearch')">
        <button class="btn btn-outline-secondary" type="button" @click="$emit('makeSearch')">Search</button>
    </div>
</template>


<style lang="scss" scoped>

</style>