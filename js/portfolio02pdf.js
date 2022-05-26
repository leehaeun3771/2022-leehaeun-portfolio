$(function(){
    $('.btns .btn').click(function(){
        $('html, body').stop().animate({
            scrollTop : 0
        },500)
    });
});