const Vue = require('vue');
const Navbar = require('./navbar.vue');
const Carousel = require('./carousel.vue');
const Vendors = require('./vendors.vue');
const Contact = require('./contact.vue');
const Footer = require('./footer.vue');

Vue.use(VueRouter);

var Home = Vue.extend({
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

var Foo = Vue.extend({
    template: '<p>This is foo!</p>'
})

var Bar = Vue.extend({
    template: '<p>This is bar!</p>'
})

var App = Vue.extend({
	components:{
		navbar: Navbar,
		vfooter: Footer
	}
})

var router = new VueRouter()

router.redirect({
  '/': '/home'
})

router.map({
    '/foo': {
        component: Foo
    },
    '/bar': {
        component: Bar
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