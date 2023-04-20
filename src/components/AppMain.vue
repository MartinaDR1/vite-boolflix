<script>
import MoviesList from "../components/MoviesList.vue";

    export default {
       name: 'AppMain',
       
       components:{
        MoviesList,
       }
    }
</script>


<template>
    <main class="bg-black">
        <MoviesList/>
    </main>
</template>


<style lang="scss" scoped>
</style>