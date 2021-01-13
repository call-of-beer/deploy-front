<template>
	<div
		class="modal fade"
		id="exampleModal"
		tabindex="-1"
		role="dialog"
		aria-labelledby="exampleModalLabel"
		aria-hidden="true"
	>
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header bg-warning text-white">
					<h5 class="modal-title" id="exampleModalLabel">
						Dodaj piwo do swojej bazy
					</h5>
					<button
						type="button"
						class="close"
						data-dismiss="modal"
						aria-label="Close"
					>
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<form>
						<div class="mb-3">
							<label
								for="exampleFormControlInput1"
								class="form-label"
								>Nazwa piwa</label
							>
							<input
								type="text"
								class="form-control"
								placeholder="Każde tylko nie wojak..."
								v-model="form.name"
							/>
						</div>
						<div class="mb-3">
							<label
								for="exampleFormControlTextarea1"
								class="form-label"
								>Krótki opis</label
							>
							<textarea
								class="form-control"
								id="exampleFormControlTextarea1"
								rows="3"
								placeholder="Najlepsze piwo na świecie. Ze mną się nie napijecie?!?!"
								v-model="form.description"
							></textarea>
						</div>
						<div class="mb-3">
							<label
								for="exampleFormControlTextarea1"
								class="form-label"
								>Poziom alkoholu</label
							>
							<input
								type="number"
								class="form-control"
								placeholder="mniej niż zero..."
								v-model="form.alcohol_volume"
							/>
						</div>
						<label
							for="exampleFormControlTextarea1"
							class="form-label"
							>Kraj pochodzenia</label
						>
						<select
							class="form-select mb-3"
							aria-placeholder="Rodzaj piwa"
							v-model="form.selectedCountry"
						>
							<option
								v-for="country in countries"
								:key="country.id"
								v-bind:value="country.id"
							>
								{{ country.name }}
							</option>
						</select>
						<label
							for="exampleFormControlTextarea1"
							class="form-label"
							>Rodzaj piwa</label
						>
						<select
							class="form-select"
							aria-label="Kraj pochodzenia"
							v-model="form.selectedType"
						>
							<option
								v-for="type in types"
								:key="type.id"
								v-bind:value="type.id"
							>
								{{ type.name }}
							</option>
						</select>
					</form>
				</div>
				<div class="modal-footer">
					<button
						type="button"
						class="btn btn-secondary"
						data-dismiss="modal"
					>
						Zamknij
					</button>
					<button
						type="button"
						class="btn btn-warning text-white"
						@click="
							submitBeer(form.selectedCountry, form.selectedType)
						"
					>
						Dodaj
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	name: "addbeerform",
	data() {
		return {
			form: {
				name: "",
				alcohol_volume: "",
				description: "",
				selectedCountry: "",
				selectedType: "",
			},
		};
	},
	computed: {
		...mapGetters({
			countries: "getCountriesBeers",
			types: "getTypesBeers",
		}),
	},
	props: {
		countries: {
			type: Object,
			required: true,
		},
		types: {
			type: Object,
			required: true,
		},
	},
	created() {
		this.$store.dispatch("retrieveCountriesBeer");
		this.$store.dispatch("retrieveTypesBeer");
	},
	methods: {
		submitBeer() {
			this.$store
				.dispatch("createBeer", {
					name: this.form.name,
					alcohol_volume: this.form.alcohol_volume,
					description: this.form.description,
					selectedCountry: this.form.selectedCountry,
					selectedType: this.form.selectedType,
				})
				.then(this.$router.push({ path: "/beers" }));
		},
	},
};
</script>
