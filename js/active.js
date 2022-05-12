$('document').ready(function(){

    jQuery('#small-manu').meanmenu({
        meanScreenWidth: "768",
        meanMenuContainer: '.manu-place',

    });


    $('.slider-area').owlCarousel({
        loop:true,
        nav:true,
        navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
        responsive:{ 
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    $('.project-active').owlCarousel({
        loop:true,
        nav:true,
        dots:false,
        navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
        responsive:{ 
            0:{
                items:1
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:4
            }
        }
    })
    $('.blog-active').owlCarousel({
        loop:true,
        nav:true,
        dots:false,
        navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
        responsive:{ 
            0:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:1
            },
            1200:{
                items:1
            }
        }
    })
    $('.test-active').owlCarousel({
        loop:true,
        nav:true,
        dots:false,
        navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
        responsive:{ 
            0:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:1
            },
            1200:{
                items:1
            }
        }
    })
    $('.partner-active').owlCarousel({
        loop:false,
        nav:false,
        dots:false,
        responsive:{ 
            0:{
                items:1
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:6
            }
        }
    })
    
    $('.test-popup-link').magnificPopup({
        type: 'iframe'
        // other options
      });
})