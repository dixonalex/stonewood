// carousel.vue
<template>
	<div id="myCarousel" class="carousel slide" data-ride="carousel">

	  <!-- Wrapper for slides -->
	  <div class="carousel-inner" role="listbox">
	    <div class="item active">
	    	<img class="carousel-image" src="images/multi/55 west orlando.jpg" alt="">
	    	<div class="carousel-caption">
	    		<span class="carousel-title">Stonewood Sales Kitchen and Bath</span>
    			<h1>55 West</h1>
    			<h3>Orlando, FL</h3> 		
	    		<button class="btn btn-primary btn-lg contact-button" v-link="'contact-us'" role="button">CONTACT</button>
	    	</div>
	    </div>

	    <div class="item">
	    	<img class="carousel-image" src="images/multi/gaines-street-district-east-tally.jpg" alt="">
	    	<div class="carousel-caption">
	    		<span class="carousel-title">Stonewood Sales Kitchen and Bath</span>
    			<h1>Gaines Street District East</h1>
    			<h3>Talahassee, FL</h3>
	    		<button class="btn btn-primary btn-lg contact-button" v-link="'contact-us'" role="button">CONTACT</button>
	    	</div>
	    </div>

	    <div class="item">
	    	<img class="carousel-image" src="images/multi/grand oaks at new smyrna tn.jpg" alt="">
	    	<div class="carousel-caption">
	    		<span class="carousel-title">Stonewood Sales Kitchen and Bath</span>
    			<h1>Grand Oaks</h1>
    			<h3>New Smyrna, TN</h3>
	    		<button class="btn btn-primary btn-lg contact-button" v-link="'contact-us'" role="button">CONTACT</button>
	    	</div>
	    </div>

	    <div class="item">
	    	<img class="carousel-image" src="images/multi/madison heights tampa.png" alt="">
	    	<div class="carousel-caption">
	    		<span class="carousel-title">Stonewood Sales Kitchen and Bath</span>
    			<h1>Madison Heights</h1>
    			<h3>Tampa, FL</h3>
	    		<button class="btn btn-primary btn-lg contact-button" v-link="'contact-us'" role="button">CONTACT</button>
	    	</div>
	    </div>

	    <div class="item">
	    	<img class="carousel-image" src="images/multi/NC_Kannapolis_IntegraSprings_.jpg" alt="">
	    	<div class="carousel-caption">
	    		<span class="carousel-title">Stonewood Sales Kitchen and Bath</span>
	    		<h1>Integra Springs</h1>
	    		<p>Kannapolis, NC</p>
	    		<button class="btn btn-primary btn-lg contact-button" v-link="'contact-us'" role="button">CONTACT</button>
	    	</div>
	    </div>	 
	    
	    <div class="item">
	       	<img class="carousel-image" src="images/multi/resrve at knollwood blacksburg va.jpg" alt="">
	       	<div class="carousel-caption">
	       		<span class="carousel-title">Stonewood Sales Kitchen and Bath</span>
	       		<h1>Reserve at Knollwood</h1>
	       		<h3>Blacksburg, VA</h3>
	       		<button class="btn btn-primary btn-lg contact-button" v-link="'contact-us'" role="button">CONTACT</button>
	       	</div>
       </div>   

       <div class="item">
       	<img class="carousel-image" src="images/multi/silos charlotte.jpg" alt="">
       	<div class="carousel-caption">
       		<span class="carousel-title">Stonewood Sales Kitchen and Bath</span>
       		<h1>Silos</h1>
       		<h3>Charlotte, NC</h3>
       		<button class="btn btn-primary btn-lg contact-button" v-link="'contact-us'" role="button">CONTACT</button>
       	</div>
       </div>

       <div class="item">
       	<img class="carousel-image" src="images/multi/springs at greenville.jpg" alt="">
       	<div class="carousel-caption">
       		<span class="carousel-title">Stonewood Sales Kitchen and Bath</span>
       		<h1>Springs at Greenville</h1>
       		<h3>Greenville, NC</h3>
       		<button class="btn btn-primary btn-lg contact-button" v-link="'contact-us'" role="button">CONTACT</button>
       	</div>
       </div>

       <div class="item">
       	<img class="carousel-image" src="images/multi/springs at tech ridge austin.jpg" alt="">
       	<div class="carousel-caption">
       		<span class="carousel-title">Stonewood Sales Kitchen and Bath</span>
       		<h1>Springs at Tech Ridge</h1>
       		<h3>Austin, TX</h3>
       		<button class="btn btn-primary btn-lg contact-button" v-link="'contact-us'" role="button">CONTACT</button>
       	</div>
       </div>

       <div class="item">
       	<img class="carousel-image" src="images/multi/weatgate villas kissimmee.jpg" alt="">
       	<div class="carousel-caption">
       		<span class="carousel-title">Stonewood Sales Kitchen and Bath</span>
       		<h1>Westgate Villas</h1>
       		<h3>Kissimmee, FL</h3>
       		<button class="btn btn-primary btn-lg contact-button" v-link="'contact-us'" role="button">CONTACT</button>
       	</div>
       </div>

       <div class="item">
       	<img class="carousel-image" src="images/multi/wiregrass san antonio.jpg" alt="">
       	<div class="carousel-caption">
       		<span class="carousel-title">Stonewood Sales Kitchen and Bath</span>
       		<h1>Wiregrass</h1>
       		<h3>San Antonio, TX</h3>
       		<button class="btn btn-primary btn-lg contact-button" v-link="'contact-us'" role="button">CONTACT</button>
       	</div>
       </div>

       <div class="item">
       	<img class="carousel-image" src="images/multi/111 south statesboro ga.jpg" alt="">
       	<div class="carousel-caption">
       		<span class="carousel-title">Stonewood Sales Kitchen and Bath</span>
       		<h1>111 South</h1>
       		<h3>Statesboro, GA</h3>
       		<button class="btn btn-primary btn-lg contact-button" v-link="'contact-us'" role="button">CONTACT</button>
       	</div>
       </div>

	  <!-- Left and right controls -->
	  <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
	    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
	    <span class="sr-only">Previous</span>
	  </a>
	  <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
	    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
	    <span class="sr-only">Next</span>
	  </a>
	</div>
