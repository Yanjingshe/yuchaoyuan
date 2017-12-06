import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/Home.vue'
import Movie from '../components/movie/Movie.vue'
import BuyTicket from '../components/buyTicket/BuyTicket.vue'
import login from '../components/login'
import content from '../components/content.vue'
import showCinemaDet from '../components/showCinemaDet.vue'
import showMoviesDet from '../components/showMoviesDet.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/cinema/movie',
      name: 'BuyTicket',
      component: BuyTicket
    },
    {
      path: '/user/login',
      name: 'login',
      component: login
    },
    {
      path: '/movie=:id',
      name: 'showMoviesDet',
      component: showMoviesDet
    },
    {
      path: '/',
      name: 'content',
      component: content,
      children: [
        {
          path: '/home',
          name: 'Home',
          component: Home
        },
        {
          path: '/',
          name: 'Movie',
          component: Movie
        }
      ]
    },
    {
      path: '/show=:id',
      name: 'showCinemaDet',
      component: showCinemaDet
    }
  ]
})
