jQuery.fn.exists = function(){return this.length>0;};

function remove_empty_row() {
    var check = $("body div").hasClass("template-layoutedit") || $("body div").hasClass("template-compose");
    if(check == false)
        {
        var rowdiv = $("#content .row .cell"); 
        
        $(rowdiv).each(function( index ) {
            if ($(this).children('div').length === 0) {
            }
        });

    }
}

function cover_full_width() {
    var check = $("body div").hasClass("template-layoutedit") || $("body div").hasClass("template-compose");
    if(check == false)
        {     
            var move = $('.cover_full_width, .centralpacific_hide, .nicoya_hide, .northernlowlands_hide, .southpacific_hide, .caribbean_hide, .guanacaste_hide, .centralvalleyandhighlands_hide').parent('.cell');
            $('.cover_full_width, .centralpacific_hide, .nicoya_hide, .northernlowlands_hide, .southpacific_hide, .caribbean_hide, .guanacaste_hide, .centralvalleyandhighlands_hide').appendTo('#full-carousel');
            $(move).remove();
    }
    if(check == true)
        {
            $(!'.cover_full_width, .centralpacific_hide, .nicoya_hide, .northernlowlands_hide, .southpacific_hide, .caribbean_hide, .guanacaste_hide, .centralvalleyandhighlands_hide').appendTo('#full-carousel');   
     }
}

function check_cover_full_width() {
    var check = $("div").hasClass("cover_full_width");
    if(check == true)
        {
            $(!"div#full-carousel").remove();
    }
    if(check == false)
        {
            $("div#full-carousel").remove();
    }
}

function backupcb_slideshow() {
    $('.cb-slideshow img:gt(0)').hide();
    setInterval(function(){
      $('.cb-slideshow :first-child').fadeOut(10000)
        .next('img').fadeIn(3000)
        .end().appendTo('.cb-slideshow');}, 
        10000);    
} 

function cb_slideshow() {
    $('.cb-slideshow img:gt(0)').hide();
    setInterval(function(){
      $('.cb-slideshow :first-child').fadeOut("slow")
        .next('img').fadeIn("slow")
        .end().appendTo('.cb-slideshow');}, 
        10000);  
} 

$(document).ready(function () {
    if($('.row .cell').length > 0){
        remove_empty_row();
    }
    if($('.cb-slideshow').length > 0){
        cb_slideshow();
    }
    if($('.cover_full_width').length > 0){
        cover_full_width();
    } 
    
    $("ul.dropdown-menu li").addClass('submenu_item');
    $("#fullbgnav").insertAfter("#portal-header");
    $(".titlecontact.toolkit").insertAfter("#box");  

    $(".portletWrapper:not(:has(dt.portletHeader))").addClass("nobg");

    if($('.portletAgentInformation .agency_logo').exists()){
        var logo = $('.portletAgentInformation .agency_logo');
        $('.portletAgentInformation .agency_logo').remove();
        $('.portletAgentInformation .portletItem').append(logo);    
    
    }    
});
