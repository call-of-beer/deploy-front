<template class="bg-white">
	<div class="container">
		<div class="row justify-content-center mt-5">
			<div class="col-lg-7">
				<div class="card shadow-lg border-0 rounded-lg mt-5">
					<div class="card-header bg-warning">
						<h3
							class="text-center text-white font-weight-light my-4"
						>
							<dt>
								<i class="fas fa-beer mr-2"></i>Stwórz konto
							</dt>
						</h3>
					</div>
					<div class="card-body">
						<form @submit.prevent="register">
							<div class="form-row">
								<div class="col-md-6">
									<div class="form-group">
										<label
											class="small mb-1"
											for="inputFirstName"
											>Podaj imię</label
										><input
											class="form-control py-4"
											id="inputFirstName"
											type="text"
											placeholder="Imie"
											v-model="form.firstname"
										/>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label
											class="small mb-1"
											for="inputLastName"
											>Nazwisko</label
										><input
											class="form-control py-4"
											id="inputLastName"
											type="text"
											placeholder="Nazwisko"
											v-model="form.surname"
										/>
									</div>
								</div>
							</div>
							<div class="form-group">
								<label
									class="small mb-1"
									for="inputEmailAddress"
									>Wprowadź email</label
								><input
									class="form-control py-4"
									id="inputEmailAddress"
									type="email"
									aria-describedby="emailHelp"
									placeholder="E-mail"
									v-model="form.email"
								/>
							</div>
							<div class="form-row">
								<div class="col-md-6">
									<div class="form-group">
										<label
											class="small mb-1"
											for="inputPassword"
											>Hasło</label
										><input
											class="form-control py-4"
											id="inputPassword"
											type="password"
											placeholder="Hasło"
											v-model="form.password"
										/>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label
											class="small mb-1"
											for="inputConfirmPassword"
											>Potwierdź hasło</label
										><input
											class="form-control py-4"
											id="inputConfirmPassword"
											type="password"
											placeholder="Potwierdź hasło"
											v-model="form.password_confirmation"
										/>
									</div>
								</div>
							</div>
							<div
								class="form-group d-flex justify-content-center mt-2 mb-2"
							>
								<button
									type="submit"
									class="btn btn-warning text-white"
								>
									Zarejestruj się
								</button>
							</div>
						</form>
					</div>
					<div class="card-footer text-center bg-dark">
						<router-link to="/"
							><div class="small">
								<a href="" style="color: white"
									>Posiadasz konto? Zaloguj się!</a
								>
							</div></router-link
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "registerform",
	data() {
		return {
			form: {
				firstname: "",
				surname: "",
				email: "",
				password: "",
				password_confirmation: "",
			},
		};
	},
	methods: {
		register() {
			this.$store
				.dispatch("register", {
					firstname: this.form.firstname,
					surname: this.form.surname,
					email: this.form.email,
					password: this.form.password,
					password_confirmation: this.form.password_confirmation,
				})
				.then((response) => {
					console.log(response)
					this.$router.push({
						path: "/",
					});
				});
		},
	},
};
</script>
