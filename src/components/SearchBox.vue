<script>
import { store } from "../store";
export default {
    name: 'SearchBox',
    emit: '[makeSearch]',
    data() {
        return {
            store
        }
    }
}
</script>


<template>
    <div class="search input-group mb-3 ">
        <input  type="text" class="form-control" placeholder="Search title" v-model="store.searchText"
            @keyup="$emit('makeSearch')">
        <button class="btn btn-outline-secondary " type="button" @click="$emit('makeSearch')"><i class="fa-solid fa-magnifying-glass"></i></button>
    </div>
</template>


<style lang="scss" scoped>
.search {
    max-width: 300px;

    input,button{
        height: 30px;
    }
}
</style>