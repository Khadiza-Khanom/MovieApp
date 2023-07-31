<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
 
      <nav class="flex justify-center items-center m-20">
        <RouterLink class="m-5" to="/">Home</RouterLink>
        <RouterLink class="m-5" to="/about">About</RouterLink>
        <RouterLink class="m-5" to="/movies">Movies</RouterLink>
      </nav>


  <RouterView />
</template>

<style scoped>
</style>
