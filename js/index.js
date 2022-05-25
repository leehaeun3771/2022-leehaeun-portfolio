$(function(){

    // // 스크롤
    // $(window).scroll(function(){
    //     var wd = $(window).width();
    //     if(wd > 1024){

    //     var now = $(this).scrollTop();
    //     console.log(now);
    //     if(now >= 100 && now <=1200){
    //         $('div.cntWrap:first').addClass('scroll');
    //     }else if(now >= 1200 && now <= 2800){
    //         $('div.cntWrap:eq(1)').addClass('scroll');
    //     }else if(now >= 2800 && now <= 3700){
    //         $('div.cntWrap:eq(2)').addClass('scroll');
    //     }else if(now >= 3700 && now <= 4500){
    //         $('div.cntWrap:eq(3)').addClass('scroll');
    //     }else if(now >= 4500 && now <= 5000){
    //         $('div.cntWrap:eq(4)').addClass('scroll');
    //     }
    //     else if(now >= 5000 && now < 5100){
    //         $('div.bnrWrap:eq(0)').addClass('scroll');
    //     }else if(now >= 5300 && now < 6200){
    //         $('div.bnrWrap:eq(1)').addClass('scroll');
    //     }else{
    //         $('div.ftrWrap').addClass('scroll');
    //     };

    //     if(now >= 1800 && now <= 2100){
    //         $('div.cntWrap:eq(1)').addClass('cnton');
    //     };
    // };
        
    // });


    $(window).mousemove(function(eve){
        var posX = 0, posY = 0;
        posX=eve.clientX;
        posY=eve.clientY;
        
        var now = $(this).scrollTop();
        // console.log(now);

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

    //컨텐츠2 화면이동 
    $('.cntWrap.cnt01 .down .image').click(function(){
        $('html, body').stop().animate({scrollTop : 2000},500);
        // $('body').css({
        //     overflow : 'inherit'
        // })

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



        $('.cntWrap.cnt02 section article').mouseenter(function(){
            $('.cntWrap.cnt02 section article .per').removeClass('color');
            $(this).find('.per').addClass('color');
        });







    //컨텐츠3 화면이동 
    $('.cntWrap.cnt02 .down .image').click(function(){
        $('html, body').stop().animate({scrollTop : 3000},500);
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
    $('.cntWrap.cnt03 section article').eq(2).find('.btn').click(function(){
        alert('작업중입니다.');
    }); 



    // 풋터이미지(탑버튼 역할)
    $('.ftrWrap .image').click(function(){
        $('html, body').stop().animate({scrollTop : 0},500);
        $('body').css({
            overflow : 'hidden'
        })
    });

    //탑버튼
    $('.ftrWrap .topBtn').click(function(){
        $('html, body').stop().animate({scrollTop : 0},500);
        $('body').css({
            overflow : 'hidden'
        })
    });


});