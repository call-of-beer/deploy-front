<template>
    <div class="col-md-4 mb-5">
        <div class="card h-100">
          <div class="card-body">
            <h2 class="card-title" v-text="myOwnGroup.name"></h2>
          </div>
          <div class="card-footer">
            <p @click="goToGroupDetail(myOwnGroup.id)" class="btn btn-primary btn-sm">More Info</p>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  props: {
    myOwnGroup: { type: Object, required: true }
  }
}
</script>
