Template.home.rendered = function() {
    $('#nav-scroll').scrollToFixed();
    $('.res-nav_click').click(function() {
        $('.main-nav').slideToggle();
        return false;
    });
    
    $('.main-nav li a, \
       .header a.link, \
       a.navbar-brand,\
       #responsive-nav .navbar-nav li a.navigation').bind('click', function(event) {
        event.preventDefault();
        
        var $anchor = $(this);

        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 50
        }, 1500, 'easeInOutExpo');
        
        $(this).addClass('active');
        /*
         if you don't want to use the easing effects:
         $('html, body').stop().animate({
         scrollTop: $($anchor.attr('href')).offset().top
         }, 1000);
         */
    });
    
    $('#responsive-nav .navbar-nav li a.navigation').bind('click', function(event) {
        event.preventDefault(); 
        $('button[data-target=#responsive-nav]').click();
    });

    // Portfolio Conf
    var $portfolioContainer = $('.portfolioContainer'),
            $body = $('body'),
            colW = ($portfolioContainer.width() / 5),
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
        var currentColumns = Math.floor(($body.width() - 30) / colW);
        if (currentColumns !== columns) {
            // set new column count
            columns = currentColumns;
            // apply width to container manually, then trigger relayout
            $portfolioContainer.width(columns * colW).isotope('reLayout');
        }
    }).smartresize(); // trigger resize to set container width

    // Portfolio filter
    $('.portfolioFilter a').click(function() {
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');

        var selector = $(this).attr('data-filter');
        $portfolioContainer.isotope({
            filter: selector
        });
        return false;
    });

    // Material design initialize
    $.material.init();
};