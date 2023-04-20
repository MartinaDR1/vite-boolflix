import axios from 'axios'
import { reactive } from 'vue'

export const store = reactive({
    searchText : '',
    loading: true,
    movies: null,

    API_URL_Movies: 'https://api.themoviedb.org/3/search/movie?api_key=dd47fc13a6b6880337e73dd1422c279c&language=it-IT&page=1&include_adult=false',
    API_URL_Series: 'https://api.themoviedb.org/3/search/tv?api_key=dd47fc13a6b6880337e73dd1422c279c&language=it-IT&page=1&include_adult=false&&',
   
    fetchMovie(url){
        axios
        .get(url)
        .then (response => {
            this.loading= false,
            this.movies = response.data.results
        })
        .catch(error => {
            console.log(error);
            console.error(error.message)
        })
    }
})