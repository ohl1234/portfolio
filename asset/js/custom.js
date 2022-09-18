$(function(){
    // 마우스커서 모바일땐 없애기
    $(window).mousemove(function(e){
        e.preventDefault();
        gsap.to('.cursor',{
            x:e.clientX,
            y:e.clientY,
            duration:.2,
        })
    })

    $('[data-hover]').on('mouseover',function(){
        $('.cursor').addClass('cursor-over')
        $(this).css('cursor','none');
    })
    $('[data-hover]').on('mouseleave',function(){
        $('.cursor').removeClass('cursor-over')
    })
    
    // 바탕색 변하는거
    // 스크롤 트리거 이벤트
    // 퍼스펙티브 3d
    // 사진 스크롤 트리거
    // 원 호버하면 따라다니는거
    // 로딩 
    // 호버시 사진 펼쳐지기
    // 
})