// navbar.vue
<template>
	<div class="header">
		<nav id="nav" class="navbar navbar-default">
			<div class="container-fluid">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
				        <span class="sr-only">Toggle navigation</span>
				        <span class="icon-bar"></span>
				        <span class="icon-bar"></span>
				        <span class="icon-bar"></span>
					</button>
					<div class="site-logo">
						<a href="#"><img class="logo-nav"></a>
					</div>
				</div>
				<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul class="nav nav-pills">
						<!-- <nav-li nav-title="Residential" nav-sub-title="Photo Gallery"></nav-li> -->
						<li><a v-link="{ path: '/about' }">About<span class="sub-title">Our Team</span></a></li>
						<li><a v-link="{ path: '/residential' }">Residential<span class="sub-title">Photo Gallery</span></a></li>
						<li><a v-link="{ path: '/multifamily' }">Multifamily<span class="sub-title">Photo Gallery</span></a></li>
						<li><a v-link="{ path: '/contact-us' }">Contact <span class="sub-title">get in touch</span></a></li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {

    };
  }
};
</script>

<style lang="scss" scoped>
	$nav-primary-color: #444;
	$nav-subtitle-color: #918d8e;
	$breakpoint-sm-desktop: 1068px;
	$breakpoint-tablet: 768px;
	$breakpoint-phone: 480px;
	$breakpoint-iphone6: 400px;
	$logo-fullsize: "images/logo-nav.png";
	$logo-phone: "images/logo-nav-iphone.png";

	.logo-nav {
		content:url("images/logo-nav.png");
	}
	.header {
		margin-bottom: 0;
	}
		.container-fluid {
			margin-bottom: 1em;
			max-width: 1100px;
		}
		.h3 {
			text-align: center;
			margin-top: 0.25em;
		}
	.site-logo {
		display: table;
	    height: 100%;
	    float: left;
	    position: absolute;
	    left: 50%;
	    margin-left: -140.5px;
	    width: 225px;
	    top: 7.5px;
	}
	.nav { padding: 0 125px ;}
	.nav > li > a {
		padding: 10px 5px;
    	text-align: center;
	}
	.nav > li > a:hover, .nav > li > a:focus {
	    text-decoration: none;
	    background-color: #fff;
	}
	.navbar-default {
		border-color: #fff;
		background-color: #fff;
	}
	.navbar {
		margin-bottom: 0;
	}
	nav
		ul
			li {
				padding: 0 5px;
			}
				a {
					padding: 10px 5px;
    				text-align: center;
    				font-size: 15px;
				    line-height: 16px;
				    color: $nav-primary-color;
				    padding: 0;
				    text-transform: uppercase;
				    text-decoration: none;
				    text-align: center;
				    font-weight: 400;
				    letter-spacing: 1px;
				    font-family: 'Lato', sans-serif;
				    &:hover, &:focus {
				    	background-color: #fff;
				    	transition: color 0.25s ease;
				    	color: red;
				    }
				}
					span.sub-title {
						    color: $nav-subtitle-color;
						    display: block;
						    font-family: "linux_libertine_oitalic";
						    font-size: 13px;
						    letter-spacing: 1px;
						    line-height: 14px;
						    text-transform: lowercase;
						    cursor: pointer;
					}
			li:nth-child(2) {
			    margin-right: 22.5em !important;
			}
			li.active
				a {
					border-bottom: 2px solid;
					color: red;
					background-color: #fff;
					&:focus, &:visited, &:hover{
						border-bottom: 2px solid;
						color: red;
						background-color: #fff;
					}
				}
	@media(max-width:$breakpoint-sm-desktop){
		//Remove float to center nav buttons for dropdown.
		.nav-pills > li {
		    float: none;
		}
		//Remove padding on navbar third element spacing to center
		li:nth-child(3) {
		    margin-right: 0 !important;
		}
	}
	@media(max-width:$breakpoint-iphone6){
		.logo-nav {
			content:url("images/logo-nav-iphone.png");
		}
		.site-logo{
			margin-left: -140px;
			top: 10px;
		}
	}
</style>