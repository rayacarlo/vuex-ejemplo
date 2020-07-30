import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    movies: [
      { id: 1, title: 'Palm Springs', genre: 'Comedy' },
      { id: 2, title: 'The Gentlemen', genre: 'Comedy' },
      { id: 3, title: 'Dil Bechara', genre: 'Comedy' },
      { id: 4, title: 'Vivarium', genre: 'Horror' },
      { id: 5, title: 'Truth Seekers', genre: 'Horror' },
      { id: 6, title: 'Zombieland', genre: 'Horror' },
    ]
  },
  getters: {
    comedyMovies(store) {
      return store.movies.filter(movie => movie.genre === 'Comedy');
    },
    horrorMovies(store) {
      return store.movies.filter(movie => movie.genre === 'Horror');
    },
  },
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
