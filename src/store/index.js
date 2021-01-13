import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import groups from './groups'
import typesbeer from './typesbeer'
import countries from './countries'
import beers from './beers'
import tastings from './tastings'
import comments from './comments'
import users from './users'

Vue.use(Vuex)
axios.defaults.baseURL = 'https://dinnertime.dizajnstudio.eu/callofbeer/api'

export default new Vuex.Store({
  modules: {
    groups,
    typesbeer,
    countries,
    beers,
    tastings,
    comments,
    users
  },
  state: {
    token: sessionStorage.getItem('token') || null,
    user: null
  },
  getters: {
    loggedIn (state) {
      return state.token
    },
    

    user (state) {
      return state.user
    }
  },
  mutations: {
    addUser (state, user) {
      state.users.push({
        name: user.name,
        email: user.email,
        roles: user.roles.name
      })
    },
    retrieveToken (state, token) {
      state.token = token
    },
    destroyToken (state) {
      state.token = null
    },
    retrieveUsers (state, users) {
      state.users = users
    },
    retrieveRecipes (state, recipes) {
      state.recipes = recipes
    }
  },
  actions: {
    register (context, data) {
      return new Promise((resolve, reject) => {
        axios.post('/auth/register', {
          firstname: data.firstname,
          surname: data.surname,
          email: data.email,
          password: data.password,
          password_confirmation: data.password_confirmation
        })
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    destroyToken (context) {
      axios.defaults.headers.common.Authorization = 'Bearer ' + context.state.token

      if (context.getters.loggedIn) {
        return new Promise((resolve, reject) => {
          axios.post('/logout')
            .then(response => {
              sessionStorage.removeItem('token')
              sessionStorage.removeItem('role')
              window.location.href = '/'
              context.commit('destroyToken')
              resolve(response)
              // console.log(response);
              // context.commit('addTodo', response.data)
            })
            .catch(error => {
              sessionStorage.removeItem('token')
              sessionStorage.removeItem('role')
              context.commit('destroyToken')
              window.location.href = '/'
              reject(error)
            })
        })
      }
    },
    retrieveToken (context, credentials) {
      axios.post('/auth/login', {
        email: credentials.email,
        password: credentials.password
      })
        .then(response => {
          const token = response.data.token
          const role = response.data.role
          console.log(role)

          sessionStorage.setItem('token', token)
          sessionStorage.setItem('role', role)
          context.commit('retrieveToken', token)
          if (sessionStorage.getItem('role') === 'drinker') {
						window.location.href = '/'
					}
					else if (sessionStorage.getItem('role') === 'admin') {
						window.location.href = '/admin'
					}		
          // console.log(response);
          // context.commit('addTodo', response.data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    createUser (context, user) {
      axios.post('/users/create', {
        name: user.name,
        surname: user.surname,
        email: user.email,
        roles: user.roles.name
      })
        .then(response => {
          context.commit('addUser', response.data)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
})
