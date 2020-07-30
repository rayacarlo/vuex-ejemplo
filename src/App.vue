<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-2"></div>
        <div class="col-8">
          <img src="@/assets/video.svg" class="img-thumbnail my-4">
          <h2>Welcome to Movie List</h2><br>
          <MovieList title="Comedy Movies" genre="Comedy" />
          <MovieList title="Horror Movies" genre="Horror" />
        </div>
        <div class="col-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
import MovieList from './components/MovieList.vue'

export default {
  name: 'App',
  components: {
    MovieList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 1rem;
}
.img-thumbnail{
  max-width: 50%;
  border: 0;
}
</style>
