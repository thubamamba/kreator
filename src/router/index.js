import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../components/404.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Welcome | My Portfolio Site',
      metaTags: [
        {
          name: 'description',
          content: 'This is content is meant to be a synopsis of what your site is about especially for when people search on search engines.'
        },
        {
          property: 'og:description',
          content: 'This is content is meant to be a synopsis of what your site is about especially for when people search on search engines'
        }
      ]
    }
  },
  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: "history",
  routes,
  // Watches page reload for Mata info to load
  watch: {
    '$route':{
      handler: (to, from) => {
        document.title = to.meta.title || 'My Portfolio Site'
      },
       immediate: true
    }
  },
})

export default router
