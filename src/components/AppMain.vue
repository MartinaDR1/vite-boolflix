<script>
import MoviesList from "../components/MoviesList.vue";
import SelectGenre from "../components/SelectGenre.vue"

    export default {
       name: 'AppMain',
       
       components:{
        MoviesList,
        SelectGenre
       }
    }
</script>


<template>
    <main class="bg-black">
        <SelectGenre/>
        <MoviesList/>
    </main>
</template>


<style lang="scss" scoped>
</style>