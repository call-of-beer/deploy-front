<template>
    <div class="container-fluid pr-md-5">
        <div class="row">
            <div class="col-12">
                <form class="ratingform d-flex flex-column">
                    <h5 class="mb-5">Oceń moje piwo!</h5>
                    <div class="mb-5">
                        <label class="form-label" for="customRange2">Aromat</label>
                        <div class="range">
                            <input type="range" class="form-range" min="0" max="5" id="customRange2"/>
                        </div>
                    </div>
                    <div class="mb-5">
                        <label class="form-label" for="customRange2">Kolor</label>
                        <div class="range">
                            <input type="range" class="form-range" min="0" max="5" id="customRange2"/>
                        </div>
                    </div>
                    <div class="mb-5">
                        <label class="form-label" for="customRange2">Smak</label>
                        <div class="range">
                            <input type="range" class="form-range" min="0" max="5" id="customRange2"/>
                        </div>
                    </div>
                    <div class="mb-5">
                        <label class="form-label" for="customRange2">Gorycz</label>
                        <div class="range">
                            <input type="range" class="form-range" min="0" max="5" id="customRange2"/>
                        </div>
                    </div>
                    <div class="mb-5">
                        <label class="form-label" for="customRange2">Tekstura</label>
                        <div class="range">
                            <input type="range" class="form-range" min="0" max="5" id="customRange2"/>
                        </div>
                    </div>
                    <button type="button" class="btn btn-primary mr-auto">Zagłosuj</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import Axios from 'axios'

export default {
  name: 'addratingform',
  data () {
    return {
      form: {
        aroma: '',
        color: '',
        taste: '',
        bitterness: '',
        texture: ''
      }
    }
  },
  methods: {
    submitRating () {
        Axios.post('/rating/store')
    }
  }
}
</script>
