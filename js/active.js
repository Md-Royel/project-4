$(document).ready(function(){
$('#mobile-menu').meanmenu({
    meanScreenWidth:'768',
    meanMenuContainer:'.mobile-menu'
    
})
    
    $('.slider-active').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:true,
    navText:['<i class="fa fa-arrow-right"></i>','<i class="fa fa-arrow-left"></i>'],
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
    margin:0,
    nav:true,
    dots:true,
    navText:['<i class="fa fa-arrow-right"></i>','<i class="fa fa-arrow-left"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        768:{
            items:2
        },
        1000:{
            items:4
        }
    }
        
       
        
    }) 
    
        $(".blog-active").owlCarousel({
        items:1,
        loop:true,
        nav:true,
        navText:['<i class="fa fa-arrow-left"></i>','<i class="fa fa-arrow-right"></i>'],
        
       
        
    })     
    
    $('.brand-active').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    navText:['<i class="fa fa-arrow-right"></i>','<i class="fa fa-arrow-left"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        768:{
            items:3
        },
        992:{
            items:4
        },1200:{
            items:6
        }
    }
        
        
        
       
        
    })
    
    $(".magnific-pop").magnificPopup({
        type:'iframe'
        
       
        
    })
})
