$(document).ready(function() {
	$('#test').scrollToFixed();
    $('.res-nav_click').click(function() {
        $('.main-nav').slideToggle();
        return false    
    });
    // Material design initialize
    $.material.init();
});

$(window).load(function(){        		
	$('.main-nav li a').bind('click',function(event){
		var $anchor = $(this);
		
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top - 102
		}, 1500,'easeInOutExpo');
		/*
		if you don't want to use the easing effects:
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1000);
		*/
		event.preventDefault();
	});

	// Portfolio Conf
	var $portfolioContainer = $('.portfolioContainer'),
        $body = $('body'),
        colW = 375,
        columns = null;

  	$portfolioContainer.isotope({
		// disable window resizing
		resizable: true,
		masonry: {
		  columnWidth: colW
		}
	});
    
  	$(window).smartresize(function() {
        // check if columns has changed
        var currentColumns = Math.floor( ( $body.width() -30 ) / colW );
        if ( currentColumns !== columns ) {
	        // set new column count
	        columns = currentColumns;
	        // apply width to container manually, then trigger relayout
	        $portfolioContainer.width( columns * colW ).isotope('reLayout');
        }
  	}).smartresize(); // trigger resize to set container width

  	// Portfolio filter
  	$('.portfolioFilter a').click(function(){
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $portfolioContainer.isotope({
			
            filter: selector,
        });
        return false;
    });
});

// WOW Initialize
wow = new WOW({
    animateClass: 'animated',
    offset:       100
});
wow.init();
// document.getElementById('').onclick = function() {
// 	var section = document.createElement('section');
// 	section.className = 'wow fadeInDown';
// 	this.parentNode.insertBefore(section, this);
// };