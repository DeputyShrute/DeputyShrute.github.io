



function initMap() { 
	var uluru = {lat: 53.227955, lng: -0.548753}; 
	var map = new google.maps.Map(document.getElementById('map'), 
		{ zoom: 4, center: uluru }); 
	var marker = new google.maps.Marker({ position: uluru, map: map }); 
}

function windowFun()
{
	window.open("http://www.ticketmaster.co.uk/Logic-tickets/artist/1604590");
}