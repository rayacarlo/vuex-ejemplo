<template>
  <div class="hello container">
    <div class="row">
      <div class="col-2"></div>
      <div class="col-8">
        <img src="@/assets/video.svg" class="img-thumbnail my-4">
        <h2>Welcome to Movie List</h2>
        <p>Check out our list of comedy and horror movies</p>
        <ComedyMovieList />
        <HorrorMovieList />
      </div>
      <div class="col-2"></div>
    </div>
    
  </div>
</template>

<script>
import ComedyMovieList from '@/components/ComedyMovieList.vue'
import HorrorMovieList from '@/components/HorrorMovieList.vue'

export default {
  name: 'MovieList',
  components: {
    ComedyMovieList,
    HorrorMovieList
  }
}
</script>

<style scoped>
.img-thumbnail{
  max-width: 50%;
  border: 0;
}
</style>
