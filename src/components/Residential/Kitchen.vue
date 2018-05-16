<template>
<div class="Vue-Carousel">
  <!-- <h1>Residential Kitchens</h1> -->
  <div>
    <carousel-3d :width="windowWidth * .7" :height="windowHeight * .7" :controls-visible="true">
      <slide v-for="(pic, i) in Pics" :index="i">
        <img alt="custom kitchen construction remodel residential" title="Residential Kitchen" :src=pic.src>
      </slide>
    </carousel-3d>
  </div>
</div>

</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d'
const kitchenSrc = 'static/img/residential/kitchen/'
export default {
  components: {
    Carousel3d,
    Slide
  },
  name: 'Kitchen',
  data () {
    return {
      windowWidth: 0,
      windowHeight: 0,
      Pics: [
        { src: kitchenSrc + 'woodharbor_dorgan-069521.jpg' },
        { src: kitchenSrc + 'woodharbor_manchester-087110.jpg' },
        { src: kitchenSrc + 'woodharbor_wausau-105432.jpg' },
        { src: kitchenSrc + 'woodharbor_8-15_17816.jpg' },
        { src: kitchenSrc + 'wh_rg_beadedinset-overview_081625.jpg' },
        { src: kitchenSrc + 'tdw3908.jpg' },
        { src: kitchenSrc + 'kitchen2.jpg' },
        { src: kitchenSrc + 'demro-kitchen.jpg' }
      ]
    }
  },
  mounted () {
    this.$nextTick(function () {
      window.addEventListener('resize', this.getWindowWidth)
      window.addEventListener('resize', this.getWindowHeight)

      // Init
      this.getWindowWidth()
      this.getWindowHeight()
    })
  },

  methods: {
    getWindowWidth (event) {
      this.windowWidth = document.documentElement.clientWidth
    },

    getWindowHeight (event) {
      this.windowHeight = document.documentElement.clientHeight
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.getWindowWidth)
    window.removeEventListener('resize', this.getWindowHeight)
  }
}
</script>

<style lang="scss" scoped>
.Vue-Carousel {
  padding: 0 60px;
  margin: 115px auto 0 auto;
}

.carousel-3d-container figure{
  margin: 0;
}
</style>
