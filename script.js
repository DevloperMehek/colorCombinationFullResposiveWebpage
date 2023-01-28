
function timeline1(){

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#home",
            start: "top top",
            end: "+=" + (window.innerHeight * 5),
            pin: true,
            scrub: true,
            // markers: true
        }
    })
    


    tl
    
        .to("#home #overlay #centerimg", {
            left: "40%",
            // transform: "translate(0%, -50%)",
            ease: Power1
        })
        .to("#home #overlay #centerimg", {
            left: "35%",
            ease: Power1
        }, "same")
        .to("#circle", {
            scale: .2,
            ease: Power1
        }, "same")
        .to("#smallcrl", {
            scale: .62,
            ease: Power1
        }, "same")
        .to("#circle #crlBtm img", {
            rotate: "-180deg",
            ease: Power1,
            stagger: .03,
        }, "same")
        .to("#overlay", {
            color: '#fff',
            ease: Power1,
        }, "same")
        .to(".span1", {
            opacity: 0,
            ease: Power1,
        }, "same")
        .to("#gallery", {
            bottom: "-50%",
            ease: Power1,
        }, "same")
        .to("#cntImg", {
            scale: 0,
            ease: Power1,
        }, "same")
        .to("#btmcrl", {
            scale: 1,
            transform: " translate(-50%,-50%)",
            top: " 50%"
        }, "same")
        .to("#mainImg img", {
            scale: 1.40,
            ease: Power1
        }, "same")
        .to("#overlay #btmNav img", {
            filter: "brightness(100)",
            ease: Power1,
            // duration:1
        }, "same")
        .to("#overlay #nav #navRgt1 .shades:nth-child(1)", {
            backgroundColor: "rgba(255, 255, 255, .400)",
            ease: Power1,
        }, "same")
        .to("#overlay #nav #navRgt1 .shades:nth-child(2)", {
            backgroundColor: "rgba(255, 255, 255, .500)",
            ease: Power1,
        }, "same")
        .to("#overlay #nav #navRgt1 .shades:nth-child(3)", {
            backgroundColor: "rgba(255, 255, 255, .600)",
            ease: Power1,
        }, "same")
        .to("#overlay #nav #navRgt1 .shades:nth-child(4)", {
            backgroundColor: "rgba(255, 255, 255, .700)",
            ease: Power1,
        }, "same")
        .to(" #overlay #nav #navRgt1 .shades:nth-child(5)", {
            backgroundColor: "rgba(255, 255, 255, .800)",
            ease: Power1,
        }, "same")
        .to("#overlay #nav #navRgt1 .shades:nth-child(6)", {
            backgroundColor: "rgba(255, 255, 255, .900)",
            ease: Power1,
        }, "same")
        .to("#mainImg img", {
            scale: 1,
            ease: Power1
        }, "samesame")
        .to("#pink", {
            top: "70%",
            transformOrigin: "0% 50% 0px",
            transform: "translate(-50%,0) rotate(0deg)",
            ease: Power0,
        }, "samesame")
        .to("#circle , #smallcrl", {
            scale: 0,
            ease: Power1,
            duration: 1,
        }, "samesame")
        .to("#btmcrl", {
            ease: Power1,
            delay: -.005,
            backgroundColor: '#fff',
        }, "samesame")
        .to("#btmcrl", {
            scale: 0,
            ease: Power1,
            delay: -.6,
            duration: 1,
        }, "same3")
        .to("#overlay #purplediv", {
            top: "-100%",
            ease: Power1,
            duration: 1.5,
            delay: -.5
        }, "same3")
    
}

