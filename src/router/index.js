import Vue from 'vue'
import VueRouter from 'vue-router'
import RegisterPage from '../views/Register.vue'
import Logout from '../components/Logout.vue'
import Home from '../views/Home'
import Beers from '../views/Beers'
import Admin from '../views/Admin'
import UsersList from '../views/UsersList'
import TypesBeerAdmin from '../views/TypesBeerAdmin'
import CountriesAdmin from '../views/CountriesAdmin'
import error from '../views/404'
import GroupDetail from '../components/GroupDetail'
import BeerDetail from '../components/BeerDetail'
import CountryDetail from '../components/CountryDetail'
import TypeBeerDetail from '../components/TypeBeerDetail'
import TastingDetail from '../components/TastingDetail'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      rule: 'isPublic'
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage,
    meta: {
      rule: 'isPublic'
    }
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout,
    meta: {
      rule: '*'
    }
  },
  {
    path: '/beers',
    name: 'beers',
    component: Beers,
    meta: {
      rule: 'isLogged'
    }
  },
  {
    path: '/group/:groupId',
    name: 'Group Details',
    component: GroupDetail,
    props: true,
    meta: {
      rule: 'isLogged'
    }
  },
  {
    path: '/beer/:beerId',
    name: 'Beerdetails',
    component: BeerDetail,
    props: true,
    meta: {
      rule: 'isLogged'
    }
  },
  {
    path: '/country/:countryId',
    name: 'CountryDetail',
    component: CountryDetail,
    props: true,
    meta: {
      rule: 'isLogged'
    }
  },
  {
    path: '/type/:typeId',
    name: 'TypeBeerDetail',
    component: TypeBeerDetail,
    props: true,
    meta: {
      rule: 'isLogged'
    }
  },
  {
    path: '/tasting/:tastingId',
    name: 'TastingDetail',
    component: TastingDetail,
    props: true,
    meta: {
      rule: 'isLogged'
    }
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    meta: {
      rule: 'isAdmin'
    }
  },
  {
    path: '/admin/users',
    name: 'userslist',
    component: UsersList,
    meta: {
      rule: 'isAdmin'
    }
  },
  {
    path: '*',
    name: 'error',
    component: error,
    meta: {
      rule: '*'
    }
  },
  {
    path: '/admin/types',
    name: 'typebeeradmin',
    component: TypesBeerAdmin,
    meta: {
      rule: 'isAdmin'
    }
  },
  {
    path: '/admin/countries',
    name: 'countriesadmin',
    component: CountriesAdmin,
    meta: {
      rule: 'isAdmin'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router