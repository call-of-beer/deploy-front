import Axios from 'axios'

export default {
  state: {
    comments: [],
    comment: []
  },
  getters: {
    getComments (state) {
      return state.comments
    }
  },
  mutations: {
    retrieveComments (state, comments) {
      state.comments = comments
    },
    addComment (state, comment) {
      state.comments.push({
        content: comment.content
      })
    }
  },
  actions: {
    retrieveComments (context, id) {
      Axios.defaults.headers.common.Authorization = 'Bearer ' + sessionStorage.getItem('token')

      Axios.get('/comment/' + id)
        .then(response => {
          context.commit('retrieveComments', response.data.result)
        })
        .catch(error => {
          console.log(error)
        })
    },
    async createComment (context, data) {
      Axios.defaults.headers.common.Authorization = 'Bearer ' + sessionStorage.getItem('token')

      Axios.post('/comment/new/' + data.id, {
        content: data.content
      })
        .then(response => {
          context.commit('addComment', response.data.result)
          console.log(response)
          window.location.href = `/tasting/${data.id}`
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
