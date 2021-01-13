<template>
	<div
		class="modal fade"
		id="adduser"
		tabindex="-1"
		role="dialog"
		aria-labelledby="exampleModalLabel"
		aria-hidden="true"
	>
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header bg-warning text-white">
					<h5 class="modal-title" id="exampleModalLabel">
						Dodaj nowego użytkownika do grupy
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
								>Adres email użytkownika</label
							>
							<input
								class="form-control"
								placeholder="więcejniepije@gmail.com"
								v-model="form.email"
								type="email"
								name="email"
								id="defaultLoginFormEmail"
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
						@click="submitJoinUser()"
					>
						Dodaj
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "adduserform",
	data() {
		return {
			form: {
				email: "",
			},
		};
	},
	methods: {
		submitJoinUser() {
			this.$store
				.dispatch("joinUserToGroup", {
					email: this.form.email,
					id: this.$route.params.groupId,
				})
				.then((response) => {
					console.log(response);
					this.$router.push({ path: "/" });
				});
		},
	},
};
</script>
