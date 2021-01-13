<template>
  <div class="d-flex flex-column">
    <h5 class="my-3">Kraje pochodzenia</h5>
    <ul class="list-group" v-for="country in countries" :key="country.id">
            <li class="list-group-item" @click="goToCountryDetail(country.id)">{{country.name}}</li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'countries',
  computed: {
    ...mapGetters({
      countries: 'getCountriesBeers'
    })
  },
  props: {
    countries: {
      type: Object,
      required: true
    }
  },
  created () {
    this.$store.dispatch('retrieveCountriesBeer')
  },
  methods: {
    goToCountryDetail (id) {
      this.$router.push({
        name: 'CountryDetail',
        params: {
          countryId: id
        }
      })
    }
  }

}
</script>
