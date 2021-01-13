import Axios from 'axios'

export default {
  state: {
    types: [],
    type: [],
    typebeers: []
  },
  getters: {
    getTypesBeers (state) {
      return state.types
    },
    getTypeBeers (state) {
      return state.type
    },
    getBeerOfType (state) {
      return state.typebeers
    }
  },
  mutations: {
    retrieveTypesBeer (state, types) {
      state.types = types
    },
    retrieveTypeBeer (state, type) {
      state.type = type
    },
    retrieveBeerOfType (state, typebeers) {
      state.typebeers = typebeers
    },
    addTypeOfBeer (state, type) {
      state.types.push({
        name: type.name
      })
    },
    deleteType (state) {
      state.types = null
    }
  },
  actions: {
    retrieveTypesBeer (context) {
      Axios.get('/type')
        .then(res => {
          context.commit('retrieveTypesBeer', res.data.result)
        })
        .catch(e => {
          console.log(e)
        })
    },
    retrieveTypeBeer (context, id) {
      Axios.get('/type/' + id)
        .then(res => {
          context.commit('retrieveTypeBeer', res.data.result)
        })
        .catch(e => {
          console.log(e)
        })
    },
    retrieveBeerOfType (context, id) {
      Axios.defaults.headers.common.Authorization = 'Bearer ' + sessionStorage.getItem('token')
      Axios.get('/beer/type/' + id)
        .then(res => {
          context.commit('retrieveBeerOfType', res.data.result)
        })
        .catch(e => {
          console.log(e)
        })
    },
    createType (context, data) {
      Axios.defaults.headers.common.Authorization = 'Bearer ' + sessionStorage.getItem('token')
      return new Promise((resolve, reject) => {
        Axios.post('/type', {
          name: data.name
        })
          .then(res => {
            resolve(res)
            context.commit('addTypeOfBeer', res.data)
            window.location.href = '/admin/types'
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    removeType (context, id) {
      Axios.defaults.headers.common.Authorization = 'Bearer ' + sessionStorage.getItem('token')

      return new Promise((resolve, reject) => {
        Axios.delete('/type/' + id)
          .then(res => {
            context.commit('deleteType')
            resolve(res)
            window.location.href = '/admin/types'
          })
          .catch(e => {
            context.commit('deleteType')
            reject(e)
          })
      })
    }
  }
}
