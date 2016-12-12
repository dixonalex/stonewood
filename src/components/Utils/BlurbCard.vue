<template>
<div class="card-outline">
  <img :src="imgSrc" class="img-repsonsive">
  <strong>{{ name }}</strong>
  <span>{{ title }}</span>
</div>
</template>

<script>
export default {

  name: 'BlurbCard',

  props: ['imgSrc', 'title', 'name'],

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.card-outline {
  width: 150px;
  height: 243px;
  .active {
    box-shadow: 0px 0px 10px 5px lightgray;
  }
  strong, span {
    line-height: 2;
  }
}
strong, span {
  display: block;
}
</style>