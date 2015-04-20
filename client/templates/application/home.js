var scripts = '<script src="/js/plugins/jquery-scrolltofixed.js"></script>\
    <script src="/js/plugins/jquery.easing.1.3.js"></script>\
    <script src="/js/plugins/jquery.isotope.js"></script>\
    <script src="/js/plugins/wow.js"></script>\
    <script src="/js/plugins/classie.js"></script>';

Template.home.rendered = function() {
	$('body').append(scripts);

	$('#nav-scroll').scrollToFixed();
	$('.res-nav_click').click(function() {
        $('.main-nav').slideToggle();
        return false    
    });

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

    // Material design initialize
    $.material.init();
};