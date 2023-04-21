<script>
import Modal from "./Modal.vue";
export default {
    name: 'MovieItem',
    data() {
        return {
            score: Math.ceil(this.movie.vote_average / 2),
        }
    },
    props: {
        movie: Object,
    },
    components: {
        Modal
    }

}
</script>


<template>
    <div class="col">
        <div class="card">
            <img class="poster" :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`" alt="">

            <ul class="collapse">
                <li>
                    <strong>Titolo: </strong>
                    {{ movie.title || movie.name }}
                </li>
                <li>
                    <strong>Titolo originale: </strong>
                    {{ movie.original_title || movie.original_name }}
                </li>
                <li>
                    <strong>Lingua: </strong>
                    <img :src="`https://flagcdn.com/16x12/${movie.original_language}.png`"
                        :alt="`${movie.original_language}`">
                </li>
                <li>
                    <strong>Voto:</strong>
                    <i v-for="vote in score" class="fa-solid fa-star"></i>
                    <i v-for="vote in (5 - score)" class="fa-regular fa-star"></i>
                </li>
                <li>
                    <strong>Overview: </strong>
                    {{ movie.overview || movie.overview }}
                </li>

               <Modal />
            </ul>
        </div>

    </div>
</template>


<style lang="scss" scoped>
.card {
    margin: 1.5rem 0;
    border: 1px solid white;
    overflow-y: auto;


    .poster {
        max-height: 350px;
    }
}

::-webkit-scrollbar {
    display: none;
}

.card:hover .poster {
    visibility: collapse;
}

.card:hover {
    background-color: black;
    box-shadow: 5px 5px rgba(61, 54, 54, 0.349);
}

.card:hover ul {
    list-style: none;
    font-size: small;
    display: block;
    color: white;
    position: absolute;
    top: 1rem;
    left: -1rem;
}
</style>