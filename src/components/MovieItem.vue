<script>
export default {
    name: 'MovieItem',
    data(){
        return{

           score:  Math.ceil(this.movie.vote_average / 2),
        }
    },

    props: {
        movie: Object
    }
      
}
</script>


<template>
    <img :src="`https://image.tmdb.org/t/p/w342/${movie.poster_path}`" alt="">
    <ul>
        <li>{{ movie.title || movie.name}} </li>
        <li> {{ movie.original_title || movie.original_name}}</li>
        <li>
            <img :src="`https://flagcdn.com/16x12/${movie.original_language}.png`" :alt="`${movie.original_language}`">
        </li>
        <li>
            <i  v-for="vote in score" class="fa-solid fa-star"></i>
            <i v-for="vote in (5 - score)" class="fa-regular fa-star"></i>
        </li>
    </ul>
</template>


<style lang="scss" scoped></style>