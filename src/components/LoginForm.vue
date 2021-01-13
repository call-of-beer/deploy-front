<template>
	<div class="container mt-5 mb-5 loginpage d-flex flex-column">
		<div class="row justify-content-center d-flex my-auto">
			<div
				class="col-md-6 border-right d-flex align-items-center justify-content-end"
			>
				<img alt="Vue logo" class="m-5 w-50" src="../assets/logo.png" />
			</div>
			<div
				class="col-md-6 d-flex align-items-center justify-content-start"
			>
				<div class="card m-5">
					<form
						action="#!"
						class="text-center border border-light p-5"
						@submit.prevent="login"
					>
						<p class="h4 mb-4">Zaloguj się</p>
						<input
							type="email"
							name="email"
							placeholder="E-mail"
							id="defaultLoginFormEmail"
							v-model="form.email"
							class="form-control mb-4"
						/>
						<input
							type="password"
							name="password"
							placeholder="Hasło"
							id="defaultLoginFormPassword"
							v-model="form.password"
							class="form-control mb-4"
						/>
						<div class="d-flex justify-content-around">
							<div>
								<div class="custom-control custom-checkbox">
									<input
										type="checkbox"
										class="custom-control-input"
										id="defaultLoginFormRemember"
									/>
									<label
										for="defaultLoginFormRemember"
										class="custom-control-label pl-1 pr-3"
										>Zapamiętaj</label
									>
								</div>
							</div>
							<div>
								<a href="" style="color: #00695c"
									>Zapomniałeś hasła?</a
								>
							</div>
						</div>
						<button
							type="submit"
							class="btn btn-warning btn-block my-4 text-white"
						>
							Zaloguj się
						</button>
						<p>
							Nie jesteś z nami?
							<router-link to="/register">
								<a href="" style="color: #00695c"
									>Zarejestruj się</a
								>
							</router-link>
						</p>
						<p class="mt-n4 pb-3">lub zaloguj z:</p>
						<a href="#" class="mx-2" role="button"
							><i
								class="fab fa-facebook-f"
								style="color: #00695c"
							></i
						></a>
						<a href="#" class="mx-2" role="button"
							><i class="fab fa-google" style="color: #00695c"></i
						></a>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.loginpage {
	min-height: 100vh;
}
</style>

<script>
export default {
	name: "login",
	components: {
		//
	},
	data() {
		return {
			form: {
				email: "",
				password: "",
			},
		};
	},
	methods: {
		login() {
			this.$store
				.dispatch("retrieveToken", {
					email: this.form.email,
					password: this.form.password,
				})
				.then((response) => {
					console.log(response)	
				});
		},
	},
};
</script>
