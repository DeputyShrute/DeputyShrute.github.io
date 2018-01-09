$(document).ready(function() {
  	
  	console.log("innit");

    // Slideout Variable
    var slideoutLeft = new Slideout({
        'panel': document.getElementById('panel'),
        'menu': document.getElementById('left-menu'),
        'padding': 256,
        'tolerance': 70
    });

    // Toggle button
    $('#left-nav').click(function() {
        slideoutLeft.toggle();
    });

    slideoutLeft.on('beforeopen', function() {
        document.querySelector('.fixed').classList.add('fixed-open-left');
    });

    slideoutLeft.on('beforeclose', function() {
        document.querySelector('.fixed').classList.remove('fixed-open-left');
    });

  
});