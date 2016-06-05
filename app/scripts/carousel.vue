// carousel.vue
<template>
	<div id="myCarousel" class="carousel slide" data-ride="carousel">

	  <!-- Wrapper for slides -->
	  <div class="carousel-inner" role="listbox">
	    <div class="item active">
	    	<img src="images/carousels/landing/1-unknown.jpg" alt="">
	    	<div class="carousel-caption">
	    		<span class="carousel-title">Stonewood Sales Kitchen and Bath</span>
    			<h1>PERFORMANCE EXCELLENCE</h1>
    			<p>HIGH QUALITY CABINETRY & SERVICE SINCE 2006</p>	    		
	    		<button class="btn btn-primary btn-lg" role="button">SEE MORE</button>
	    	</div>
	    </div>

	    <div class="item">
	      <img src="images/carousels/landing/2-unknown.jpg" alt="">
	    </div>

	    <div class="item">
	    	<img src="images/carousels/landing/3-unknown.jpg" alt="">
	    </div>

	    <div class="item">
	    	<img src="images/carousels/landing/4-unknown.jpg" alt="">
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

  name: 'carousel',

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

	div.carousel-inner {
		max-height:800px;
	}
	div.carousel-caption {
		bottom: 45%;
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
	@media(min-width:$breakpoint-tablet) and (max-width:$breakpoint-sm-desktop){
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
	}
	@media(max-width: $breakpoint-iphone6){
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
	}
</style>