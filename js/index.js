$(function(){

    var win = $(window).width();

    if(win >= 1025){

    $(window).mousemove(function(eve){
        var posX = 0, posY = 0;
        posX=eve.clientX;
        posY=eve.clientY;
        
        var now = $(this).scrollTop();

        //커서이벤트
        $('.cursor').css({
            top: posY,
            left: posX,
        });

        $('.showBox').click(function(){
            $('.cursor').animate({
                width : '40px',
                height : '40px',
            },500)
            $('html, body').stop().animate({scrollTop : 1000},500);
            $('body').css({
                overflow : 'inherit'
            })
            $('.cntWrap.cnt01').find('.motionbar').animate({
                width : '100%'
            },2000)
        });

        //쇼박스 mouseunter/mouseleaver
        $('.showBox').mouseenter(function(){
            $('.cursor').css({
                width: '40px',
                height: '40px',
                mixBlendMode : 'darken'
                
            });
        });
        $('.showBox').mouseleave(function(){
            $('.cursor').css({
                width: '120px',
                height: '120px',
                mixBlendMode : 'exclusion'
            });
        })

        
    });

    //컨텐츠1 마우스 오버 - 가로 선 효과 1번더
    $('.cntWrap.cnt01').click(function(){
        $('.motionbar').animate({
            width : '100%'
        },2000)
    });

}else{
    $('body').css({
        overflow : 'inherit'
    })
    $('.mainWrap .showBox h5').text('swipe!');
};




    //컨텐츠2 화면이동 
if(win >= 1025){

    $('.cntWrap.cnt01 .down .image').click(function(){
        if(win >= 1025){
        $('html, body').stop().animate({scrollTop : 2000},500);
        // $('body').css({
        //     overflow : 'inherit'
        // })
        };

        //원형 1
        var perscent = 0;
        $({per:0}).animate({per:93},{
            duration : 1500,
            progress : function(){
                percent = 439 - ( ( 439 * this.per ) / 100 );
                $('.article.i1 svg circle').css('stroke-dashoffset', percent)
            }
        })
    
        //원형2
        $({per:0}).animate({per:90},{
            duration : 2000,
            progress : function(){
                percent = 439 - ( ( 439 * this.per ) / 100 );
                $('.article.i2 svg circle').css('stroke-dashoffset', percent)
            }
        })
    
        //원형3
        $({per:0}).animate({per:75},{
            duration : 2500,
            progress : function(){
                percent = 439 - ( ( 439 * this.per ) / 100 );
                $('.article.i3 svg circle').css('stroke-dashoffset', percent)
            }
        })
    
        //컨텐츠2 가로 그래프 progress 
            var sp = $('.artBtm article .per');

            sp.each(function(a){
            var ss = $(this).attr('data-num');

            $({percent:0}).animate({percent : ss},{
                duration : 2000,
                progress : function(){
                    var numm = parseInt(this.percent);
                    $('article .bars .per').eq(a).css({
                        width : parseInt(this.percent)+'%'
                    });
                }
            });
        });

    });

    //컨텐츠2 마우스 오버 - 그래프 효과 1번더
    $('.cntWrap.cnt02').click(function(){
        //원형 1
        var perscent = 0;
        $({per:0}).animate({per:93},{
            duration : 1500,
            progress : function(){
                percent = 435 - ( ( 439 * this.per ) / 100 );
                $('.article.i1 svg circle').css('stroke-dashoffset', percent)
            }
        })
    
        //원형2
        $({per:0}).animate({per:90},{
            duration : 2000,
            progress : function(){
                percent = 435 - ( ( 439 * this.per ) / 100 );
                $('.article.i2 svg circle').css('stroke-dashoffset', percent)
            }
        })
    
        //원형3
        $({per:0}).animate({per:75},{
            duration : 2500,
            progress : function(){
                percent = 435 - ( ( 439 * this.per ) / 100 );
                $('.article.i3 svg circle').css('stroke-dashoffset', percent)
            }
        })
    
        //컨텐츠2 가로 그래프 progress 
        var sp = $('.artBtm article .per');

        sp.each(function(a){
            var ss = $(this).attr('data-num');

            $({percent:0}).animate({percent : ss},{
                duration : 2000,
                progress : function(){
                    var numm = parseInt(this.percent);
                    $('article .bars .per').eq(a).css({
                        width : parseInt(this.percent)+'%'
                    });
                }
            });
        });
    });
    

    //모바일 버전 컨텐츠2 툴 활용능력
}else{
    //원형 1
    $({per:93}).animate({per:93},{
        duration : 2000,
        progress : function(){
            percent = 245 - ( ( 245 * this.per ) / 100 );
            $('.article.i1 svg circle').css('stroke-dashoffset', percent)
        }
    })

    //원형2
    $({per:90}).animate({per:90},{
        duration : 2000,
        progress : function(){
            percent = 245 - ( ( 245 * this.per ) / 100 );
            $('.article.i2 svg circle').css('stroke-dashoffset', percent)
        }
    })

    //원형3
    $({per:75}).animate({per:75},{
        duration : 2000,
        progress : function(){
            percent = 245 - ( ( 245 * this.per ) / 100 );
            $('.article.i3 svg circle').css('stroke-dashoffset', percent)
        }
    })

    //컨텐츠2 가로 그래프 progress 
        var sp = $('.artBtm article .per');

        sp.each(function(a){
        var ss = $(this).attr('data-num');

        $({percent:0}).animate({percent : ss},{
            duration : 2000,
            progress : function(){
                var numm = parseInt(this.percent);
                $('article .bars .per').eq(a).css({
                    width : parseInt(this.percent)+'%'
                });
            }
        });
    });

    //모바일 버전 알트3 안열림
    $('.cntWrap.cnt03 section article').eq(2).find('.btn').eq(0).click(function(){
        alert('PC로 확인부탁드립니다. 태블릿/모바일 버전 작업중.');
    }); 

};



    $('.cntWrap.cnt02 section article').mouseenter(function(){
        $('.cntWrap.cnt02 section article .per').removeClass('color');
        $(this).find('.per').addClass('color');
    });


    //컨텐츠3 화면이동 
    $('.cntWrap.cnt02 .down .image').click(function(){
        if(win >= 1025){
        $('html, body').stop().animate({scrollTop : 3000},500);
        };
        // $('body').css({
        //     overflow : 'inherit'
        // })
    });



    //풀페이지 함수
        // var loc = [];
        // var cnt = 0;
        // var flag = false;
        
        // for(var i = 0; i < $('body>div').length; i++){
        //     loc[i] = $('body>div').eq(i).offset().top;
        // };

        // // ()안에는 파라미터 
        // $(window).on('mousewheel',function(eve){
        //     var ev = eve.originalEvent.wheelDelta;

        //     if(!flag){
        //         if(ev >= 120){
        //             cnt--;
        //             flag=true;
        //             $('html').animate({scrollTop:loc[cnt]},500, function(){
        //                 flag=false;
        //             });
        //         };
        //     };

        //     // flag가 아닐때 열고, 바로 닫고를 else를 넣어주면 바로 처리하기 때문에 비동기식절차를 밟게해야함.
        //     if(!flag){
        //         cnt++;
        //         flag=true;
        //         $('html').animate({scrollTop:loc[cnt]},500, function(){
        //             flag=false;
        //         });
        //     };
        //     if(cnt>=4){cnt = 4};
        //     });




    //프로젝트 페이지 (작업중 안내)
    $('.cntWrap.cnt03 section article').eq(2).find('.btn').eq(1).click(function(){
        alert('작업중입니다.');
    }); 



    // 풋터이미지(탑버튼 역할)
    $('.ftrWrap .image').click(function(){
        if(win >= 1025){        
        $('html, body').stop().animate({scrollTop : 0},500);
        $('body').css({
            overflow : 'hidden'
        })
    }else{
        $('html, body').stop().animate({scrollTop : 0},500);
    };
    });

    //탑버튼
    $('.ftrWrap .topBtn').click(function(){
        if(win >= 1025){  
        $('html, body').stop().animate({scrollTop : 0},500);
        $('body').css({
            overflow : 'hidden'
        })
    }else{
        $('html, body').stop().animate({scrollTop : 0},500);
    };
    });


});