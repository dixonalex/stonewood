<template>
<div>
  <carousel>
    <slider class="active">
      <img src="static/images/carousels/landing/1-unknown.jpg">
      <div class="carousel-caption">
        <h1>PERFORMANCE EXCELLENCE</h1>
        <p>HIGH QUALITY CABINETRY & SERVICE SINCE 2006</p>          
        <router-link to="/about" class="btn btn-primary btn-lg" role="button">SEE MORE</router-link>
      </div>
    </slider>
    <slider>
      <img src="static/images/carousels/landing/2-unknown.jpg">
      <div class="carousel-caption">
        <h1>RESIDENTIAL PRODUCTS</h1>
          <p>PROFESSIONAL HOME BATH AND KITCHEN DESIGN</p>    
        <router-link to="/residential" class="btn btn-primary btn-lg" role="button">SEE MORE</router-link>
      </div>
    </slider>
    <slider>
      <img src="static/images/multi/grand oaks at new smyrna tn.jpg">
      <div class="carousel-caption">
        <h1>MULTIFAMILY PROJECTS</h1>
        <p>PROVEN CABINET AND COUNTER DELIVERY AND INSTALLATION</p>        
        <router-link to="/multifamily" class="btn btn-primary btn-lg" role="button">SEE MORE</router-link>
      </div>
    </slider>
  </carousel>
  <Vendors></Vendors>
  <schedule-appt></schedule-appt>
</div>
</template>

<script>
import { carousel, slider } from 'vue-strap'
import Vendors from './Vendors'
import ScheduleAppt from './Contact/ScheduleAppt'
export default {

  name: 'Landing',

  components: {
    carousel,
    slider,
    Vendors,
    ScheduleAppt
  },

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
 .carousel-image { min-height: 300px; }
 .carousel-inner>.item>img {
     width: 100%; 
}
.carousel-caption {
    position: absolute;
    top: 200px;
    -webkit-box-align: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    height: 100%;
}
</style>