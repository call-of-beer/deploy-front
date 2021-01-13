<template>
	<div class="beers container">
		<div class="row">
			<div class="col-md-12 mb-5 border-bottom pb-3 mt-5 text-center">
				<h1 class="mt-5 mr-md-auto">Hold my beers</h1>

				<a
					type="button"
					style="color: #ffa900"
					data-toggle="modal"
					data-target="#exampleModal"
				>
					Dodaj piwo
				</a>
			</div>
		</div>
		<div class="row">
			<div class="col-12 col-md-3 d-flex flex-column border-right">
				<Countries />
				<TypesBeer />
			</div>
			<div class="col-12 col-md-9 d-flex flex-column">
				<div class="container-fluid">
					<BeerItem />
				</div>
			</div>
		</div>
		<AddBeerForm />
	</div>
</template>

<script>
import TypesBeer from "../components/TypesBeer";
import Countries from "../components/Countries";
import BeerItem from "../components/BeerItem";
import AddBeerForm from "../components/AddBeerForm";

export default {
	components: {
		TypesBeer,
		Countries,
		BeerItem,
		AddBeerForm,
	},
};
</script>

<style scoped>
.beers {
	width: 100vw;
	min-height: 100vh;
}
</style>
