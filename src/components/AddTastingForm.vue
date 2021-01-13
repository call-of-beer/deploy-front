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
						Stwórz nową degustację
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
								>Nazwa degustacji</label
							>
							<input
								type="text"
								class="form-control text-center"
								placeholder="Degustacja abstynentów..."
								v-model="form.title"
							/>
						</div>
						<div class="mb-3">
							<label
								for="exampleFormControlTextarea1"
								class="form-label"
								>Opis</label
							>
							<textarea
								class="form-control text-center"
								id="exampleFormControlTextarea1"
								rows="3"
								placeholder="Najlepsza degustacja na świecie. Ze mną się nie napijecie?!?!"
								v-model="form.description"
							></textarea>
						</div>
						<div class="mb-3">
							<label
								for="exampleFormControlTextarea1"
								class="form-label"
								>Baza piw</label
							>
							<select
								class="form-select mb-3"
								aria-placeholder="Rodzaj piwa"
								v-model="form.selectedBeer"
							>
								<option
									v-for="beer in beers"
									:key="beer.id"
									v-bind:value="beer.id"
								>
									{{ beer.name }}
								</option>
							</select>
						</div>
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
						@click="submitTasting()"
					>
						Utwórz
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	name: "AddTastingForm",
	data() {
		return {
			form: {
				title: "",
				description: "",
				selectedBeer: "",
			},
		};
	},
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
		console.log(this.$route.params.groupId);
	},
	methods: {
		submitTasting() {
			this.$store
				.dispatch("createTasting", {
					title: this.form.title,
					description: this.form.description,
					id: this.$route.params.groupId,
					selectedBeer: this.form.selectedBeer,
				})
				.then((response) => {
					console.log(response);
					this.$router.push({ path: "/" });
				});
		},
	},
};
</script>
