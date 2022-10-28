import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home/Home.vue'
import AdminPanel from '../components/AdminPanel.vue'
import LoginView from '../components/LoginView.vue'
import HomeView from '../components/nekretnine/HomeView.vue'
import TravelView from '../components/nekretnine/TravelView.vue'
import BirthdaysView from '../components/nekretnine/BirthdaysView.vue'
import SocialView from '../components/nekretnine/SocialView.vue'
import WeddingsView from '../components/nekretnine/WeddingsView.vue'
import WedStories from '../components/wed-stories/WedStories.vue'
import WedStoriesDetails from '../components/wed-stories/WedStoriesDetails.vue'
import WeddingsComponent from '../components/home/WeddingsComponent.vue'
import ContactComponent from '../components/home/ContactComponent.vue'
import MainComponent from '../components/home/MainComponent.vue'
import TravelPage from '../components/home/TravelPage.vue'
import SocialPage from '../components/home/SocialPage.vue'
import WeddingPage from '../components/home/WeddingPage.vue'
import BirthdaysPage from '../components/home/BirthdaysPage.vue'
import WeddingSingle from '../components/home/WeddingSingle.vue'
import NotFound from '../components/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: Home,
    children: [
      {
        path: '/',
        name: 'Main',
        meta: { title: 'i & a | destination photographers' },
        component: MainComponent
      },
      {
        path: '/travel',
        name: 'Travel',
        meta: { title: 'i & a | travel' },

        component: TravelPage
      },
      {
        path: '/weddings',
        name: 'Weddings Page',
        meta: { title: 'i & a | weddings' },

        component: WeddingPage
      },
      {
        path: '/social',
        name: 'Social Page',
        meta: { title: 'i & a | social media' },

        component: SocialPage
      },
      {
        path: '/birthdays',
        name: 'Birthdays',
        meta: { title: 'i & a | birthdays' },

        component: BirthdaysPage
      },
      {
        path: '/wedding-stories',
        name: 'Wedding Stories',
        meta: { title: 'i & a | wedding stories' },

        component: WeddingsComponent
      },
      {
        path: '/contact',
        name: 'Contact',
        meta: { title: 'i & a | contact' },

        component: ContactComponent
      },
      {
        path: '/wedding-stories/:id',
        meta: { title: 'i & a | wedding storie' },

        name: 'Wedding Stories Single',
        component: WeddingSingle
      },
    ]
  },

  {
    path: '*',
    name: 'Not Found',
    component: NotFound
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
    meta: { title: 'Admin' }
  },
  {
  path: "/admin",
  component: AdminPanel,
  meta: { title: 'Admin' },
  children: [
    {
      path: '/dashboard',
      name: 'dashboard',
      meta: { title: 'Admin Naslovna' },
      component: HomeView

    },
    {
      path: '/travelView',
      name: 'travel',
      meta: { title: 'Admin Travel' },
      component: TravelView
    },
    {
      path: '/birthdaysView',
      name: 'birthdays',
      meta: { title: 'Admin Birthdays' },

      component: BirthdaysView
    },
    {
      path: '/socialView',
      name: 'Social',
      meta: { title: 'Admin Social' },

      component: SocialView
    },
    {
      path: '/weddingsView',
      name: 'Weddings',
      meta: { title: 'Admin Weddings' },

      component: WeddingsView
    },
    {
      path: '/wed-albums',
      name: 'WedStories',
      meta: { title: 'Admin Wed Stories' },

      component: WedStories
    },
    {
      path: '/wed-albums/:id',
      name: 'WedStoriesDetails',
      meta: { title: 'Admin Storie detail' },

      component: WedStoriesDetails
    },
  ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

//SET TITLE TO LOAD AS INSERTED
const DEFAULT_TITLE = 'Web Page';
router.afterEach((to) => {
    Vue.nextTick(() => {
        document.title = to.meta.title || DEFAULT_TITLE;
    });
});


//Check if token exist to protect routes// TODO:Check secret key
router.beforeEach((to, from, next) => {
  if (localStorage.getItem('token')) {
    var expired = JSON.parse(atob(localStorage.getItem('token').split('.')[1]));
    var time = (Date.now() < expired.exp * 1000)
  }
    // If logged in, or going to the Login page.
    if (time || to.name === 'Login' || to.name === 'Wedding Stories' || to.name === 'Contact'|| to.name === 'Main'|| to.name === 'Not Found') {
      // Continue to page.
      next()
    } else {
      // Not logged in, redirect to login.
      next({name: 'Login'})
    }
});
