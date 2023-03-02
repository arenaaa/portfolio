$(document).ready(function(){
    //상단 메뉴 고정
    var $header = $('header');
    var $body = $('body');
    var $counters = $('.cyber-cont');
    var $counterData = $counters.find('b');
    var $counterExecuted = false;
    $(window).scroll(function(){
        var $currentSct = $(this).scrollTop();
        var $offset = 200;
        if($currentSct > 0){
            $header.addClass('sticky');
            $body.addClass('sticky');

        }else{
            $header.removeClass('sticky');
            $body.addClass('sticky');
        }

        //숫자 애니메이션
        var $counterThreshold = $counters.offset().top - $offset;
        if(!$counterExecuted){
                if($currentSct > $counterThreshold){

                    $counterData.each(function(){
                        var $current = $(this);
                        var $target = $current.attr('data-rate');
                        //animate, progress 사용하여 숫자 카운트
                        $({rate: 0}).animate({rate : $target}, {
                            duration: 2500,
                            progress:function(){
                                var now = this.rate;
                                $current.text(Math.ceil(now));
                            }
                        })

                    });
                    $counterExecuted = true;
                    console.log($counterExecuted);
                }
            }
        }); //scroll(function)
}); //ready(function)

