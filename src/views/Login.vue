<template>
    <div class="login">
        <LoginForm />
    </div>
</template>

<style scoped>
.login {
    width: 100%;
    height: 100vh;
}
</style>

<script>
import LoginForm from '../components/LoginForm'

export default {
  name: 'LoginPage',
  components: {
    LoginForm
  }
}
</script>
