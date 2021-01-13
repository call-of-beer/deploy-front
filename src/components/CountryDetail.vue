<template>
    <div class="countrydetail container">
        <div class="row">
            <div class="col-12 my-5" v-for="getCountry in getCountry" :key="getCountry.id">
                {{getCountry.name}}
            </div>
        </div>
        <div class="row">
        <div class="col-12 col-md-4" v-for="countryBeer in countryBeers" :key="countryBeer.id">
        <div class="card mb-5" @click="goToBeerDetail(countryBeer.id)">
            <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img
                src="../assets/av.png"
                class="img-fluid"
                />
                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
            </div>
            <div class="card-body">
                <h5 class="card-title">{{ countryBeer.name }}</h5>
                <p class="card-text">
                {{ countryBeer.description }}
                </p>
            </div>
            <div class="card-footer d-flex flex-row" style="font-size: .8rem">
              <p class="my-auto">Dodano przez: {{countryBeer.user.firstname}} {{countryBeer.user.surname}}</p>
            </div>
        </div>
    </div>
    </div>
    </div>
</template>

<style scoped>
.countrydetail {
    width: 100vw;
    min-height: 100vh;
}
</style>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CountryDetail',
  computed: {
    ...mapGetters({
      getCountry: 'getCountry',
      countryBeers: 'getBeersOfCountry'
    })
  },
  props: {
    countryBeers: {
      type: Object,
      required: true
    }
  },
  mounted () {
    this.$store.dispatch('retrieveCountry', this.$route.params.countryId)
  },
  created () {
    this.$store.dispatch('retrieveBeersOfCountry', this.$route.params.countryId)
  },
  methods: {
    goToBeerDetail (id) {
      this.$router.push({
        name: 'Beerdetails',
        params: {
          beerId: id
        }
      })
    }
  }
}
</script>
