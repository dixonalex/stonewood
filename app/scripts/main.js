const Vue = require('vue');
const Navbar = require('./navbar.vue');
const Carousel = require('./carousel.vue');
const Vendors = require('./vendors.vue');
const Contact = require('./contact.vue');
const Footer = require('./footer.vue');

Vue.use(VueRouter);

const Home = Vue.extend({
	template: `
		<Carousel></Carousel>
		<Vendors></Vendors>
		<Contact></Contact>
		`,
	components: {
		carousel: Carousel,
	    vendors: Vendors,
	    contact: Contact
	}
})

const About = Vue.extend({
    template: '<p>This is about!</p>'
})

const Residential = Vue.extend({
    template: '<p>This is residential!</p>'
})

const Multifamily = Vue.extend({
    template: '<p>This is multifamily!</p>'
})

const ContactUs = Vue.extend({
    template: '<p>This is contact-us!</p>'
})

const App = Vue.extend({
	components:{
		navbar: Navbar,
		vfooter: Footer
	}
})

const router = new VueRouter()

router.redirect({
  '/': '/home'
})

router.map({
    '/about': {
        component: About
    },
    '/residential': {
        component: Residential
    },
    '/multifamily': {
    	component: Multifamily
    },
    '/contact-us': {
    	component: ContactUs
    },
    '/home': {
    	component: Home
    }
})

router.start(App, 'body');

$('.nav li a').on('click', function(){
   $('.nav').find('.active').removeClass('active');
   $(this).parent().addClass('active');
});