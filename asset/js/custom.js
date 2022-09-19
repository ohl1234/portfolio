$(function(){
    //moust event
    $(window).resize(function(){ 
        if (window.innerWidth > 767) {  
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
        }
        
    }).resize(); 

    // Trigger event
    gsap.set('.sc-visual .txt-line1',{xPercent:-180})
    gsap.set('.sc-visual .txt-line2',{xPercent:180})
    const visualAni = gsap.timeline({
            scrollTrigger:{
            trigger:'.sc-visual .sc-title',
            start:'top bottom',
            end:'bottom top',
            scrub:1
        }
    });
    visualAni.addLabel('a')
    .to('.sc-visual .txt-line1',{xPercent:100},'a')
    .to('.sc-visual .txt-line2',{xPercent:-100},'a')

    gsap.from('.sc-intro .point-area img',{
        scrollTrigger:{
            trigger:'.point-area',
            start:'top bottom',
            end:'bottom top',
            markers:true,
            scrub:1
        },
        scale:1.4
    })

    // img trigger
    $('[data-fade]').each(function(i,el){
        gsap.from(el,{
            scrollTrigger:{
                trigger:el,
                start:"top 80%",
                end:"bottom top",
                scrub:1
            },
            yPercent:40,
            opacity:0,
            duration:0.8
        })
    });

    // number trigger
    gsap.set('.sc-intro .num-list',{y:0})
    gsap.set('.sc-goal .num-list',{y:0})

    gsap.to('.sc-intro .num-list',{
        scrollTrigger:{
            trigger:'.sc-intro .num-list',
            start:"top 50%",
            end:"bottom top",
        },
        duration:1,
        y:'-280px'
    })
    gsap.to('.sc-goal .num-list',{
        scrollTrigger:{
            trigger:'.sc-goal .num-list',
            start:"top 50%",
            end:"bottom top",
        },
        duration:1,
        y:'-560px'
    })



    // background color change
    // 퍼스펙티브 3d
    // 원 호버하면 따라다니는거
    // 로딩 
    // 호버시 사진 펼쳐지기
    // 
})