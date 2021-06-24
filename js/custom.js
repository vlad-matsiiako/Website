/* Show and hide menu */

$(document).ready(function(){
   
    'use strict';
    
    $(window).scroll(function() {
        
        'use strict';
        
        if($(window).scrollTop() < 120 ) {
            
            $('.navbar').css ({
                'margin-top': '-100px',
                'opacity': '0'
                
            });
            
            $('.navbar-default').css({
                'background-color': 'rgba(0, 0, 0, 0)'
                
            });
            
        } else {
            
            $('.navbar').css ({
                'margin-top': '0px',
                'opacity': '1'
                
            });
            
            $('.navbar-default').css({
                'background-color': 'rgba(0, 0, 0, 1)',
                // 166, 25, 46
                'border-color': '#444'
                
            });
            
            $('.navbar-brand img').css({
               'height': '35px',
                'padding-top': '0px'
                
            });
            
            $('.navbar-nav > li > a ').css({
                'padding-top': '15px'
                
            });
            
            
        }
       
        
    });
    
    
});


// Alway scroll to the top when loaded
$(document).ready(function(){
   
    'use strict';
    
    $(window).load(function() {
   
        'use strict';
        
        $('html, body').animate({scrollTop: $(".body-main").offset().top - 70}, 1);

    });
});


//add smooth scrolling
$(document).ready(function() {
    
    'use strict';
   
    
    $('.nav-item, #scroll-to-top').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
    
    
});


// add auto padding to header 

$(document).ready(function() {
    
    'use strict';
    
    setInterval( function() {
        
        'use strict';
        
        var windowHeight = $(window).height();
        
        var containerHeight = $(".header-container").height();
        
        var padTop = windowHeight - containerHeight;
        
        $(".header-container").css({
            
            'padding-top': Math.round( padTop / 2) + 'px',
            'padding-bottom': Math.round( padTop / 2) + 'px'
            
        });
        
        
    }, 10)
    
    
});

// Add bx slider to screens
$(document).ready(function() {
    
    $('.bxslider').bxSlider({
        
        slideWidth: 292.5,
        auto: true,
        minSlides: 1, 
        maxSlides: 3, 
        slideMargin: 50
    });
    
});


// Add counter
$(document).ready(function() {
    
    $('.counter-num').counterUp({
        delay: 10,
        time: 2000
    });
});

// Add animation/ Initialize Woo
$(document).ready(function() {
    
    'use strict';
   
    new WOW().init();
    
});

// // change https when hovering
// function hover(element, path) {
//     element.setAttribute('src', path);
// }
  
// function unhover(element) {
//     element.setAttribute('src', path);
// }















































