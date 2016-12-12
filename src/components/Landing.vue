<template>
<div>
  <!-- <Galleria :img-data="imgObjs"></Galleria> -->
  <div class="landing-splash">
    <div class="mid">
      <img src="static/img/sws-logo-small.png">
      <h1>We Know Cabinets</h1>
      <div>
        <p>Commercial, new homes, renovations, and specialty projects.</p>
        <p>Servicing the South East US for 20+ years.</p>
      </div>
    </div>
  </div>
  <br>
  <Vendors></Vendors>
  <schedule-appt></schedule-appt>
</div>
</template>

<script>
import { carousel, slider } from 'vue-strap'
import Vendors from './Vendors'
import ScheduleAppt from './Contact/ScheduleAppt'
import Galleria from './Utils/Galleria'
export default {

  name: 'Landing',

  components: {
    carousel,
    slider,
    Vendors,
    ScheduleAppt,
    Galleria
  },

  mounted: function () {
    // this.$nextTick(function () {
    //   // code that assumes this.$el is in-document
    //   setTimeout(function () { this.showHeader = false }.bind(this), 2000)
    // })
  },

  data () {
    return {
      showHeader: false,
      imgObjs: [{
        image: 'static/img/carousels/landing/1-unknown.jpg',
        title: 'PERFORMANCE EXCELLENCE',
        description: 'HIGH QUALITY CABINETRY & SERVICE SINCE 2006'
      },
      {
        image: 'static/img/carousels/landing/2-unknown.jpg',
        title: 'RESIDENTIAL PRODUCTS',
        description: 'PROFESSIONAL HOME BATH AND KITCHEN DESIGN'
      },
      {
        image: 'static/img/multi/grand oaks at new smyrna tn.jpg',
        title: 'MULTIFAMILY PROJECTS',
        description: 'PROVEN CABINET AND COUNTER DELIVERY AND INSTALLATION'
      }]
    }
  }
}
</script>

<style lang="sass" scoped>
$breakpoint-sm-desktop: 1068px;
$breakpoint-tablet: 700px;
$breakpoint-phone: 480px;
$breakpoint-iphone6: 400px;

// HEADER
.landing-splash
  width: 100%;
  // height: 500px;
  @media(max-width: $breakpoint-tablet)
    height: 250px;
    h1
      font-size: 1em
    p
      font-size: 0.5em
  @media screen and (min-width: $breakpoint-tablet) and (max-width: $breakpoint-sm-desktop)
    height: 400px;
  @media screen and (min-width: $breakpoint-sm-desktop)
    height: 500px;
  background: linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url('/static/img/landing-splash-greenkitchen.jpg')
  background-size: cover;
  background-repeat: no-repeat;
  .mid
    font-weight: 900;
    color: white;
    margin: 0;
    padding-top: 7.5%;
    left: 50%;
    div
      font-size: 1.75rem;
      font-weight: 400;
      padding-top: 5%;

header
  background-color: red
  color: #fff
  text-align: center
  padding: 30px 0 90px

  h1
    text-align: center
    text-transform: uppercase
    font-size: 65px
    font-weight: 400
    letter-spacing: 3px
    line-height: .8
    padding-top: 50px

.slide-fade-up-enter-active
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0)
.slide-fade-up-leave-active
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0)
.slide-fade-up-enter, .slide-fade-up-leave-active
  padding-top: 10px
  opacity: 0
.fade-enter-active, .fade-leave-active
  transition: opacity .5s
.fade-enter, .fade-leave-active
  opacity: 0

h2
  color: #0a0a0a;
  text-align: center;
</style>