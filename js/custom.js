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
                'background-color': 'rgba(0, 0, 0, 0.7)',
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


/* Change backgrounds and fonts from white to black and vice versa */

$(document).ready(function(){
   
    'use strict';
    
    $(window).scroll(function() {
        
        'use strict';
        
        if($(window).scrollTop() > 25) {
            
            $('.header-overlay').css({
                'background-color': 'black',
                '-webkit-transition': 'background-color 300ms linear'
            });

            $('.body-main').css({
                'background-color': 'black',
                '-webkit-transition': 'background-color 300ms linear'
            });

            $('.greetings-text').css({
                'color': 'white',
                '-webkit-transition': 'background-color 300ms linear'
            });

            $('.container-projects').css({
                'background-color': 'black',
                '-webkit-transition': 'background-color 300ms linear'
            });

            $('.header-text h1').css({
                'color': 'white'
            });

            $('.about-item p').css({
                'color': 'white'
            });
            
        } else {
            $('.header-overlay').css({
                'background-color': 'white',
                '-webkit-transition': 'background-color 300ms linear'
            });

            $('.body-main').css({
                'background-color': 'white',
                '-webkit-transition': 'background-color 300ms linear'
            });

            $('.greetings-text').css({
                'color': '#333',
                '-webkit-transition': 'background-color 300ms linear'
            });

            $('.container-projects').css({
                'background-color': 'white',
                '-webkit-transition': 'background-color 300ms linear'
            });

            $('.header-text h1').css({
                'color': 'black'
            });

            $('.about-item p').css({
                'color': 'black'
            });
        }
       
        
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

/* active menu item on click */
$(document).ready(function() {
    
    'use strict';
    
    
    $('.navbar-nav li a').click(function(){
        
        'use strict';
        
        $('.navbar-nav li a').parent().removeClass("active");
        
        $(this).parent().addClass("active");
    
    });
});

// highlight menu item on scroll
$(document).ready(function() {
    
    'use strict';
    
    $(window).scroll( function() {
        
        'use strict';
        
        $("section").each(function()  {
            
            'use strict';
            
            var bb = $(this).attr("id");  // ABOUT, CONTACT, DOWNLOAD
            var hei = $(this).outerHeight();
            var grttop = $(this).offset().top - 70;
            
            if ($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + hei) {
             
                $(".navbar-nav li a[href='#" + bb + "']").parent().addClass("active");
           
            } else {
                $(".navbar-nav li a[href='#" + bb + "']").parent().removeClass("active");
                
            }
            
            
        });
    
    
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

// change https when hovering
function hover(element, path) {
    element.setAttribute('src', path);
}
  
function unhover(element) {
    element.setAttribute('src', path);
}



/* hover on projects */

$(document).ready(function() {
    
    'use strict';
    
    
    $('.project-box1').mouseenter(function(){
        
        'use strict';

        $(".project-item2")[0].src = 'images/cornell_red.png';

        $(".project-item1").fadeTo(400,0).fadeTo(400,1);

        $(".project-item2").css({
            "opacity": "1",
            "height": "101%",
            "transition": "all 1s ease 0s"
        })
        
        $('.header-overlay').css({
            'background-color': 'rgba(179, 27, 27, 1)',
            "transition": "all 1s ease 0s"
        });

        $('.body-main').css({
            'background-color': 'rgba(179, 27, 27, 1)',
            "transition": "all 1s ease 0s"
        });

        $('.project-box').css({
            'background-color': 'rgba(184, 60, 60, 1)',
            "transition": "all 1s ease 0s"
        })

        $('.greetings-text').css({
            'color': 'black',
            "transition": "all 1s ease 0s"
        });

        $('.container-projects').css({
            'background-color': 'rgba(179, 27, 27, 1)',
            "transition": "all 1s ease 0s"
        });
    
    });

    $('.project-box1').mouseleave(function(){
        
        'use strict';

        // $(".project-item2").fadeTo(800, 0.5, function() {
        //     $(".project-item2").attr("src",'images/blank.gif');
        // });

        $(".project-item1").fadeTo(400,0).fadeTo(400,1);

        $(".project-item2").css({
            "opacity": "0",
            "height": "115%",
            "transition": "all 1s ease 0s"
        })
        
        $('.header-overlay').css({
            'background-color': 'black',
            "transition": "all 1s ease 0s"
        });

        $('.body-main').css({
            'background-color': 'black',
            "transition": "all 1s ease 0s"
        });

        $('.project-box').css({
            'background-color': 'rgba(26, 26, 26, 1)',
            "transition": "all 1s ease 0s"
        })

        $('.greetings-text').css({
            'color': 'white',
            "transition": "all 1s ease 0s"
        });

        $('.container-projects').css({
            'background-color': 'black',
            "transition": "all 1s ease 0s"
        });
    
    });
});


























