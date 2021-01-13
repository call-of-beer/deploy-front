<template>
    <div class="userlist">
        <ul class="list-group" v-for="getGroupUser in getGroupUsers" :key="getGroupUser.id">
            <li class="list-group-item d-flex flex-row my-1">
                <div class="d-flex flex-row my-auto">
                    <i class="fas fa-user my-auto mr-3"></i>
                    <p class="d-flex flex-row my-auto">{{ getGroupUser.firstname }} {{ getGroupUser.surname }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'UserList',
  computed: {
    ...mapGetters({
      getGroupUsers: 'getGroupUsers'
    })
  },
  created () {
    this.$store.dispatch('retrieveGroupUsers', this.$route.params.groupId)
  }
}
</script>
