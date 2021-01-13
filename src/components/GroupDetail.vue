<template>
	<div class="group-details">
		<div class="container mt-5 mb-3">
			<ndiv class="row">
				<div class="col-md-12 mb-5 border-bottom pb-3 mt-5 text-center">
					<h1
						class="mr-md-auto font-weight-bold"
						v-for="getGroup in getGroup"
						:key="getGroup.id"
						:getGroup="getGroup"
					>
						{{ getGroup.name }}
					</h1>
					<a
						type="button"
						style="color: #ffa900"
						data-toggle="modal"
						data-target="#exampleModal"
					>
						Utwórz degustację | 
					</a>
					<a
							type="button"
							style="color: #ffa900"
							data-toggle="modal"
							data-target="#adduser"
						>
							Dodaj użytkownika
						</a>
					<AddTastingForm />
				</div>
			</ndiv>

			<div class="row">
				<div class="col-12 col-md-3 d-flex flex-column border-right">
					<AddUserForm />
					<UserList />
				</div>
				<div class="col-12 col-md-9 d-flex flex-column">
					<div class="container-fluid">
						<div class="row">
							<div
								class="col-12 col-md-4"
								v-for="tasting in tastings"
								:key="tasting.id"
							>
								<div class="card mb-5 text-center">
									<div class="card-body">
										<h5
											class="card-title font-weight-bold pb-2 border-bottom"
										>
											{{ tasting.title }}
											<div
												class="text-center mb-2 mt-1 font-weight-light"
												style="font-size: 0.8rem"
											>
												<p class="my-auto">
													Dodano:
													{{ tasting.created_at }}
												</p>
											</div>
										</h5>

										<p
											class="card-text font-weight-light mx-auto"
										>
											{{ tasting.description }}
										</p>
									</div>

									<div class="mb-3 mt-3">
										<p
											@click="
												goToTastingDetail(tasting.id)
											"
											class="btn btn-warning mx-auto text-white"
											style="font-size: 0.8rem"
										>
											<i
												class="fas fa-angle-right left mr-2"
											></i>
											więcej
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.group-details {
	min-height: 100vh;
}
</style>

<script>
import { mapGetters } from "vuex";
import AddTastingForm from "../components/AddTastingForm";
import AddUserForm from "../components/AddUserForm";
import UserList from "../components/UserList";
import { AclRule } from "vue-acl";

export default {
	name: "Group Details",
	components: {
		AddTastingForm,
		AddUserForm,
		UserList,
	},
	computed: {
		isLocalRule() {
			return new AclRule("drinker").generate();
		},
		...mapGetters({
			getGroup: "getGroup",
			tastings: "getTastings",
			getGroupUsers: "getGroupUsers",
		}),
	},
	props: ["name"],
	mounted() {
		this.$store.dispatch("retrieveGroup", this.$route.params.groupId);
	},
	created() {
		this.$store.dispatch("retrieveTastings", this.$route.params.groupId);
		this.$store.dispatch("retrieveGroupUsers", this.$route.params.groupId);
	},
	methods: {
		goToTastingDetail(id) {
			this.$router.push({
				name: "TastingDetail",
				params: {
					tastingId: id,
				},
			});
		},
	},
};
</script>
