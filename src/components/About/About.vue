<template>
  <div class="container">
    <div class="col-md-10 col-md-offset-1">
      <h1>STONEWOOD CABINETRY. BUILT WITH YOU IN MIND.</h1>
      <p>Our goal is to be able to provide honest, high quality, affordable cabinetry and countertops directly to homeowners and industry professionals alike. Our product line has broadened to include cabinetry and storage solutions to help you maximize your total home living space. Our ability to provide the latest interior products along with professional design & installation, and even construction services on everything from cabinetry, countertops,and appliances makes us the one-stop shop. We stand behind our work and would love to help you complete your next amazing project!</p>
      <h2>MEET OUR TEAM</h2>
      <p>One of our core values is to provide the most advanced, high quality cabinet we can possibly offer. You can expect the same kind of precision from our customer service and sales staff. We'd love to help you with your project!</p>
      <div class="contacts">
        <div v-for="contact in contacts" class="circleParent">
          <div class="circle">
            <img class="circle" :src="contact.imgPath">
          </div>
          <strong>{{contact.name}}</strong>
          <span>{{contact.title}}</span>
          <div class="contact-icons">
            <a :href="contact.email" class="glyphicon glyphicon-envelope"></a>
            <a :href="contact.phone" class="glyphicon glyphicon-phone"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  name: 'About',

  data () {
    return {
      contacts: [
        {
          name: 'Dan Whalen',
          title: 'Design & Sales',
          email: 'mailto:danwhalendesign@gmail.com',
          phone: 'tel:386-679-7623',
          imgPath: 'static/img/contacts/dan_headshot.png'
        },
        {
          name: 'Ian Wilson',
          title: 'Renovation Specialist',
          email: 'mailto:ianwilson@stonewoodsales.com',
          phone: 'tel:386-237-3178',
          imgPath: 'static/img/contacts/ian_headshot.png'
        },
        {
          name: 'Stan Marcio',
          title: 'Multi-Family',
          email: 'mailto:smarcio@stonewoodsales.com',
          phone: 'tel:386-931-1615',
          imgPath: 'static/img/contacts/stan_headshot.png'
        }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
  .circleParent {
    width: 125px;
    vertical-align: top;
    margin: 0 5%;
    display: inline-block;
    *display: inline;
    zoom: 1
  }
  .circleParent > span { display: block; }
  .circleParent > strong { display: block; }
  .circle {
    border-radius: 50%;
    width: 125px;
    height: 125px;
  }
  .contact-icons > .glyphicon {
    font-size: 22px;
    text-decoration: none;
    color:black;
  }
</style>