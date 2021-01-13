import Axios from 'axios'

export default {
  state: {
    tastings: [],
    tasting: [],
    beeroftasting: []
  },
  getters: {
    getTastings (state) {
      return state.tastings
    },
    getTasting (state) {
      return state.tasting
    },
    getBeerOfTasting (state) {
      return state.beeroftasting
    }
  },
  mutations: {
    retrieveTastings (state, tastings) {
      state.tastings = tastings
    },
    retrieveTasting (state, tasting) {
      state.tasting = tasting
    },
    addTasting (state, tasting) {
      state.tasting = tasting
    },
    retrieveBeerOfTasting (state, beeroftasting) {
      state.beeroftasting = beeroftasting
    }
  },
  actions: {
    retrieveTastings (context, id) {
      Axios.defaults.headers.common.Authorization = 'Bearer ' + sessionStorage.getItem('token')
      Axios.get('/tastings/' + id)
        .then(res => {
          context.commit('retrieveTastings', res.data.result)
        })
        .catch(e => {
          console.log(e)
        })
    },
    retrieveBeerOfTasting (context, id) {
      Axios.defaults.headers.common.Authorization = 'Bearer ' + sessionStorage.getItem('token')
      Axios.get('/beer/tasting/' + id)
        .then(res => {
          context.commit('retrieveBeerOfTasting', res.data.result)
        })
        .catch(e => {
          console.log(e)
        })
    },
    retrieveTasting (context, id) {
      Axios.defaults.headers.common.Authorization = 'Bearer ' + sessionStorage.getItem('token')
      Axios.get('/tasting/' + id)
        .then(res => {
          context.commit('retrieveTasting', res.data.result)
        })
        .catch(e => {
          console.log(e)
        })
    },
    createTasting (context, data) {
      Axios.defaults.headers.common.Authorization = 'Bearer ' + sessionStorage.getItem('token')
      return new Promise((resolve, reject) => {
        Axios.post('/tasting/' + data.id + '/' + data.selectedBeer, {
          title: data.title,
          description: data.description
        })
          .then(res => {
            context.commit('addGroup')
            resolve(res)
            console.log('Tasting has been added')
          })
          .catch(e => {
            context.commit('addGroup')
            reject(e)
          })
      })
    }
  }
}
