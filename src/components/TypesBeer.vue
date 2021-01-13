<template>
  <div class="d-flex flex-column my-5">
    <h5 class="my-3">Rodzaje piw</h5>
  <ul class="list-group" v-for="type in types" :key="type.id">
            <li class="list-group-item" @click="goToTypeBeerDetail(type.id)">{{type.name}}</li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'typebeer',
  computed: {
    ...mapGetters({
      types: 'getTypesBeers'
    })
  },
  props: {
    types: {
      type: Object,
      required: true
    }
  },
  created () {
    this.$store.dispatch('retrieveTypesBeer')
  },
  methods: {
    goToTypeBeerDetail (id) {
      this.$router.push({
        name: 'TypeBeerDetail',
        params: {
          typeId: id
        }
      })
    }
  }

}
</script>
