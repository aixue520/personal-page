/**
 * Created by Administrator on 2015/10/5.
 */
function blink(selector){
    $(selector).fadeOut('slow', function(){
        $(this).fadeIn('slow', function(){
            blink(this);
        });
    });
}
$(document).ready(function(){
    blink('.motto');

    $(function(){
        $.fn.fullpage({
            verticalCentered: false,
            css3: true,
            scrollOverflow: false,
            anchors: ['page1', 'page2', 'page3', 'page4'],
            navigation: true,
            menu:'header,aside',
            navigationPosition: 'right',
            navigationTooltips:['首页','专业技能','教育情况','爱好&自评'],
            onLeave: function(index , nextIndex, direction){
                if(index == 2){
                    $('.html-and-css').animate({width:0},300);
                    $('.javascript').animate({width:0},300);
                    $('.jQuery').animate({width:0},300);
                    $('.php-and-mysql').animate({width:0},300);
                    $('.photoshop').animate({width:0},300);
                    $('.ajax').animate({width:0},300);
                    $('.fade').fadeOut(300);
                }
                if(index == 3){
                    $('.eduction-list-item-detail').slideUp(300);
                }
                if(index == 4){
                    $('.hobby').animate({
                        'margin-top': '50%',
                        'margin-left': '50%',
                        height: '0',
                        width: '0'
                    });
                }
            },
            afterLoad: function(anchorLink, index){
                if(index == 2){
                    $('.html-and-css').animate({width: "100%"},1000);
                    $('.javascript').animate({width: "80%"},1000);
                    $('.jQuery').animate({width: "70%"},1000);
                    $('.php-and-mysql').animate({width: "60%"},1000);
                    $('.photoshop').animate({width: "40%"},1000);
                    $('.ajax').animate({width: "20%"},1000);
                }
                if(index == 3){
                    $('.eduction-list-item-detail').slideDown(800,'easeOutElastic');
                }
                if(index == 4){
                    $('.hobby').animate({
                        'margin-top': 0,
                        'margin-left': 0,
                        height: '85%',
                        width: '85%'
                    },1000);
                }

            }
        })
    });
});




