$(function(){
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
    })
    $('[data-hover]').on('mouseleave',function(){
        $('.cursor').removeClass('cursor-over')
    })
})