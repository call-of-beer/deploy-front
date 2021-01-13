import axios from 'axios'

export default {
  state: {
    mygroups: {
      users: []
    },
    groups: [],
    group: [],
    groupusers: [],
    groupuser: []
  },
  getters: {
    myOwnGroups (state) {
      return state.mygroups
    },

    groupsWhereIMate (state) {
      return state.groups
    },

    getGroup (state) {
      return state.group
    },

    getGroupUsers (state) {
      return state.groupusers
    }
  },
  mutations: {
    retrieveOwnGroups (state, mygroups) {
      state.mygroups = mygroups
    },
    retrieveGroupsMate (state, groups) {
      state.groups = groups
    },
    addGroup (state, group) {
      state.groups.push({
        name: group.name
      })
    },
    retrieveGroup (state, group) {
      state.group = group
    },
    removeGroup (state) {
      state.group = null
    },
    retrieveGroupUsers (state, groupusers) {
      state.groupusers = groupusers
    },
    addUserToGroup (state, groupuser) {
      state.groupuser.push({
        email: groupuser.email
      })
    }
  },
  actions: {
    retrieveOwnGroups (context) {
      axios.defaults.headers.common.Authorization = 'Bearer ' + sessionStorage.getItem('token')

      axios.get('/user/group/all/member')
        .then(response => {
          context.commit('retrieveOwnGroups', response.data.result)
        })
        .catch(error => {
          console.log(error)
        })
    },
    retrieveGroup (context, id) {
      axios.defaults.headers.common.Authorization = 'Bearer ' + sessionStorage.getItem('token')

      axios.get('/group/' + id)
        .then(res => {
          context.commit('retrieveGroup', res.data.result)
        })
        .catch(e => {
          console.log(e)
        })
    },
    retrieveGroupUsers (context, id) {
      axios.defaults.headers.common.Authorization = 'Bearer ' + sessionStorage.getItem('token')

      axios.get('/group/users/' + id)
        .then(res => {
          context.commit('retrieveGroupUsers', res.data.result)
        })
        .catch(e => {
          console.log(e)
        })
    },
    createGroup (context, data) {
      axios.defaults.headers.common.Authorization = 'Bearer ' + sessionStorage.getItem('token')

      return new Promise((resolve, reject) => {
        axios.post('/group/add', {
          name: data.name
        })
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    joinUserToGroup (context, data) {
      axios.defaults.headers.common.Authorization = 'Bearer ' + sessionStorage.getItem('token')

      return new Promise((resolve, reject) => {
        axios.post('/group/' + data.id + '/addUser', {
          email: data.email
        })
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    removeGroup (context, id) {
      axios.defaults.headers.common.Authorization = 'Bearer ' + sessionStorage.getItem('token')

      return new Promise((resolve, reject) => {
        axios.delete('/group/' + id)
          .then(res => {
            context.commit('removeGroup')
            resolve(res)
            console.log('Group has been removed')
            window.location.href = '/'
          })
          .catch(e => {
            context.commit('removeGroup')
            reject(e)
          })
      })
    }

  }

}
