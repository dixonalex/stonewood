<template>
<div>
  <transition name="slide-fade-up">
    <header v-if="showHeader">
        <h1>StoneWood Sales</h1>
        <p>Kitchens, Bathrooms, Cabinets, Countertops</p>
    </header>
  </transition>
  <Gallery style="margin-top: 2.5%;" :img-objs="imgObjs"></Gallery>
  <br>
  <Vendors></Vendors>
  <schedule-appt></schedule-appt>
</div>
</template>

<script>
import { carousel, slider } from 'vue-strap'
import Vendors from './Vendors'
import ScheduleAppt from './Contact/ScheduleAppt'
import Gallery from './Utils/Gallery'
export default {

  name: 'Landing',

  components: {
    carousel,
    slider,
    Vendors,
    ScheduleAppt,
    Gallery
  },

  mounted: function () {
    this.$nextTick(function () {
      // code that assumes this.$el is in-document
      setTimeout(function () { this.showHeader = false }.bind(this), 2000)
    })
  },

  data () {
    return {
      showHeader: true,
      imgObjs: [{
        Src: 'static/images/carousels/landing/1-unknown.jpg',
        Title: 'PERFORMANCE EXCELLENCE',
        Description: 'HIGH QUALITY CABINETRY & SERVICE SINCE 2006',
        Display: true
      },
      {
        Src: 'static/images/carousels/landing/2-unknown.jpg',
        Title: 'RESIDENTIAL PRODUCTS',
        Description: 'PROFESSIONAL HOME BATH AND KITCHEN DESIGN',
        Display: false
      },
      {
        Src: 'static/images/multi/grand oaks at new smyrna tn.jpg',
        Title: 'MULTIFAMILY PROJECTS',
        Description: 'PROVEN CABINET AND COUNTER DELIVERY AND INSTALLATION',
        Display: false
      }]
    }
  }
}
</script>

<style lang="sass" scoped>
// HEADER
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
    font-family: 'Montserrat', sans-serif

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