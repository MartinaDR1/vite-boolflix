<script>
import axios from 'axios'
import { store } from "./../store.js"
export default {
    name: 'SelectGenre',
    
    data() {
        return {
            store
        }
    },
    mounted() {
        axios
        .get('https://api.themoviedb.org/3/genre/movie/list?api_key=dd47fc13a6b6880337e73dd1422c279c&language=it-IT')
        .then(response => {
            store.genres = response.data.genres
            console.log(store.genres);
        })
    },
}
</script>

<template>
    <div class=" mx-3">
        <select class="rounded my-2" v-model="store.genre">
            <option value="">Generi</option>
            <option :value="item.name" v-for="item in store.genres">{{ item.name}}</option>
       </select>
    </div>
</template>


<style lang="scss" scoped>
select {
    width: 80px;
    background-color: rgba(0, 0, 0, 0.26);
    color: rgba(255, 255, 255, 0.747);
}
</style>