</template>

<script>
export default {

  name: 'multifamilycarousel',
  data () {
    return {

    };
  }
};
</script>

<style lang="scss" scoped>
	$carousel-title-color: #f5f5f5;
	$carousel-font-family: "Helvetica", "PT Sans";
	$breakpoint-sm-desktop: 1068px;
	$breakpoint-tablet: 768px;
	$breakpoint-phone: 480px;
	$breakpoint-iphone6: 400px;
	$breakpoint-iphone5: 320px;

	.carousel-image{
		margin:0 auto;		
	}

	div.carousel-inner {
		max-height:800px;
	}
	div.carousel-caption {
		top: 200px;
		height: 300px;
		font-family: $carousel-font-family;
		background: rgba(0,0,0,0.25);
	}
		.carousel-title {
			line-height: 32px;
		    font-size: 26px;
		    font-weight: 600;
		    font-family: "PT Sans";
		    color: $carousel-title-color;
		}
		h1 {
			font-weight: 500;
		    font-family: "Palatino Linotype","Book Antiqua",Palatino,serif;
		    color: rgb(255,255,255);
		    font-size: 58px;
		}
		p {
			font-weight: 500;
		    color: rgb(255,255,255);
		}
	@media(min-width: $breakpoint-sm-desktop){
		.carousel-image {min-height: 800px;}
	}
	@media(min-width:$breakpoint-tablet) and (max-width:$breakpoint-sm-desktop){
		.carousel-image {min-height: 400px;}
		div.carousel-caption {
			bottom: 35%;
		}
			.carousel-title {
				line-height: 24px;
			    font-size: 20px;
			}
			h1 {
			    font-size: 38px;
			}
	}
	@media(min-width:$breakpoint-phone) and (max-width:$breakpoint-tablet){
		.carousel-image {min-height: 300px;}
		div.carousel-caption {
			bottom: 25%;
		}
			.carousel-title {
				line-height: 16px;
			    font-size: 14px;
			}
			h1 {
			    font-size: 24px;
			}
	}
	@media(min-width: $breakpoint-iphone6) and (max-width:$breakpoint-phone){
		.carousel-image {min-height: 210px;}
		div.carousel-caption {
			bottom: 10%;
		}
			.carousel-title {
				line-height: 14px;
			    font-size: 12px;
			}
			h1 {
			    font-size: 18px;
			}
			button.btn {
				font-size: 12px;
			}
	}
	@media(min-width: $breakpoint-iphone5) and (max-width: $breakpoint-iphone6){
		.carousel-image {min-height: 205px;}
		div.carousel-caption {
			bottom: 5%;
		}
			.carousel-title {
				line-height: 12px;
			    font-size: 10px;
			}
			h1 {
			    font-size: 16px;
			}
			button.btn {
				font-size: 12px;
			}
	}
	@media(max-width: $breakpoint-iphone5) {
		.carousel-image {min-height: 200px;}
		div.carousel-caption {
			bottom: 2.5%;
		}
			.carousel-title {
				line-height: 10px;
			    font-size: 8px;
			}
			h1 {
			    font-size: 14px;
			}
			button.btn {
				font-size: 10px;
			}
	}
</style>