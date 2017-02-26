<template>
<div class="Vue-Carousel">
  <!-- <h1>Residential Kitchens</h1> -->
  <div>
    <carousel :navigationEnabled="true" :perPage="1" :autoplayEnabled="true" :paginationPadding="5" >
      <slide v-for="pic in Pics">
        <img class="img-responsive" :src=pic.src>
        <span class="label">
        </span>
      </slide>
    </carousel>
  </div>
</div>
  
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
const bathSrc = 'static/img/residential/bath/'
export default {
  components: {
    Carousel,
    Slide
  },
  name: 'Kitchen',
  data () {
    return {
      Pics: [
        { src: bathSrc + '1_RMD_MPL_GLR_72M.jpg' },
        { src: bathSrc + '33_BPT_MPL_MID_72M.jpg' },
        { src: bathSrc + '44_SAV_MPL_SNDSLT_72M.jpg' }
      ]
    }
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