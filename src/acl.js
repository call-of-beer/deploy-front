import Vue from 'vue'
import {
  AclInstaller,
  AclCreate,
  AclRule
} from 'vue-acl'
import router from './router/index'

Vue.use(AclInstaller)

export default new AclCreate({
  initial: 'public',
  notfound: {
    path: '/404',
    forwardQueryParams: true
  },
  router,
  acceptLocalRules: true,
  globalRules: {
    isAdmin: new AclRule('admin').generate(),
    isPublic: new AclRule('public').or('drinker').generate(),
    isLogged: new AclRule('drinker').generate()
  },
  middleware: async acl => {
    await setTimeout(2000) // call your api
    if (sessionStorage.getItem('role') === 'drinker') {
      acl.change('drinker')
    }
    if (sessionStorage.getItem('role') === 'admin') {
      acl.change('admin')
    }
  }
})
