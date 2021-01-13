<template>
  <div class="home">
    <LoginForm v-if="!loggedIn"/>
    <Panel v-if="loggedIn"/>
  </div>
</template>

<style scoped>
body {
  min-height: 100vh;
}
</style>

<script>
// @ is an alias to /src
import LoginForm from '../components/LoginForm'
import Panel from '../components/Panel'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    Panel,
    LoginForm
  },
  computed: {
    ...mapGetters({
      loggedIn: 'loggedIn',
      user: 'user'
    })
  }
}
</script>
