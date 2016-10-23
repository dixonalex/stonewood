<template>
<div>
  <carousel>
    <slider>
      <img src="https://placehold.it/1200x400?text=one">
      <div class="carousel-caption">
        ...
      </div>
    </slider>
    <slider>
      <img src="https://placehold.it/1200x400?text=two">
    </slider>
    <slider>
      <img src="https://placehold.it/1200x400?text=three">
    </slider>
  </carousel>
  <!-- <Vendors></Vendosrs>
  <Contact></Contact> -->
</div>
</template>

<script>
import { carousel, slider } from 'vue-strap'
export default {

  name: 'Landing',

  components: {
    carousel,
    slider
  },

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>