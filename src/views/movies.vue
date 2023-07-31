<script setup>

import{ref,reactive, onMounted} from 'vue'
import MoviesCard from "../components/MoviesCard.vue"


let movieList=reactive([])
let isLoading=ref(true)

onMounted(async()=>{
    try{
        const result= await fetch("http://localhost:3000/movies")
                        const response= await result.json()
                        movieList=response
                        isLoading.value=false
    }
     
    catch(error){
            console.error('fething failed',error)
          }
      
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