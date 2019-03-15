$(".coffee-item").click(function(){
    //切换下标线
    $('.coffee-item').find('span').removeClass('active');
    $(this).find('span').addClass('active');

    //切换咖啡种类
    var index = $(this).index();
    $('.item').css('opacity', '0');
    $('.item').eq(index).css({
        opacity: '1'
    });
})

// 动画效果：从左向右滑出
function moveRight (dom, time){
    dom.css({
        transform: 'translateX(0)',
        transition: 'all 1s cubic-bezier(.42,0,.58,1)' + time
    })
}

$(document).ready(function(){
    moveRight($('#nav'), '0s');
    moveRight($('.intro'), '0s');
    moveRight($('.coffee'), '0s');
    moveRight($('#aboutUs-h3'), '0s');
    moveRight($('.aboutUs-p'), '0.2s');
})
