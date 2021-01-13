<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-warning fixed-top">
		<div class="container">
			<div v-if="this.role === 'drinker'">
				<router-link to="/">
				call_of_beer</router-link>
			</div>
			<div v-if="this.role === 'admin'">
				<router-link to="/admin">
				call_of_beer</router-link>
			</div>
			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarResponsive"
				aria-controls="navbarResponsive"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarResponsive">
				<ul class="navbar-nav ml-auto" v-if="!loggedIn">
					<li class="nav-item active">
						<router-link to="/">
							<a class="nav-link" href="">Start </a></router-link
						>
					</li>
					<li class="nav-item active">
						<router-link to="/register">
							<a class="nav-link" href=""
								>Rejestracja
							</a></router-link
						>
					</li>
				</ul>
				<ul class="navbar-nav ml-auto" v-if="loggedIn">
					<li class="nav-item active" v-if="this.role === 'drinker'">
						<router-link to="/">
							<a class="nav-link" href=""
								>Twoje grupy
							</a></router-link
						>
					</li>
					<li class="nav-item active" v-if="this.role === 'drinker'">
						<router-link to="/beers">
							<a class="nav-link" href=""
								>Baza piw
							</a></router-link
						>
					</li>
					<li class="nav-item active" v-if="this.role === 'admin'">
						<router-link to="/admin">
							<a class="nav-link" href=""
								>Admin
							</a></router-link
						>
					</li>
					<li class="nav-item active" @click="signOut()">
						<p class="nav-link">Wyloguj się</p>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
	name: "Navbar",
	data() {
		return {
			role: sessionStorage.getItem('role')
		};
	},
	computed: {
		...mapGetters({
			loggedIn: "loggedIn",
			user: "user",
		}),
		...mapActions({
			signOutAction: "auth/logout",
		}),
	},
	methods: {
		signOut() {
			this.$store.dispatch("destroyToken")
			sessionStorage.removeItem('role')
		}
	},
};
</script>
