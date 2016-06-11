const Vue = require('vue');
const Navbar = require('./navbar.vue');
const Carousel = require('./carousel.vue');
const Vendors = require('./vendors.vue');
const Contact = require('./contact.vue');
const Footer = require('./footer.vue');

new Vue({
  el: 'body',
  components: {   
    navbar: Navbar,
    carousel: Carousel,
    vendors: Vendors,
    contact: Contact,
    vfooter: Footer
  }
})

$('.nav li a').on('click', function(){
   $('.nav').find('.active').removeClass('active');
   $(this).parent().addClass('active');
});