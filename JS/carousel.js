$(document).ready(function() {
  	
  	console.log("innit");

$('.container').carousel({
	  // the number of images to display
	  num: 4,
	  // max width of the active image
	  maxWidth: 350,
	  // min width of the active image
	  maxHeight: 350,
	  // enable auto play
	  autoPlay: false,
	 // autoplay interval
	  showTime: 3000,
	  // animation spee
	  animationTime: 600,
	  // 0.0 - 1.0
	  scale: 0.8,
	  // the distance between images
	  distance: 50
	});
};