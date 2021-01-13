<template>
	<div class="container my-5 py-5 types">
		<div class="row">
			<div class="col-12">
				<p
					class="btn btn-warning text-white mt-2 mr-2"
					style="font-size: 0.8rem; color: #ffa900"
					type="button"
					data-toggle="modal"
					data-target="#addType"
				>
					<i class="fas fa-plus mr-2"></i>
					dodaj
				</p>
			</div>
		</div>
		<div class="row">
			<div class="col-12">
				<table class="table">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">First</th>
							<th scope="col">Utworzono</th>
							<th scope="col">Akcja</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="type in types" :key="type.id" :types="types">
							<th scope="row">{{ type.id }}</th>
							<td>{{ type.name }}</td>
							<td>{{ type.created_at }}</td>
							<td>
								<p
									class="btn btn-dark text-white mt-2 mr-2"
									style="font-size: 0.8rem"
									@click="removeType(type.id)"
								>
									<i class="fas fa-trash left mr-2"></i>
									usuń
								</p>
							</td>
						</tr>
					</tbody>
				</table>
				<AddTypesForm/>
			</div>
		</div>
	</div>
</template>

<style scoped>
.types {
	width: 100vw;
	min-height: 100vh;
}
</style>

<script>
import { mapGetters } from "vuex";
import AddTypesForm from '../components/AddTypesForm'
export default {
	name: "typebeer",
	computed: {
		...mapGetters({
			types: "getTypesBeers",
		}),
	},
	components: {
		AddTypesForm
	},
	created() {
		this.$store.dispatch("retrieveTypesBeer");
	},
	methods: {
		goToTypeBeerDetail(id) {
			this.$router.push({
				name: "TypeBeerDetail",
				params: {
					typeId: id,
				},
			});
		},
		removeType(id) {
			this.$store.dispatch("removeType", id);
		}
	},
};
</script>
