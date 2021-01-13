<template>
	<div class="row">
		<div class="col-12 col-md-4" v-for="beer in beers" :key="beer.id">
			<div class="card mb-5">
				<div
					class="bg-image hover-overlay ripple"
					data-mdb-ripple-color="light"
					@click="goToBeerDetail(beer.id)"
				>
					<img
						src="../assets/av.png"
						class="img-fluid"
					/>
					<div class="mask"></div>
				</div>
				<div class="card-body">
					<h5
						class="card-title text-center pb-2 border-bottom"
						style="color: #ffb300"
					>
						{{ beer.name }}
					</h5>
					<p class="card-text text-center">
						{{ beer.description }}
					</p>

					<p class="my-auto text-center" style="font-size: 0.8rem">
						Dodano: {{ beer.created_at }}
					</p>
				</div>
				<div
					class="md-3 d-flex align-items-center justify-content-center"
				>
					<p
						@click="goToBeerDetail(beer.id)"
						class="btn btn-warning text-white mr-1 mt-n2"
						style="font-size: 0.8rem"
					>
						<i class="fas fa-angle-right left mr-2"></i>
						więcej
					</p>
					<p
						@click="removeBeer(beer.id)"
						class="btn btn-warning text-white ml-1 mt-n2"
						style="font-size: 0.8rem"
					>
						<i class="fas fa-trash left mr-2"></i>
						usuń
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	name: "beeritem",
	computed: {
		...mapGetters({
			beers: "getMyBeers",
		}),
	},
	props: {
		beers: {
			type: Object,
			required: true,
		},
	},
	created() {
		this.$store.dispatch("retrieveMyBeers");
	},
	methods: {
		goToBeerDetail(id) {
			this.$router.push({
				name: "Beerdetails",
				params: {
					beerId: id,
				},
			});
		},
		removeBeer(id) {
			this.$store.dispatch("removeBeer", id);
			this.$router.push({ path: "/beers" });
			window.location.replace = "/beers";
		},
	},
};
</script>
