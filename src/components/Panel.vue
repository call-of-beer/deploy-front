<template>
	<div class="container pt-5 hello">
		<div class="row">
			<div class="col-md-12 mb-5 border-bottom pb-3 mt-5 text-center">
				<h1 class="mr-md-auto">Twoje grupy</h1>
				<a
					type="button"
					style="color: #ffa900"
					data-toggle="modal"
					data-target="#exampleModal"
				>
					Utwórz grupę
				</a>
				<AddGroupForm />
			</div>
		</div>
		<!-- Content Row -->
		<div class="row">
			<div
				class="col-md-6"
				v-for="myOwnGroup in myOwnGroups"
				:key="myOwnGroup.id"
				:myOwnGroup="myOwnGroup"
			>
				<div class="card mb-3 d-flex align-items-center">
					<div class="text-white text-center rgba-indigo-strong">
						<div>
							<h6 class="card-title text-warning pt-3">
								<i class="fas fa-beer ml-2"></i>
							</h6>
							<h3 class="card-title text-black">
								<strong>{{ myOwnGroup.name }}</strong>
							</h3>

							<p class="text-dark">
								Wejdź aby dodawać użytkowników i tworzyć
								degustacje piw!
							</p>
							<p class="text-dark" style="font-size: 0.8rem">
								Grupa została utworzona:
								{{ myOwnGroup.created_at }}
							</p>
							<div class="ml-auto">
								<p
									@click="goToGroupDetail(myOwnGroup.id)"
									class="btn btn-warning mr-3 text-white"
									style="font-size: 0.8rem"
								>
									<i class="fas fa-angle-right left mr-2"></i>
									więcej
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- /.col-md-4 -->
		</div>
		<!-- /.row -->
	</div>
</template>

<style scoped>
.hello {
	min-height: 100vh;
}
</style>

<script>
import { mapGetters } from "vuex";
import AddGroupForm from "../components/AddGroupForm";

export default {
	name: "panel",
	components: {
		AddGroupForm
	},
	computed: {
		...mapGetters({
			myOwnGroups: "myOwnGroups",
		}),
	},
	props: {
		myOwnGroup: {
			type: Object,
			required: true,
		},
	},
	created() {
		this.$store.dispatch("retrieveOwnGroups");
	},
	methods: {
		goToGroupDetail(id) {
			this.$router.push({
				name: "Group Details",
				params: {
					groupId: id,
				},
			});
		},
		removeGroup(id) {
			this.$store.dispatch("removeGroup", id);
		},
	},
};
</script>

<style scoped>
.hello {
	overflow-x: hidden;
}
</style>
