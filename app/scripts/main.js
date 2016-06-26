const Vue = require('vue');
const Navbar = require('./navbar.vue');
const HomeCarousel = require('./home-carousel.vue');
const ResidentialCarousel = require('./residential-carousel.vue');
const MultiFamilyCarousel = require('./multifamily-carousel.vue');
const Vendors = require('./vendors.vue');
const Contact = require('./contact.vue');
const Footer = require('./footer.vue');
const ContactPage = require('./contact-us.vue')
const About = require('./about.vue')

Vue.use(VueRouter);

const Home = Vue.extend({
	template: `
	<div>
		<HomeCarousel></HomeCarousel>
		<Vendors></Vendors>
		<Contact></Contact>
	</div>`,
	components: {
		homecarousel: HomeCarousel,
	    vendors: Vendors,
	    contact: Contact,
	}
})

const About = Vue.extend({
    template: `
	<div><About></About></div>`,
    components:{
        about: About,
    }
})

const Residential = Vue.extend({
    template: '<div><ResidentialCarousel></ResidentialCarousel></div>',
	components: {
		residentialcarousel: ResidentialCarousel,
	}
})

const Multifamily = Vue.extend({
    template: '<div><MultiFamilyCarousel></MultiFamilyCarousel></div>',
	components: {
		multifamilycarousel: MultiFamilyCarousel,
	}
})

const ContactUs = Vue.extend({
    template: `
    <div><Contact-Us></Contact-Us></div>
    `,
    components: {
        'contact-us': ContactPage
    }
})

const NotFound = Vue.extend({
	template: '404 not found'
})

const App = Vue.extend({
	components:{
		navbar: Navbar,
		vfooter: Footer
	}
})

const router = new VueRouter()

router.redirect({
  '/': '/home',
  '*': '/404'
})
//define page routes here
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
    },
    '/404': {
    	component: NotFound
    }
})

router.start(App, 'body');

// Handles nav active class
$('*[href$=about]').on('click', function(){
   $('.nav').find('.active').removeClass('active');
   $('li a[href$=about]').parent().addClass('active');
});
$('*[href$=residential]').on('click', function(){
   $('.nav').find('.active').removeClass('active');
   $('li a[href$=residential]').parent().addClass('active');
});
$('*[href$=multifamily]').on('click', function(){
   $('.nav').find('.active').removeClass('active');
   $('li a[href$=multifamily]').parent().addClass('active');
});
$('*[href$=contact-us]').on('click', function(){
   $('.nav').find('.active').removeClass('active');
   $('li a[href$=contact-us]').parent().addClass('active');
});
// Remove active class if click on logo for landing page
$('.site-logo').on('click', function(){
   $('.nav').find('.active').removeClass('active');
});