$('.owl-carousel').owlCarousel({ /** código jquery para carousel obtido no site owlcarousel2.github.io */ 
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})