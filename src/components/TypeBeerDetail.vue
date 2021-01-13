<template>
    <div class="container typebeerdetail my-5 py-5">
        <div class="row">
            <div class="col-12" v-for="type in type" :key="type.id">
                {{ type.name }}
            </div>
        </div>
        <div class="row">
        <div class="col-12 col-md-4" v-for="beertype in beertypes" :key="beertype.id">
        <div class="card mb-5" @click="goToBeerDetail(beertype.id)">
            <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img
                src="../assets/av.png"
                class="img-fluid"
                />
                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
            </div>
            <div class="card-body">
                <h5 class="card-title">{{ beertype.name }}</h5>
                <p class="card-text">
                {{ beertype.description }}
                </p>
            </div>
        </div>
    </div>
    </div>
    </div>
</template>

<style scoped>
.typebeerdetail {
    width: 100vh;
    min-height: 100vh;
}
</style>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TypeBeerDetail',
  computed: {
    ...mapGetters({
      type: 'getTypeBeers',
      beertypes: 'getBeerOfType'
    })
  },
  props: {
    beertypes: {
      type: Object,
      required: true
    }
  },
  mounted () {
    this.$store.dispatch('retrieveTypeBeer', this.$route.params.typeId)
  },
  created () {
    this.$store.dispatch('retrieveBeerOfType', this.$route.params.typeId)
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
