$(function(){
    ScrollTrigger.matchMedia({
        // large


        "(min-width: 1024px)": function() {

            /**
             * moust event 
             */

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
                $(this).css('cursor','auto');
            })
            $('[data-img]').on('mouseover',function(){
                $('.cursor').addClass('img-over')
                $(this).css('cursor','none');
            })
            $('[data-img]').on('mouseleave',function(){
                $('.cursor').removeClass('img-over')
                $(this).css('cursor','auto');
            })



            /**
             * number trigger
             */
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
        },
        // medium
        "(min-width: 768px) and (max-width: 1024px)": function() { 

            /**
             * number trigger
             */
            gsap.set('.sc-intro .num-list',{y:0})
            gsap.set('.sc-goal .num-list',{y:0})

            gsap.to('.sc-intro .num-list',{
                scrollTrigger:{
                    trigger:'.sc-intro .num-list',
                    start:"top 50%",
                    end:"bottom top",
                },
                duration:1,
                y:'-200px'
            })
            gsap.to('.sc-goal .num-list',{
                scrollTrigger:{
                    trigger:'.sc-goal .num-list',
                    start:"top 50%",
                    end:"bottom top",
                },
                duration:1,
                y:'-400px'
            })
        },
        // small
        "(max-width: 767px)": function() {
            $('[data-hover]').on('mouseover',function(){
                $(this).css('cursor','auto');
            })
            /**
             * number trigger
             */
            gsap.set('.sc-intro .num-list',{y:0})
            gsap.set('.sc-goal .num-list',{y:0})

            gsap.to('.sc-intro .num-list',{
                scrollTrigger:{
                    trigger:'.sc-intro .num-list',
                    start:"top 80%",
                    end:"bottom top",
                },
                duration:1,
                y:'-200px'
            })
            gsap.to('.sc-goal .num-list',{
                scrollTrigger:{
                    trigger:'.sc-goal .num-list',
                    start:"top 80%",
                    end:"bottom top",
                },
                duration:1,
                y:'-400px'
            })
        },
        // all
        "all": function() {

            /**
             * Trigger event
             */
            const visualAni = gsap.timeline({
                    scrollTrigger:{
                    trigger:'.sc-visual .sc-title',
                    start:'top 30%',
                    end:'bottom top',
                    scrub:1
                }
            });
            visualAni.addLabel('a')
            .to('.sc-visual .txt-line1',{xPercent:100},'a')
            .to('.sc-visual .txt-line2',{xPercent:-100},'a')
            
            /**
             * Trigger 
             */
            $('[data-fade]').each(function(i,el){
                gsap.from(el,{
                    scrollTrigger:{
                        trigger:el,
                        start:"top 120%",
                        end:"bottom top",
                        scrub:1,
                    },
                    yPercent:15,
                    opacity:0,
                    duration:0.3
                })
             });

            /**
             * img trigger
             */
            gsap.from('.sc-intro .point-area img',{
                scrollTrigger:{
                    trigger:'.point-area',
                    start:'top bottom',
                    end:'bottom top',
                    scrub:1
                },
                scale:1.4
            })
        }
      });



    // background color change
    // 퍼스펙티브 3d
    // 원 호버하면 따라다니는거
    // 로딩 
    // 호버시 사진 펼쳐지기
    // 
})