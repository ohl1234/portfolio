$(function(){
    ScrollTrigger.matchMedia({
        // large
        "(min-width: 1024px)": function() {

            /**
             *  header hide
             */

            $(window).scroll(function(){
                curr = $(this).scrollTop();
                contactArea = $('.sc-contact').offset().top;

                if(curr >= contactArea - 200){
                    $('.header').addClass('active')
                }else{
                    $('header').removeClass('active')
                }
            })

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
        
            $('[data-hover]').hover(function(){
                $('.cursor').addClass('cursor-over')
                $(this).addClass('active')
            },function(){
                $('.cursor').removeClass('cursor-over')
                $(this).removeClass('active')
            })

            $('[data-img]').hover(function(){
                $('.cursor').addClass('img-over')
                $(this).addClass('active')
            },function(){
                $('.cursor').removeClass('img-over')
                $(this).removeClass('active')
            })
            /**
             *  img hover event
             */

            profile = gsap.to('.intro-bg',{width:'25vw',paused:true})
            $('#profileHover').hover(function(){
                profile.play();
            },function(){
                profile.reverse();
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

            /**
             * round cursor event
             */

            $(".sc-contact .sub-tit").mousemove(function(e){
                var x = ((-$(this).width() / 2) + e.offsetX) *0.3;      
                // -(sub-tit width / 2) + sub-tit offsetX값 * 0.3
                var y = ((-$(this).height() / 2) + e.offsetY) *0.3;     
                // -(sub-tit width / 2) + sub-tit offsetY값 * 0.3
                gsap.to(".sc-contact .link-mail", {
                    transform: "translate(" + x + "px," + y + "px)"
                    })
                })
            $(".sc-contact .sub-tit").mouseout(function(e){
                gsap.to(".sc-contact .link-mail", {
                    transform: "translate(0,0)"
                 })
            })

            $(".sc-intro .sub-tit").mousemove(function(e){
                var x = ((-$(this).width() / 2) + e.offsetX) *0.3;   
                var y = ((-$(this).height() / 2) + e.offsetY) *0.3;
                gsap.to(".sc-intro .round", {
                    transform: "translate(" + x + "px," + y + "px)"
                })
            })
            $(".sc-intro .sub-tit").mouseout(function(e){
                gsap.to(".sc-intro .round", {
                    transform: "translate(0,0)"
                })
            })
            
        },
        // medium
        "(min-width: 768px) and (max-width: 1023px)": function() { 

            /**
             *  header hide
             */

             $(window).scroll(function(){
                curr = $(this).scrollTop();
                goalArea = $('.sc-goal').offset().top;

                if(curr >= goalArea + 200){
                    $('.header').addClass('active')
                }else{
                    $('header').removeClass('active')
                }
            })

            /**
             * moust event 
             */

            $('[data-hover]').hover(function(){ 
                $(this).removeClass('active')
            })
            $('[data-img]').hover(function(){ 
                $(this).removeClass('active')
            })

            /**
             *  img hover event
             */

            $('#profileHover').hover(function(){
                profile.paused();
                $(this).css('cursor','default')
            },function(){
                profile.paused();
                $(this).css('cursor','default')
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

            /**
             *  header hide
             */

            $(window).scroll(function(){
                curr = $(this).scrollTop();
                goalArea = $('.sc-goal').offset().top;

                if(curr >= goalArea + 500){
                    $('.header').addClass('active')
                }else{
                    $('header').removeClass('active')
                }
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
                y:'-400px',
                delay:0.6
            })
        },
        // all
        "all": function() {

            /**
             *  loading ani
             */

            const loadingAni = gsap.timeline({
                onComplete:function(){
                    introAni.play();
                }
            })
            loadingAni.addLabel('a')
            .to('.loading .list1',{y:'-280vw',duration:4},'a')
            .to('.loading .list2',{y:'-140vw',duration:5},'a')
            .to('.loading .list3',{y:'-340vw',duration:3},'a')
            .to('.loading',{yPercent:-100,display:'none'},'a+=5')

            /**
             * text-motion
             */

            gsap.set(".txt-motion", {
                yPercent: 110,
                transformStyle: "preserve-3d",
                opacity: 0,
                rotationX: -45,
                transformOrigin: "0% 50% -100%",
            });
        
            const introAni = gsap.to('.sc-visual .txt-motion', {
            transformStyle: "preserve-3d",
            opacity: 1,
            rotationX: 0,
            transformOrigin: "50% 50%",
            yPercent: 0,
            duration:1.2,
            stagger:0.1,
            paused:true
            });

            gsap.to('.sc-intro .txt-motion',{
                scrollTrigger:{
                    trigger:'.sc-visual',
                    start: "40% top",
                },
                transformStyle: "preserve-3d",
                opacity: 1,
                rotationX: 0,
                transformOrigin: "50% 50%",
                yPercent: 0,
                duration:1.5,
                stagger:0.1
            });

            gsap.to('.sc-contact .txt-motion',{
                scrollTrigger:{
                    trigger:'.sc-contact',
                    start: "top 50%"
                },
                transformStyle: "preserve-3d",
                opacity: 1,
                rotationX: 0,
                transformOrigin: "50% 50%",
                yPercent: 0,
                duration:1.5,
                stagger:0.1
            });

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

            /**
             *  project-area dim
             */

            $('.project-wrap').each(function(i,el){
                child = $(this).find('.bg-shadow')
                gsap.to(child,{
                    scrollTrigger:{
                        trigger:el,
                        start:"top top",
                        end:"bottom top",
                        scrub:1
                    },
                    opacity:1
                })
            })

            /**
             * background color change 
             */

            $('[data-color]').each(function(i,el){ 
                color = ($(this).data('color') == '#fff') ? 'white' : 'black' // 만약 data-color = "#fff" 면 "white" 아니면 "black" -> 클래스명 변수
                gsap.to('.background',{
                    scrollTrigger:{
                        trigger:el,
                        start:"top 40%",
                        end:"bottom top",
                        scrub:1,
                        toggleClass: {targets: ".background", className: color}
                    }
                })
            })

        }
      });
})