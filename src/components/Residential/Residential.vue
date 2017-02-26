<template>
<div id="residential" style="padding-top: 100px">
  <div class="row">
    <div class="col-md-6">
      <h1>Kitchens</h1>
      <router-link tag="img" id="kitchen-img" src="static/img/residential/kitchen/brittan1@0,5x.jpg" class="img-responsive" to="/residential/kitchen"></router-link>
    </div>
    <div class="col-md-6">
      <h1>Baths</h1>
      <router-link tag="img" id="kitchen-img" src="static/img/residential/bath/EST_INS_RHS_CDF_MPL_CAF_72m.jpg" class="img-responsive" to="/residential/bath"></router-link>
    </div>
  </div>
</div>
</template>

<script>
import Kitchen from './Kitchen'
export default {
  components: {
    Kitchen
  },
  name: 'Residential',
  data () {
    return {
      types: ['kitchen', 'bath'],
      typeFlag: ''
    }
  }
}
</script>

<style lang="scss" scoped>
#kitchen-img {
  margin:0 auto;
  cursor: pointer;
}
</style>