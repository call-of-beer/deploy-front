<template>
	<form class="commentform">
		<div class="mb-3">
			<label for="exampleFormControlTextarea1" class="form-label"
				>Dodaj komentarz</label
			>
			<textarea
				class="form-control"
				id="exampleFormControlTextarea1"
				rows="3"
				v-model="form.content"
			></textarea>
		</div>
		<div class="d-flex justify-content-end">
			<button
				type="button"
				class="btn btn-outline-warning waves-effect"
				@click="submitComment()"
			>
				Wyślij
			</button>
		</div>
	</form>
</template>

<script>
export default {
	name: "addcommentform",
	data() {
		return {
			form: {
				content: "",
			},
		};
	},
	methods: {
		async submitComment() {
			this.$store
				.dispatch("createComment", {
					content: this.form.content,
					id: this.$route.params.tastingId,
				})
		},
	},
};
</script>
