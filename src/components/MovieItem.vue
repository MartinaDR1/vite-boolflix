<script>
export default {
    name: 'MovieItem',
  
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
        <li>{{ movie.vote_average }}</li>
    </ul>
</template>


<style lang="scss" scoped></style>