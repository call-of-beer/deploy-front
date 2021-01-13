import axios from 'axios'

export default {
  state: {
    allusers: [],
    adminusers: [],
    drinkerusers: []
  },
  getters: {
    getUsersAdmin (state) {
      return state.adminusers
    },
    getUsersDrinker (state) {
      return state.drinkerusers
    }
  },
  mutations: {
    retrieveAdminUsers (state, adminusers) {
      state.adminusers = adminusers
    },
    retrieveDrinkerUsers (state, drinkerusers) {
      state.drinkerusers = drinkerusers
    }
  },
  actions: {
    retrieveAdminUsers (context) {
      axios.defaults.headers.common.Authorization = 'Bearer ' + sessionStorage.getItem('token')
      axios.get('/users/admin')
        .then(res => {
          context.commit('retrieveAdminUsers', res.data.result)
        })
        .catch(e => {
          console.log(e)
        })
    },
    retrieveDrinkerUsers (context) {
      axios.defaults.headers.common.Authorization = 'Bearer ' + sessionStorage.getItem('token')
      axios.get('/users/drinker')
        .then(res => {
          context.commit('retrieveDrinkerUsers', res.data.result)
        })
        .catch(e => {
          console.log(e)
        })
    }
  }
}
