$(function(){
  var header = document.getElementById('header');
  var headroom = new Headroom(header);
  headroom.init();
});

//tags

// scrool to inicio
$('.inicio').on('click', function(){
$("html, body").animate({ scrollTop: 0 }, 1000);
})

// scrool to proyectos
$('.proyectos').on('click', function(){
$("html, body").animate({ scrollTop: $('#proyectos').height() + $('.header').height()}, 1000);
})

// scrool to acerca de 
$('.acerca').on('click', function(){
$("html, body").animate({ scrollTop: $("#proyectos").height() + $("#pruebas").height()}, 1000);
})


// scrool to contact
$('.contact').on('click', function(){
$("html, body").animate({ scrollTop: $("#about").height() + $("#proyectos").height() + $("#pruebas").height()+ $("#contactme").height()}, 1000);
})




// scrool windows
$( window ).scroll(function() {
	var scrollTop = $(window).scrollTop();
	var docHeight = $(document).height();
	var winHeight = $(window).height();
	var scrollPercent = (scrollTop) / (docHeight - winHeight);
	var scrollPercentRounded = Math.round(scrollPercent*100);
	if(scrollPercentRounded > 10){
		$( ".header" ).addClass("scroll");
	}
	if(scrollPercentRounded < 30){
		$( ".header" ).removeClass("scroll");
	}
  
});



// scrool movil
$( window ).scroll(function() {
	var scrollTop = $(window).scrollTop();
	var docHeight = $(document).height();
	var winHeight = $(window).height();
	var scrollPercent = (scrollTop) / (docHeight - winHeight);
	var scrollPercentRounded = Math.round(scrollPercent*100);
	if(scrollPercentRounded > 5){
		$( ".movil-header" ).addClass("scroll");
	}
	if(scrollPercentRounded <20){
		$( ".movil-header" ).removeClass("scroll");
	}
  
});




// cell button

$('.icon-menu').on('click', function(){
	$('.icon-menu').toggleClass("push");
	$('.movil-nav').toggleClass("push");
	$('.movil-header').toggleClass("push");
	

})

/// scrool movile
// scrool to inicio
$('.icon-home').on('click', function(){
$('.icon-menu').toggleClass("push");	
$('.movil-nav').toggleClass("push");
$("html, body").animate({ scrollTop: 0 }, 1000);
})

// scrool to proyectos
$('.icon-folder').on('click', function(){
$('.icon-menu').toggleClass("push");
$('.movil-nav').toggleClass("push");
$("html, body").animate({ scrollTop: $('#pruebas').height() - $('.movil-header').height()}, 1000);

})

// scrool to acerca de 
$('.icon-user').on('click', function(){
$("html, body").animate({ scrollTop: $("#proyectos").height() + $("#pruebas").height()}, 1000);
$('.movil-nav').toggleClass("push");
$('.icon-menu').toggleClass("push");
})


// scrool to contact
$('.icon-mail').on('click', function(){
$('.movil-nav').toggleClass("push");
$('.icon-menu').toggleClass("push");
$("html, body").animate({ scrollTop: $("#about").height() + $("#proyectos").height() + $("#pruebas").height()+ $("#contactme").height()}, 1000);
})