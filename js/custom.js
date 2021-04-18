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
            
            $('.header-overlay, .body-main, .container-projects').css({
                'background-color': 'black',
                '-webkit-transition': 'background-color 1200ms ease'
            });

            $('.greetings-text, .about-item-main p, .project h2, .header-text h1, .about-item p').css({
                'color': 'white',
                '-webkit-transition': 'background-color 1200ms ease'
            });
            
        } else {
            $('.header-overlay, .body-main, .container-projects').css({
                'background-color': 'white',
                '-webkit-transition': 'background-color 1200ms ease'
            });

            $('.greetings-text, .about-item-main p, .project h2, .header-text h1, .about-item p').css({
                'color': 'black',
                '-webkit-transition': 'background-color 1200ms ease'
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



/* hover on the first project (Cornell) */
$(document).ready(function() {
    
    'use strict';
    
    $('.project-box1').mouseenter(function(){
        
        'use strict';

        $(".project-item11").fadeTo(400,0).fadeTo(400,1);

        $(".project-item12").css({
            "height": "101%",
            "opacity": "1",
            "transition": "all 1s ease 0s"
        })
        
        $('.header-overlay, .body-main, .container-projects').css({
            'background-color': 'rgba(179, 27, 27, 1)',
            "transition": "all 1s ease 0s"
        });

        $('.project-box').css({
            'background-color': 'rgba(184, 60, 60, 1)',
            "transition": "all 1s ease 0s"
        })

        $('.greetings-text').css({
            'color': 'white',
            "transition": "all 1s ease 0s"
        });
    
    });

    $('.project-box1').mouseleave(function(){
        
        'use strict';

        $(".project-item11").fadeTo(400,0).fadeTo(400,1);

        $(".project-item12").css({
            "opacity": "0",
            "height": "115%",
            "transition": "all 1s ease 0s"
        })
        
        $('.header-overlay, .body-main, .container-projects').css({
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
    
    });
});


/* hover on the second project (Erasmus Seminar) */
$(document).ready(function() {
    
    'use strict';
    
    $('.project-box2').mouseenter(function(){
        
        'use strict';

        $(".project-item21").fadeTo(400,0).fadeTo(400,1);

        $(".project-item22").css({
            "height": "101%",
            "opacity": "1",
            "transition": "all 1s ease 0s"
        })
        
        $('.header-overlay, .body-main, .container-projects').css({
            'background-color': 'rgba(10, 116, 94, 1)',
            "transition": "all 1s ease 0s"
        });

        $('.project-box').css({
            'background-color': 'rgba(60, 153, 132, 1)',
            "transition": "all 1s ease 0s"
        })

        $('.greetings-text').css({
            'color': 'white',
            "transition": "all 1s ease 0s"
        });
    
    });

    $('.project-box2').mouseleave(function(){
        
        'use strict';

        $(".project-item21").fadeTo(400,0).fadeTo(400,1);

        $(".project-item22").css({
            "opacity": "0",
            "height": "115%",
            "transition": "all 1s ease 0s"
        })
        
        $('.header-overlay, .body-main, .container-projects').css({
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
    
    });
});


/* hover on the third project (DSS Paper) */
$(document).ready(function() {
    
    'use strict';
    
    $('.project-box3').mouseenter(function(){
        
        'use strict';

        $(".project-item31").fadeTo(400,0).fadeTo(400,1);

        $(".project-item32").css({
            "height": "101%",
            "opacity": "1",
            "transition": "all 1s ease 0s"
        })
        
        $('.header-overlay, .body-main, .container-projects').css({
            'background-color': 'rgba(22, 26, 78, 1)',
            "transition": "all 1s ease 0s"
        });

        $('.project-box').css({
            'background-color': 'rgba(48, 59, 176, 0.6)',
            "transition": "all 1s ease 0s"
        })

        $('.greetings-text').css({
            'color': 'white',
            "transition": "all 1s ease 0s"
        });
    
    });

    $('.project-box3').mouseleave(function(){
        
        'use strict';

        $(".project-item31").fadeTo(400,0).fadeTo(400,1);

        $(".project-item32").css({
            "opacity": "0",
            "height": "115%",
            "transition": "all 1s ease 0s"
        })
        
        $('.header-overlay, .body-main, .container-projects').css({
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
    
    });
});



































































