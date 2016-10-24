<template>
<div class="container col-md-offset-3">
  <form>
    <div class="input-group">
      <input type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1">
    </div>

    <div class="input-group">
      <input type="text" class="form-control" placeholder="Recipient's username" aria-describedby="basic-addon2">
    </div>

    <div class="input-group">
      <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
    </div>
    
    <div class="input-group">
      <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
    </div>
  </form>
</div>
</template>

<script>
export default {

  name: 'Contact',
  components: {
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="css" scoped>
form {
  /*width: 50%;*/
}
input {
  margin-top: 10px;
}
</style>