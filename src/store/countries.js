import axios from 'axios'

export default {
  state: {
    countries: [],
    country: [],
    countrybeers: []
  },
  getters: {
    getCountriesBeers (state) {
      return state.countries
    },
    getCountry (state) {
      return state.country
    },
    getBeersOfCountry (state) {
      return state.countrybeers
    }
  },
  mutations: {
    retrieveCountriesBeer (state, countries) {
      state.countries = countries
    },
    retrieveCountry (state, country) {
      state.country = country
    },
    retrieveBeersOfCountry (state, countrybeers) {
      state.countrybeers = countrybeers
    },
    addCountry (state, country) {
      state.countries.push({
        name: country.name
      })
    },
    removeCountry (state) {
      state.country = null
    }
  },
  actions: {
    retrieveCountriesBeer (context) {
      axios.get('/country')
        .then(res => {
          context.commit('retrieveCountriesBeer', res.data.result)
        })
        .catch(e => {
          console.log(e)
        })
    },
    retrieveCountry (context, id) {
      axios.defaults.headers.common.Authorization = 'Bearer ' + sessionStorage.getItem('token')

      axios.get('/country/' + id)
        .then(res => {
          context.commit('retrieveCountry', res.data.result)
        })
        .catch(e => {
          console.log(e)
        })
    },
    retrieveBeersOfCountry (context, id) {
      axios.defaults.headers.common.Authorization = 'Bearer ' + sessionStorage.getItem('token')

      axios.get('/beer/country/' + id)
        .then(res => {
          context.commit('retrieveBeersOfCountry', res.data.result)
        })
        .catch(e => {
          console.log(e)
        })
    },
    createCountry (context, data) {
      axios.defaults.headers.common.Authorization = 'Bearer ' + sessionStorage.getItem('token')
      return new Promise((resolve, reject) => {
        axios.post('country/new', {
          name: data.name,
          shortcut: data.shortcut
        })
          .then(res => {
            resolve(res)
            context.commit('addCountry', res.data)
            window.location.href = '/admin/countries'
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    removeCountry (context, id) {
      axios.defaults.headers.common.Authorization = 'Bearer ' + sessionStorage.getItem('token')

      return new Promise((resolve, reject) => {
        axios.delete('/country/delete/' + id)
          .then(res => {
            context.commit('removeCountry')
            resolve(res)
            window.location.href = '/admin/countries'
          })
          .catch(e => {
            context.commit('removeCountry')
            reject(e)
          })
      })
    }
}}
