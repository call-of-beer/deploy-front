<template>
	<div class="beerdetail container py-5">
		<div class="row mt-5">
			<div class="col-12 col-md-4 d-flex flex-column">
				<div class="card mb-5 d-flex align-items-center">
					<div
						class="bg-image hover-overlay ripple"
						data-mdb-ripple-color="light"
					>
						<img
							src="../assets/av.png"
							class="img-fluid"
						/>
						<div
							class="mask"
							style="background-color: rgba(251, 251, 251, 0.15)"
						></div>
					</div>
					<h2
						class="mt-3 text-warning"
						v-for="getBeer in getBeer"
						:key="getBeer.id"
						:beer="getBeer"
					>
						{{ getBeer.name }}
					</h2>

					<div
						class="text-center mb-2 mt-1 border-bottom pb-2"
						v-for="getBeer in getBeer"
						:key="getBeer.id"
						:beer="getBeer"
					>
						<p>{{ getBeer.description }}</p>
					</div>
					<div
						v-for="getBeer in getBeer"
						:key="getBeer.id"
						:beer="getBeer"
					>
						<p style="font-size: 0.8rem">
							Zawartość alkoholu:
							{{ getBeer.alcohol_volume }} promila
						</p>
					</div>
					<div
						v-for="getBeer in getBeer"
						:key="getBeer.id"
						:beer="getBeer"
					>
						<p class="mt-n3" style="font-size: 0.8rem">
							Dodane przez: {{ getBeer.user.firstname }}
							{{ getBeer.user.surname }}
						</p>
					</div>
				</div>
			</div>
			<div class="col-12 col-md-8 mt-n3">
				<div class="container-fluid">
					<div class="row">
						<div class="col-12 d-flex flex-column py-5">
							<h3
								class="mb-3"
								v-for="getBeer in getBeer"
								:key="getBeer.id"
								:beer="getBeer"
							>
								Oceny piwa {{ getBeer.name }}
							</h3>
							<table class="table mb-5">
								<tbody
									v-for="getBeer in getBeer"
									:key="getBeer.id"
									:beer="getBeer"
								>
									<tr>
										<th scope="row">Aromat</th>
										<td>{{ getBeer.avgAroma }}</td>
									</tr>
									<tr>
										<th scope="row">Smak</th>
										<td>{{ getBeer.avgTaste }}</td>
									</tr>
									<tr>
										<th scope="row">Kolor</th>
										<td>{{ getBeer.avgColor }}</td>
									</tr>
									<tr>
										<th scope="row">Gorycz</th>
										<td>{{ getBeer.avgBitterness }}</td>
									</tr>
									<tr>
										<th scope="row">Tekstura</th>
										<td>{{ getBeer.avgTexture }}</td>
									</tr>
								</tbody>
								<tfoot
									v-for="getBeer in getBeer"
									:key="getBeer.id"
									:beer="getBeer"
								>
									<th scope="col">Podsumowanie</th>
									<th scope="col">
										{{ getBeer.overall }}
									</th>
								</tfoot>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.beerdetail {
	width: 100vw;
	min-height: 100vh;
}
</style>

<script>
import { mapGetters } from "vuex";
export default {
	name: "Beerdetails",
	computed: {
		...mapGetters({
			getBeer: "getBeer",
		}),
	},
	props: [
		"name",
		"alcohol_volume",
		"description",
		"avgAroma",
		"avgTaste",
		"avgColor",
		"avgBitterness",
		"avgTexture",
		"overall",
		"firstname",
		"surname",
	],
	mounted() {
		this.$store.dispatch("retrieveBeer", this.$route.params.beerId);
	},
};
</script>
