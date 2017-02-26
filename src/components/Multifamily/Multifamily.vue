<template>
  <div class="Vue-Carousel">
    <carousel :navigationEnabled="true" :perPage="1" :autoplayEnabled="true" :paginationPadding="5">
      <slide>
        <img class="img-responsive" src="static/img/multi/55 west orlando.jpg">
        <div class="label">
          <h1>55 West</h1>
          <h3>Orlando, FL</h3>
        </div>
      </slide>
      <slide>
        <img class="img-responsive" src="static/img/multi/gaines-street-district-east-tally.jpg">
        <div class="label">
          <h1>Gaines Street District East</h1>
          <h3>Talahassee, FL</h3>
        </div>
      </slide>
      <slide>
        <img class="img-responsive" src="static/img/multi/grand oaks at new smyrna tn.jpg">
        <div class="label">
          <h1>Grand Oaks</h1>
          <h3>New Smyrna, TN</h3>
        </div>
      </slide>

      <slide>
        <img class="img-responsive" src="static/img/multi/madison heights tampa.png">
        <div class="label">
          <h1>Madison Heights</h1>
          <h3>Tampa, FL</h3>
        </div>
      </slide>

      <!-- <slide>
        <img class="img-responsive" src="static/img/multi/NC_Kannapolis_IntegraSprings_.jpg">
        <div class="label">
          <h1>Integra Springs</h1>
            <h3>Kannapolis, NC</h3>
        </div>
      </slide> -->

      <slide>
        <img class="img-responsive" src="static/img/multi/resrve at knollwood blacksburg va.jpg">
        <div class="label">
          <h1>Reserve at Knollwood</h1>
          <h3>Blacksburg, VA</h3>
        </div>
      </slide>

      <slide>
        <img class="img-responsive" src="static/img/multi/silos charlotte.jpg">
        <div class="label">
          <h1>Silos</h1>
          <h3>Charlotte, NC</h3>
        </div>
      </slide>

      <slide>
        <img class="img-responsive" src="static/img/multi/springs at greenville.jpg">
        <div class="label">
          <h1>Springs at Greenville</h1>
          <h3>Greenville, NC</h3>
        </div>
      </slide>

      <slide>
        <img class="img-responsive" src="static/img/multi/springs at tech ridge austin.jpg">
        <div class="label">
          <h1>Springs at Tech Ridge</h1>
          <h3>Austin, TX</h3>
        </div>
      </slide>

      <slide>
        <img class="img-responsive" src="static/img/multi/weatgate villas kissimmee.jpg">
        <div class="label">
          <h1>Westgate Villas</h1>
            <h3>Kissimmee, FL</h3>
        </div>
      </slide>

      <slide>
        <img class="img-responsive" src="static/img/multi/wiregrass san antonio.jpg">
        <div class="label">
          <h1>Wiregrass</h1>
          <h3>San Antonio, TX</h3>
        </div>
      </slide>

      <slide>
        <img class="img-responsive" src="static/img/multi/111 south statesboro ga.jpg">
        <div class="label">
          <h1>111 South</h1>
          <h3>Statesboro, GA</h3>>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
export default {
  components: {
    Carousel,
    Slide
  },
  name: 'Multifamily',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
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
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>