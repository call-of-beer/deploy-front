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
			<div class="modal-content d-flex justify-content-end">
				<div class="modal-header bg-warning text-white">
					<h5 class="modal-title" id="exampleModalLabel">
						Stwórz nową grupę piwoszu!
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
								>Nazwa grupy</label
							>
							<input
								type="text"
								class="form-control text-center"
								placeholder="Abstynenci..."
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
	name: "AddGroupForm",
	data() {
		return {
			form: {
				name: "",
			},
		};
	},
	methods: {
		submitGroup() {
			this.$store
				.dispatch("createGroup", {
					name: this.form.name,
				})
				.then((response) => {
					console.log(response);
					this.$router.push({ path: "/" });
				});
		},
	},
};
</script>
