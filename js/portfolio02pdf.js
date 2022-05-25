$(function(){
    $('.btns .btn').eq(1).click(function(){
        $('html, body').stop().animate({
            scrollTop : 0
        },500)
    });
});