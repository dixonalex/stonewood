// carousel.vue
<template>
  <carousel>
    <!-- <slider class="active">
      <img src="static/img/residential/photo3.jpg">
    </slider> -->
    <slider class="active">
      <img src="static/img/residential/photo4.jpg" alt="">
    </slider>
    <slider>
      <img src="static/img/residential/photo5.jpg" alt="">
    </slider>
  </carousel>
</template>

<script>
import { carousel, slider } from 'vue-strap'
export default {
  components: {
    carousel,
    slider
  },
  name: 'Residential',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
</style>