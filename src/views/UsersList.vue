<template>
    <div class="container userslist my-5 py-5">
        <div class="row">
            <div class="col-12">
                Pijacy
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                        <th scope="col">Utworzono</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in drinkers" :key="user.id">
                            <th scope="row">{{ user.id }}</th>
                            <td>{{ user.firstname }}</td>
                            <td>{{ user.surname }}</td>
                            <td>{{ user.email }}</td>
                            <td>{{ user.created_at }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="row mt-5 mb-3">
            <div class="col-12">
                Admini
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                        <th scope="col">Utworzono</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in admins" :key="user.id">
                            <th scope="row">{{ user.id }}</th>
                            <td>{{ user.firstname }}</td>
                            <td>{{ user.surname }}</td>
                            <td>{{ user.email }}</td>
                            <td>{{ user.created_at }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<style scoped>
.userslist {
    width: 100vw;
    min-height: 100vh;
}
</style>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'countries',
  computed: {
    ...mapGetters({
      admins: 'getUsersAdmin',
      drinkers: 'getUsersDrinker'
    })
  },
  props: {
    admins: {
      type: Object,
      required: true
    },
    drinkers: {
      type: Object,
      required: true
    }
  },
  created () {
    this.$store.dispatch('retrieveAdminUsers')
    this.$store.dispatch('retrieveDrinkerUsers')
  }
}
</script>
