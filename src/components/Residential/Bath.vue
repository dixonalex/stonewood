<template>
<div class="Vue-Carousel">
  <!-- <h1>Residential Kitchens</h1> -->
  <div>
    <carousel-3d :width="windowWidth * .7" :height="windowHeight * .7" :controls-visible="true">
      <slide v-for="(pic, i) in Pics" :index="i">
        <img class="img-responsive" alt="custom bath construction remodel residential" title="Residential Bath" :src=pic.src>
      </slide>
    </carousel-3d>
  </div>
</div>

</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d'
const bathSrc = 'static/img/residential/bath/'
export default {
  components: {
    Carousel3d,
    Slide
  },
  name: 'Bath',
  data () {
    return {
      windowWidth: 0,
      windowHeight: 0,
      Pics: [
        { src: bathSrc + '1_RMD_MPL_GLR_72M.jpg' },
        { src: bathSrc + '33_BPT_MPL_MID_72M.jpg' },
        { src: bathSrc + '44_SAV_MPL_SNDSLT_72M.jpg' }
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

.VueCarousel-slide {
  position: relative;
  // background: lightgray;
  color: #fff;
  font-family: Arial;
  font-size: 24px;
  text-align: center;
}

.VueCarousel-slide > img {
  display: contents;
  min-width: 75%;
  margin: 15px auto 0 auto;
}

.label {
  padding: none;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-100%, -50%);
}
</style>
