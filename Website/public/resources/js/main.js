$(document).ready(function() {

// animations on scroll

// header height
// $(window).scroll(function(e) {
//     var iCurScrollPos = $(this).scrollTop();
//     var windowHeight = $(this).height();

//     if(iCurScrollPos <= windowHeight) {
//         e.preventDefault();
//         $('.js--header--main').height(windowHeight-iCurScrollPos)
//     } else {
//         $('.js--header--main').height(0)
//     }
// })

$('.js--show-nav').waypoint(function(direction) {
    if(direction == 'down') {
        console.log(direction)
        $('.navigation').addClass('show')
    } else {
        $('.navigation').removeClass('show')
    }
},{
    offset: '60%'
});

$('#divide1').waypoint(function(direction) {
    $('#divide1').addClass('animated fadeInLeft')
},{
    offset: '60%'
})
$('#divide2').waypoint(function(direction) {
    $('#divide2').addClass('animated fadeInLeft')
},{
    offset: '60%'
})
$('#divide3').waypoint(function(direction) {
    $('#divide3').addClass('animated fadeInLeft')
},{
    offset: '60%'
})

$('section.cases').waypoint(function(direction) {
    $('.js--wp-cases').addClass('animated fadeInUp')
},{
    offset: '60%'
})

$('.js--prod--c').waypoint(function(direction) {
    if($(window).width() <= '768') {
        $('.js--prod--c').addClass('inview')
    }
},{
    offset: '50%'
})

$('.js--prod--r').waypoint(function(direction) {
    if($(window).width() <= '768') {
        $('.js--prod--r').addClass('inview')
    }
},{
    offset: '50%'
})

$('.js--prod--p').waypoint(function(direction) {
    if($(window).width() <= '768') {
        $('.js--prod--p').addClass('inview')
    }
},{
    offset: '50%'
})

// contact popup
$('a[href*=\\#]:not([href=\\#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        console.log(this.hash)
        if (target.length) {
            if(this.hash == "#contact-us") {
            $("#contact-us").toggleClass("popup__show--js");
            return false;
            } else {
            $('html,body').animate({
                scrollTop: target.offset().top - 100
                }, 1000);
                return false;
            }
        }
    }
    });

    $('#contact-us, .popup__close').click(function(event) {
        event.stopPropagation();
        $("#contact-us").removeClass("popup__show--js");
    })
});
$(".popup__box").click(function(event) {
    event.stopPropagation();
})

// this is the id of the form
$("#form_contact").submit(function(e) {
    var form = $(this);
    var url = "/contact-us"
    $.ajax({
        type: "POST",
        url: url,
        data: form.serialize(), // serializes the form's elements.
        success: function(data) {
            if (data.success == true) {
                $("#contact-us").removeClass("popup__show--js");
            } else {
                alert('Submission failed. Please contact ACS directly')
            }
        },
        fail: function(data) {
            alert('Submission failed. Please contact ACS directly')
        }
    });
    e.preventDefault(); // avoid to execute the actual submit of the form.
});