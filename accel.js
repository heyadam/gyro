$(document).ready(function() {
	var windowW = $(window).width();
      	var windowH = $(window).height();

      	$(".derp").css("height", windowH/5+ "px");

	window.ondeviceorientation = function(event) {
	    var x = Math.round(event.alpha*1/1);
	    var y = Math.round(event.beta*1/1);
	    var z = Math.round(event.gamma*1/1);
	    $("#x").text("x: " + x);
	    $("#y").text("y: " + y);
	    $("#z").text("z: " + z);

	   // $("#box").css("-webkit-transform","rotate(" + x + "deg) ");
	    $(".derp").css("-webkit-filter","hue-rotate(" + x + "deg) ");
	     $(".derp").css("-webkit-transform","rotateZ(" + x + "deg)  rotateX(" + y + "deg)  rotateY(" + z + "deg) ");
	}
});