<script>
    export default {
        name: 'MovieItem',
        
        props:{
            movie: Object
        }
    }
</script>


<template>
   
    <ul>
        <li>{{ movie.title }}</li>
        <li> {{ movie.original_title }}</li>
        <li> {{ movie.original_language}}</li>
        <li>{{ movie.vote_average }}</li>
    </ul>

</template>


<style lang="scss" scoped>

</style>