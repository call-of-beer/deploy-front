<template>
	<div class="container my-5 py-5 admin">
		<div class="row">
			<div class="col-12 border-bottom pt-2 text-center mt-2 pb-4">
				<h2>Witaj adminie</h2>
			</div>
		</div>

		<div class="row">
			<div class="col-12 col-md-4">
				<div class="card my-5 w-100">
					<div class="card-body d-flex flex-column">
						<h5 class="card-title text-center mb-4">
							<i class="fas fa-user-friends mr-2"></i>Użytkownicy
						</h5>
						<div class="d-flex justify-content-center">
							<router-link to="/admin/users">
								<a
									class="btn btn-warning text-white mx-auto"
									href=""
									>Sprawdź
								</a></router-link
							>
						</div>
					</div>
				</div>
			</div>
			<div class="col-12 col-md-4">
				<div class="card my-5 w-100">
					<div class="card-body d-flex flex-column">
						<h5 class="card-title mb-3 text-center mb-4">
							<i class="fas fa-beer mr-2"></i> Rodzaje piw
						</h5>
						<div class="d-flex justify-content-center">
							<router-link to="/admin/types">
								<a
									class="btn btn-warning text-white mx-auto"
									href=""
									>Sprawdź
								</a></router-link
							>
						</div>
					</div>
				</div>
			</div>
			<div class="col-12 col-md-4">
				<div class="card my-5 w-100">
					<div class="card-body d-flex flex-column">
						<h5 class="card-title mb-3 text-center mb-4">
							<i class="fas fa-map-marker mr-2"></i>Kraje
							pochodzenia
						</h5>
						<div class="d-flex justify-content-center">
							<router-link to="/admin/countries">
								<a
									class="btn btn-warning text-white mx-auto"
									href=""
									>Sprawdź
								</a></router-link
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.admin {
	width: 100vw;
	min-height: 100vh;
}
</style>
