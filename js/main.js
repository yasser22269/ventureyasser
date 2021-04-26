
$(function(){
    'use strict';

    $(window).scroll(function(){

        
        if($(window).scrollTop() >= 580){
            $(".scrolltotop").fadeIn(1500);
        }else{
         $(".scrolltotop").fadeOut(1500);
        }
        //End scroll to top buttom
    })
    //Start scroll to go up
    $(".scrolltotop").click(function(e){
     e.preventDefault();         
     $("html,body").animate({
         scrollTop:0
     },1500)
    })
    

    //Start scroll Top
   $(".navbar li .contact1").click(function(e){
    e.preventDefault();              //يمنع المعتاد
    $("html,body").animate({
scrollTop: $("#" + $(this).data("scroll")).offset().top+1
    },2000)
})
//End scroll Top

    //start popUp
        $('.pop-button').click(function(e){
            e.preventDefault();
            $('.popup').fadeIn(1000);
        })
        $(".popup .Click").click(function(){
            $(".popup").hide();
           })
    //end popUp
           //start  cards-rotate
           $('.card').click(function(){
            $(this).toggleClass('is-flipped');
                })
            //end  cards-rotate


              //loading

    var loader = function() {
        setTimeout(function() { 
            if($('#ftco-loader').length > 0) {
                $('#ftco-loader').removeClass('show');
            }
        }, 3000);
    };
    $('#ftco-loader').load(loader());
   // loader();
});