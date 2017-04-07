<template>
  <div class="Vue-Carousel">
  <!-- <h1>Residential Kitchens</h1> -->
  <div>
    <carousel :navigationEnabled="true" :perPage="1" :autoplayEnabled="true" :paginationPadding="5" >
      <slide v-for="pic in Pics">
        <img class="img-responsive" alt="custom multifamily new construction remodel" :src=pic.src>
        <span class="label">
          <h2><span>{{ pic.address }}:<span class='spacer'></span></br><span class='spacer'></span>{{ pic.state }}</span></h2>
        </span>
      </slide>
    </carousel>
  </div>
</div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
const imgSrc = 'static/img/multi/'
export default {
  components: {
    Carousel,
    Slide
  },
  name: 'Multifamily',

  data () {
    return {
      Pics: [
        {
          src: imgSrc + '55 west orlando.jpg',
          address: '55 West',
          state: 'Orlando, FL'
        },
        {
          src: imgSrc + 'gaines-street-district-east-tally.jpg',
          address: 'Gaines Street District East',
          state: 'Tallahassee, FL'
        },
        {
          src: imgSrc + 'grand oaks at new smyrna tn.jpg',
          address: 'Grand Oaks',
          state: 'New Smyrna, TN'
        },
        {
          src: imgSrc + 'madison heights tampa.png',
          address: 'Madison Heights',
          state: 'Tampa, FL'
        },
        {
          src: imgSrc + 'resrve at knollwood blacksburg va.jpg',
          address: 'Reserve at Knollwood',
          state: 'Blackburg, VA'
        },
        {
          src: imgSrc + 'silos charlotte.jpg',
          address: 'Silos',
          state: 'Charlotte, NC'
        },
        {
          src: imgSrc + 'springs at greenville.jpg',
          address: 'Springs at Greenville',
          state: 'Greenville, NC'
        },
        {
          src: imgSrc + 'springs at tech ridge austin.jpg',
          address: 'Springs at Tech Ridge',
          state: 'Austin, TX'
        },
        {
          src: imgSrc + 'weatgate villas kissimmee.jpg',
          address: 'Westgate Villas. ',
          state: 'Kissimmee, FL'
        },
        {
          src: imgSrc + 'wiregrass san antonio.jpg',
          address: 'Wiregrass',
          state: 'San Antonio, TX'
        },
        {
          src: imgSrc + '111 south statesboro ga.jpg',
          address: '111 South Statesboro',
          state: 'Statesboro, TX'
        }
      ]
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

h2 span { 
   color: white; 
   font: bold 3.5vw Helvetica, Sans-Serif; 
   letter-spacing: -1px;  
   background: rgb(0, 0, 0); /* fallback color */
   background: rgba(0, 0, 0, 0.7);
   padding: 10px; 
}

h2 span.spacer {
   padding:0 5px;
}
</style>