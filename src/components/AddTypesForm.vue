<template>
	<div
		class="modal fade"
		id="addType"
		tabindex="-1"
		role="dialog"
		aria-labelledby="exampleModalLabel"
		aria-hidden="true"
	>
		<div class="modal-dialog" role="document">
			<div class="modal-content d-flex justify-content-end">
				<div class="modal-header bg-warning text-white">
					<h5 class="modal-title" id="exampleModalLabel">
						Dodaj rodzaj piwa
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
								placeholder="Lager..."
								v-model="form.name"
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
	name: "AddTypesForm",
	data() {
		return {
			form: {
                name: ""
			}
		};
	},
	methods: {
		submitGroup() {
			this.$store
				.dispatch("createType", {
                    name: this.form.name
				})
		}
	}
};
</script>
