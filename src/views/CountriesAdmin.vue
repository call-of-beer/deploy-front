<template>
	<div class="container my-5 py-5 countries">
		<div class="row">
			<div class="col-12">
				<p
					class="btn btn-warning text-white mt-2 mr-2"
					style="font-size: 0.8rem; color: #ffa900"
					type="button"
					data-toggle="modal"
					data-target="#addCountry"
				>
					<i class="fas fa-plus mr-2"></i>
					dodaj
				</p>
			</div>
		</div>
		<div class="row">
			<div class="col-12">
				<table class="table">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">First</th>
							<th scope="col">Utworzono</th>
							<th scope="col">Akcja</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="country in countries" :key="country.id">
							<th scope="row">{{ country.id }}</th>
							<td>{{ country.name }}</td>
							<td>{{ country.created_at }}</td>
							<td>
								<p
									class="btn btn-dark text-white mt-2 mr-2"
									style="font-size: 0.8rem"
									@click="removeCountry(country.id)"
								>
									<i class="fas fa-trash left mr-2"></i>
									usuń
								</p>
							</td>
						</tr>
					</tbody>
				</table>
				<AddCountryForm/>
			</div>
		</div>
	</div>
</template>

<style scoped>
.countries {
	width: 100vw;
	min-height: 100vh;
}
</style>

<script>
import AddCountryForm from '../components/AddCountryForm'
import { mapGetters } from "vuex";
export default {
	name: "countries",
	computed: {
		...mapGetters({
			countries: "getCountriesBeers",
		}),
	},
	components: {
		AddCountryForm
	},
	props: {
		countries: {
			type: Object,
			required: true,
		},
	},
	created() {
		this.$store.dispatch("retrieveCountriesBeer");
	},
	methods: {
		goToCountryDetail(id) {
			this.$router.push({
				name: "CountryDetail",
				params: {
					countryId: id,
				},
			});
		},
		removeCountry(id) {
			this.$store.dispatch("removeCountry", id);
		}
	},
};
</script>
