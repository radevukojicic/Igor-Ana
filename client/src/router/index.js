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
        component: MainComponent
      },
      {
        path: '/wedding-stories',
        name: 'Wedding Stories',
        component: WeddingsComponent
      },
      {
        path: '/contact',
        name: 'Contact',
        component: ContactComponent
      },
      {
        path: '/wedding-stories/:id',
        name: 'Wedding Stories',
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
  children: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: HomeView
    },
    {
      path: '/travelView',
      name: 'travel',
      component: TravelView
    },
    {
      path: '/birthdaysView',
      name: 'birthdays',
      component: BirthdaysView
    },
    {
      path: '/socialView',
      name: 'Social',
      component: SocialView
    },
    {
      path: '/weddingsView',
      name: 'Weddings',
      component: WeddingsView
    },
    {
      path: '/wed-albums',
      name: 'WedStories',
      component: WedStories
    },
    {
      path: '/wed-albums/:id',
      name: 'WedStoriesDetails',
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
