$(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    // nav fixed;
    if(scrolling > 150){
        $('nav').addClass('nav-bg');
    }
    else{
        $('nav').removeClass('nav-bg');
    }
    // back to top;
    if(scrolling > 400){
        $('.back-to-top').fadeIn();
    }
    else{
        $('.back-to-top').fadeOut(); 
    }

    //hire===;
    if(scrolling > 500){
        $('.hire').fadeIn();
    }
    else{
        $('.hire').fadeOut(); 
    }
});

$('.back-to-top').click(function(){
    $('body,html').animate({
        scrollTop : '0',
    },3000);
})

// animation scroll js;
var html_body = $('html, body');
$('nav a').on('click', function(){
    if(location.pathname.replace(/^\//,'') && location.hostname == this.hostname){
       var target = $(this.hash);
       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
       if(target.length){
           html_body.animate({
               scrollTop: target.offset().top -0
           }, 1500);
           return false;
       } 
    }
});

// modal form===========;
var fname = document.getElementById('fname');
var email = document.getElementById('email');
var number = document.getElementById('number');
var message = document.getElementById('cnt');



//subm function;

function subm(){
    // name;
    if(fname.value == ""){
        fname.style.borderBottomColor ="#ff6600";
        fname.focus();
        return false;
    }

    // email;
    if(email.value == ""){
        email.style.borderBottomColor ="#ff6600";
        email.focus();
        return false;
    }

    // number;
    if(number.value == ""){
        number.style.borderBottomColor ="#ff6600";
        number.focus();
        return false;
    }

    // cnt;
    if(cnt.value == ""){
        cnt.style.borderBottomColor ="#ff6600";
        cnt.focus();
        return false;
    }
}

//modal;

var hr = document.getElementById('hr');
var hr2 = document.getElementById('hr2');

hr.addEventListener('click', function(){
    mdl.style.display = "block";
})
hr2.addEventListener('click', function(){
    mdl.style.display = "block";
})

var close = document.getElementById('close');

close.addEventListener('click', function(){
    mdl.style.display = "none";
})

$(document).ready(function(){
    $('.preloader').fadeOut(4000);
});















