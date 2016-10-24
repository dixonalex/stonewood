<template>
  <carousel>
    <slider class="active">
      <img src="static/images/multi/55 west orlando.jpg">
      <div class="carousel-caption">
        <h1>55 West</h1>
        <h3>Orlando, FL</h3>
      </div>
    </slider>
    <slider>
      <img src="static/images/multi/gaines-street-district-east-tally.jpg">
      <div class="carousel-caption">
        <h1>Gaines Street District East</h1>
        <h3>Talahassee, FL</h3>
      </div>
    </slider>
    <slider>
      <img src="static/images/multi/grand oaks at new smyrna tn.jpg">
      <div class="carousel-caption">
        <h1>Grand Oaks</h1>
        <h3>New Smyrna, TN</h3>
      </div>
    </slider>

    <slider>
      <img src="static/images/multi/madison heights tampa.png">
      <div class="carousel-caption">
        <h1>Madison Heights</h1>
        <h3>Tampa, FL</h3>
      </div>
    </slider>

    <slider>
      <img src="static/images/multi/NC_Kannapolis_IntegraSprings_.jpg">
      <div class="carousel-caption">
        <h1>Integra Springs</h1>
          <h3>Kannapolis, NC</h3>
      </div>
    </slider>

    <slider>
      <img src="static/images/multi/resrve at knollwood blacksburg va.jpg">
      <div class="carousel-caption">
        <h1>Reserve at Knollwood</h1>
        <h3>Blacksburg, VA</h3>
      </div>
    </slider>

    <slider>
      <img src="static/images/multi/silos charlotte.jpg">
      <div class="carousel-caption">
        <h1>Silos</h1>
        <h3>Charlotte, NC</h3>
      </div>
    </slider>

    <slider>
      <img src="static/images/multi/springs at greenville.jpg">
      <div class="carousel-caption">
        <h1>Springs at Greenville</h1>
        <h3>Greenville, NC</h3>
      </div>
    </slider>

    <slider>
      <img src="static/images/multi/springs at tech ridge austin.jpg">
      <div class="carousel-caption">
        <h1>Springs at Tech Ridge</h1>
        <h3>Austin, TX</h3>
      </div>
    </slider>

    <slider>
      <img src="static/images/multi/weatgate villas kissimmee.jpg">
      <div class="carousel-caption">
        <h1>Westgate Villas</h1>
          <h3>Kissimmee, FL</h3>
      </div>
    </slider>

    <slider>
      <img src="static/images/multi/wiregrass san antonio.jpg">
      <div class="carousel-caption">
        <h1>Wiregrass</h1>
        <h3>San Antonio, TX</h3>
      </div>
    </slider>

    <slider>
      <img src="static/images/multi/111 south statesboro ga.jpg">
      <div class="carousel-caption">
        <h1>111 South</h1>
        <h3>Statesboro, GA</h3>>
      </div>
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
  name: 'Multifamily',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>