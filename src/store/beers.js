import axios from 'axios'

export default {
  state: {
    beers: [],
    beer: [],
    beerRating: ''
  },
  getters: {
    getMyBeers (state) {
      return state.beers
    },
    getBeer (state) {
      return state.beer
    },
    getBeerTasting (state) {
      return state.beerRating
    }
  },
  mutations: {
    retrieveMyBeers (state, beers) {
      state.beers = beers
    },
    retrieveBeer (state, beer) {
      state.beer = beer
    },
    retrieveBeerTasting (state, beerRating) {
      state.beerRating = beerRating
    },
    addBeer (state, beer) {
      state.beers.push({
        name: beer.name,
        alcohol_volume: beer.alcohol_volume,
        description: beer.description,
        country: beer.country,
        selectedCountry: beer.selectedCountry,
        selectedType: beer.selectedType
      })
    },
    removeBeer (state) {
      state.beer = null
    }
  },
  actions: {
    retrieveMyBeers (context) {
      axios.defaults.headers.common.Authorization = 'Bearer ' + sessionStorage.getItem('token')
      axios.get('/beer/all/my')
        .then(res => {
          context.commit('retrieveMyBeers', res.data.result)
        })
        .catch(e => {
          console.log(e)
        })
    },
    retrieveBeer (context, id) {
      axios.defaults.headers.common.Authorization = 'Bearer ' + sessionStorage.getItem('token')

      axios.get('/beer/' + id)
        .then(res => {
          context.commit('retrieveBeer', res.data.result)
        })
        .catch(e => {
          console.log(e)
        })
    },
    retrieveBeerTasting (context, id) {
      axios.defaults.headers.common.Authorization = 'Bearer ' + sessionStorage.getItem('token')

      axios.get('/rating/avg/' + id)
        .then(res => {
          context.commit('retrieveBeerTasting', res)
        })
        .catch(e => {
          console.log(e)
        })
    },
    createBeer (context, data) {
      axios.defaults.headers.common.Authorization = 'Bearer ' + sessionStorage.getItem('token')
      return new Promise((resolve, reject) => {
        axios.post('/beer/store/' + data.selectedType + '/' + data.selectedCountry, {
          name: data.name,
          alcohol_volume: data.alcohol_volume,
          description: data.description
        })
          .then(res => {
            resolve(res)
            context.commit('addBeer', res.data)
            window.location.href = `/beers`
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    removeBeer (context, id) {
      axios.defaults.headers.common.Authorization = 'Bearer ' + sessionStorage.getItem('token')
      return new Promise((resolve, reject) => {
        axios.delete('/beer/delete/' + id)
          .then(res => {
            context.commit('removeBeer')
            window.location.href = '/beers'
            resolve(res)
            console.log('Beer has been removed')
          })
          .catch(e => {
            context.commit('removeBeer')
            reject(e)
          })
      })
    }
  }
}
