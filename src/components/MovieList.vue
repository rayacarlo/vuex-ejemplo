<template>
  <div>
    <ul class="list-group list-group-horizontal-lg my-2">
      <li class="list-group-item mx-auto" v-for="movie in Movies" :key="movie.id">
        <div class="card" style="width: 10rem;">
          <img class="card-img-top" :src="require(`../assets/${movie.id}.jpg`)">
          <div class="card-body">
            <p class="card-text">{{ movie.title }} <br> {{ movie.genre }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MovieList',
  props: {
    title: String,
    genre: String,
    id: Number
  },
  computed: {
    Movies() {
      return this.$store.getters.getMoviesByGenre(this.genre);
    }
  }
}
</script>

<style scoped>
li{
  list-style-type: none;
  border: 0;
}
</style>
