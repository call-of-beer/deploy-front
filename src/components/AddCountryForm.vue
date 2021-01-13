<template>
	<div
		class="modal fade"
		id="addCountry"
		tabindex="-1"
		role="dialog"
		aria-labelledby="exampleModalLabel"
		aria-hidden="true"
	>
		<div class="modal-dialog" role="document">
			<div class="modal-content d-flex justify-content-end">
				<div class="modal-header bg-warning text-white">
					<h5 class="modal-title" id="exampleModalLabel">
						Dodaj kraj pochodzenia
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
								>Podaj nazwę</label
							>
							<input
								type="text"
								class="form-control text-center"
								placeholder="Polska!!!111..."
								v-model="form.name"
							/>
						</div>
                        <div class="mb-3">
							<label
								for="exampleFormControlInput1"
								class="form-label"
								>Podaj skrót</label
							>
							<input
								type="text"
								class="form-control text-center"
								placeholder="PL"
								v-model="form.shortcut"
							/>
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
						@click="submitGroup()"
					>
						Utwórz
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "AddGroupForm",
	data() {
		return {
			form: {
                name: "",
                shortcut: ""
			},
		};
	},
	methods: {
		submitGroup() {
			this.$store
				.dispatch("createCountry", {
                    name: this.form.name,
                    shortcut: this.form.shortcut,
				})
		}
	}
};
</script>
