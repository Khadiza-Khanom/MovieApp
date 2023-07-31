<script setup>

import{ref,reactive, onMounted} from 'vue'
import MoviesCard from "../components/MoviesCard.vue"


let movieList=reactive([])
let isLoading=ref(true)

onMounted(()=>{
    fetch("http://localhost:3000/movies")
    .then(response=>response.json())
    .then(apiMovies=>{
                        movieList=apiMovies
                        console.log(movieList)
                        isLoading.value=false

                    })
    .catch(error=>{
            console.error('fething failed',error)
          })
      
})



</script>
<template>
    <h1 v-if="isLoading">Loading...</h1>

    <div class="grid grid-cols-4 gap-4" v-else>
        <MoviesCard 
        v-for="movie,index in movieList"
        :key="index"
        :movie="movie"

        />
    </div>




 

</template>
<style scoped></style>