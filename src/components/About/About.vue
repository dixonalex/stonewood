<template>
<div class="about">
  <img src="static/img/about/about_splash.jpg" class="splash-img">
  <div class="blurb-lightgray">
    <div class="container">
      <div class="col-md-10 col-md-offset-1">
        <h1>StoneWood Cabinetry</h1>
        <h4>Built with you in mind.</h4>
        <p>Our goal is to be able to provide honest, high quality, affordable cabinetry and countertops directly to homeowners and industry professionals alike. Our product line has broadened to include cabinetry and storage solutions to help you maximize your total home living space. Our ability to provide the latest interior products along with professional design & installation, and even construction services on everything from cabinetry, countertops,and appliances makes us the one-stop shop. We stand behind our work and would love to help you complete your next amazing project!</p> 
      </div>
    </div>
  </div>
  <div class="blurb-white">
    <div class="container">
      <h1>Meet Our Team</h1>
      <p class="col-md-8 col-md-offset-2">One of our core values is to provide the most advanced, high quality cabinet we can possibly offer. You can expect the same kind of precision from our customer service and sales staff. We'd love to help you with your project!</p>
      <div class="contacts">
        <div v-for="contact in contacts" class="circleParent">
          <blurb-card :img-src="contact.imgPath" :title="contact.title" :name="contact.name"></blurb-card>
        </div>
      </div>
    </div>
  </div> 
</div>
</template>

<script>
import BlurbCard from '../Utils/BlurbCard'
export default {

  name: 'About',

  components: {
    BlurbCard
  },

  data () {
    return {
      contacts: [
        {
          name: 'Rhon Dixon',
          title: 'Design & Sales',
          email: 'mailto:@stonewoodsales.com',
          phone: 'tel:386-237-3178',
          imgPath: 'static/img/about/rhonda.jpg'
        },
        {
          name: 'Susie Dixon',
          title: 'Interior Design',
          email: 'mailto:sdixon@stonewoodsales.com',
          phone: 'tel:386-679-7623',
          imgPath: 'static/img/about/susie.jpg'
        },
        {
          name: 'Skyler Dixon',
          title: 'Building Specialist',
          email: 'mailto:sdixon@stonewoodsales.com',
          phone: 'tel:386-679-7623',
          imgPath: 'static/img/about/sky.jpg'
        },
        {
          name: 'Oliver Wilabus',
          title: 'Multi-Family',
          email: 'mailto:smarcio@stonewoodsales.com',
          phone: 'tel:386-931-1615',
          imgPath: 'static/img/about/oliver.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .splash-img{
    width: 100%;
    height: 350px;
  }
  h1 { padding: 1.5%; }
  .blurb-lightgray {
    background-color: #f9f9f9;
    .container
    {
      padding-bottom: 2%;
      h4, p {
        color: #656b6f;
        padding-bottom: 2.5%;
        line-height: 2;
      }
      p {
        text-align: left;
      }
    }
  }
  .blurb-white {
    background-color: white;
    .container {
      p {
        font-size: 1.2em;
        color: #656b6f;
        padding-bottom: 10%;
      }
    }
  }
  .circleParent {
    vertical-align: top;
    margin: 0 2.5%;
    display: inline-block;
    *display: inline;
    zoom: 1
  }
</style>