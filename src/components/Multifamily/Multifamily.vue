<template>
  <div class="Vue-Carousel">
    <!-- <h1>Residential Kitchens</h1> -->
    <div>
      <carousel-3d :width="windowWidth * .7" :height="windowHeight * .7" :controls-visible="true">
        <slide v-for="(pic, i) in Pics" :index="i">
          <img class="img-responsive" alt="custom multifamily new construction remodel" title="Multifamily"
               :src=pic.src>
          <figcaption>
            <h2>{{ pic.address }}</h2>
            <p>{{ pic.state }}</p>
          </figcaption>
        </slide>
      </carousel-3d>
    </div>
  </div>
</template>

<script>
  import { Carousel3d, Slide } from 'vue-carousel-3d'

  const imgSrc = 'static/img/multi/'
  export default {
    components: {
      Carousel3d,
      Slide
    },
    name: 'Multifamily',

    data () {
      return {
        windowWidth: 0,
        windowHeight: 0,
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

<style lang="css" scoped>
  .Vue-Carousel {
    padding: 0 60px;
    margin: 115px auto 0 auto;
  }

  .carousel-3d-container figure {
    margin:0;
  }

  .carousel-3d-container figcaption {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    bottom: 0;
    position: absolute;
    bottom: 0;
    padding: 15px;
    /*font-size: 2em;*/
    min-width: 100%;
    box-sizing: border-box;
  }
</style>
