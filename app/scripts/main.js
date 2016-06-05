const Vue = require('vue');
const App = require('./app.vue');
const Navbar = require('./navbar.vue');
const Carousel = require('./carousel.vue');
const Vendors = require('./vendors.vue');
const Contact = require('./contact.vue');
const Footer = require('./footer.vue');

new Vue({
  el: 'body',
  components: {
    app: App,    
    navbar: Navbar,
    carousel: Carousel,
    vendors: Vendors,
    contact: Contact,
    vfooter: Footer
  }
})