function timeline2(){
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#second",
            start: "top top",
            end: "+=" + (window.innerHeight * 7),
            pin: true,
            scrub: true,
            // markers: true
        }
    })
    gsap.set("#soverlay #stop .circle",{ scale : 0.5 })
    tl2
    .to("#second #soverlay #stop .circle",{
        scale : 1,
        ease : Power0,
    },'a')
    .to("#second #soverlay #stop .circle",{
        ease : Power0,
        top : "50%",
        stagger : .1,
    },'a')
    
    .to("#second #soverlay #stop .circle",{
        ease : Power0,
        left : "50%",
    })
    
    .to("#second #soverlay #stop .circle",{
        scale : .7,
        ease : Power0,
    },'b')
    .to("#second #soverlay #btm #btm3",{
        right: "10%",
        ease : Power0,
    },'b')
    
    .to("#second #soverlay #stop .circle",{
        scale : 7,
        ease : Power0,
    },'c')
    .to("#second #soverlay #btm #btm3 ",{
        right: "50%",
        ease : Power0,
    },'c')
    
    .to("#second #soverlay #stop .circle",{
        scale : 10,
        ease : Power0,
    },'d')
    .to("#second #soverlay #nav",{
        color: "#fff",
        delay:-.5,
        ease : Power0,
    },'d')
    .to("#second #soverlay #sbtm #one",{
        top : "-100%",
        delay : .1,
        ease : Power0
    },"d")
    .to("#second #soverlay #sbtm>h1",{
        opacity:0,
        ease : Power0
    },"d")
    .to("#second #soverlay #sbtm #para2",{
        opacity:1,
        delay:1,
        ease : Power0
    },"d")
    .to("#second #soverlay #stop",{
        borderBottom:"#fff",
        ease : Power0
    },"d")
    .to("#second #soverlay #nav #navRgt1 .shades:nth-child(1)", {
        backgroundColor: "rgba(255, 255, 255, .400)",
        ease: Power1,
    }, "d")
    .to("#second #soverlay #nav #navRgt1 .shades:nth-child(2)", {
        backgroundColor: "rgba(255, 255, 255, .500)",
        ease: Power1,
    }, "d")
    .to("#second #soverlay #nav #navRgt1 .shades:nth-child(3)", {
        backgroundColor: "rgba(255, 255, 255, .600)",
        ease: Power1,
    }, "d")
    .to("#second #soverlay #nav #navRgt1 .shades:nth-child(4)", {
        backgroundColor: "rgba(255, 255, 255, .700)",
        ease: Power1,
    }, "d")
    .to(" #second #soverlay #nav #navRgt1 .shades:nth-child(5)", {
        backgroundColor: "rgba(255, 255, 255, .800)",
        ease: Power1,
    }, "d")
    .to("#second #soverlay #nav #navRgt1 .shades:nth-child(6)", {
        backgroundColor: "rgba(255, 255, 255, .900)",
        ease: Power1,
    }, "d")
    .to("#second #soverlay #sbtm #two",{
        marginTop : "-100%",
        // delay : .5,
        ease : Power0
    },"d")
    .to("#second #soverlay #sbtm #two",{
        marginTop : "-200%",
        delay : 2.3,
        ease : Power0
    },"d")
    .to("#second #soverlay #btm #btm3 ",{
        right: "82%",
        ease : Power0,
        duration : 2,
    },'d')
    .to("#second #soverlay #btm #btm4 ",{
        right: "82%",
        ease : Power0,
        delay:2,
        duration : 4,
    },'d')
    .to("#second #soverlay #stop>h1",{
        left: "-165%",
        duration : 5,
        ease : Power0
    },'d')
    .to("#second #soverlay #stop .circle",{
        background: "linear-gradient(to right,#D5A7B4,#B4AAD5)",
        delay: 2.1,
        ease : Power0
    },'d')
    
    .to("#second #soverlay #stop #plrs span",{
        top : "0%",
        height : "60vh",
        // delay: 4,
        duration:.5,
        stagger : 0.1,
        ease : Power0,
    })
    
    
    .to("#second #soverlay #stop #plrs #plr1 #p11",{
        height : "5vw",
        bottom : "5vw",
        delay:5,
        ease : Power0,
    },"e")
    .to("#second #soverlay #stop #plrs #plr1 #p12",{
        height : "5vw",
        bottom : "0%",
        ease : Power0,
    },"e")
    
    .to("#second #soverlay #stop #plrs #plr2 #p21",{
        height : "5vw",
        bottom : "5vw",
        ease : Power0,
        // delay:5,
    },"e")
    .to("#second #soverlay #stop #plrs #plr2 #p22",{
        height : "5vw",
        bottom : "0%",
        ease : Power0,
    },"e")
    
    .to("#second #soverlay #stop #plrs #plr3 #p31",{
        height : "5vw",
        bottom : "5vw",
        ease : Power0,
        // delay:5,
    },"e")
    .to("#second #soverlay #stop #plrs #plr3 #p32",{
        height : "5vw",
        bottom : "0%",
        ease : Power0,
    },"e")
    
    
    .to("#second #soverlay #stop #plrs #plr4 #p41",{
        height : "5vw",
        bottom : "5vw",
        ease : Power0,
    },"e")
    .to("#second #soverlay #stop #plrs #plr4 #p42",{
        height : "5vw",
        bottom : "0%",
        ease : Power0,
    },"e")
    
    
    .to("#second #soverlay #stop #plrs #plr5 #p51",{
        height : "5vw",
        bottom : "5vw",
        ease : Power0,
    },"e")
    .to("#second #soverlay #stop #plrs #plr5 #p52",{
        height : "5vw",
        bottom : "0%",
        ease : Power0,
    },"e")
    
    .to("#second #soverlay #stop #plrs .inp",{
        left : "-8vw",
        ease : Power0,
    },"ab")
    .to("#second #soverlay #stop #plrs #plr5 #p53",{
        height : "10vh",
        bottom : "0%",
        ease : Power0,
    },"ab")
    
    .to("#second #soverlay #stop #plrs #plr1 #p12",{
        left : "-12vw",
        ease : Power0,
        delay:4
    },"f")
    .to("#second #soverlay #stop #plrs #plr2 #p22",{
        left : "-12vw",
        ease : Power0,
    },"f")
    .to("#second #soverlay #stop #plrs #plr3 #p32",{
        left : "-12vw",
        ease : Power0,
    },"f")
    .to("#second #soverlay #stop #plrs #plr4 #p42",{
        left : "-12vw",
        ease : Power0,
    },"f")
    .to("#second #soverlay #stop #plrs #plr5 #p52",{
        left : "-12vw",
        ease : Power0,
    },"f")
    .to("#second #soverlay #stop #plrs #plr5 #p53",{
        height : "10vw",
        bottom : 0,
        ease : Power0,
    },"f")
    
}

window.addEventListener('DOMContentLoaded', function(){
    timeline1();
    timeline2(); 
}); 