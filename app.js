document.addEventListener("DOMContentLoaded", () => {


    const tl = new TimelineMax();

    tl.fromTo(".hero", 1.5,
        {
            height: "0%"
        },
        {
            height: "100%",
            ease: Power2.easeInOut
        })
        .fromTo(".slider", 1.2,
            {
                x: "-100%"
            },
            {
                x: "0%",
                ease: Power2.easeInOut
            }, "-=1.2")
        .fromTo("#logo", 0.8,
            {
                opacity: 0,
                x: 30
            },
            {
                opacity: 1,
                x: 0,
                ease: Power2.easeInOut
            }, "-=0.5")
        .fromTo("ul", 0.8,
            {
                opacity: 0,
                x: -30
            },
            {
                opacity: 1,
                x: 0,
                ease: Power2.easeInOut
            }, "-=1")
        .fromTo(".headline", 0.8,
            {
                opacity: 0,
                x: 60
            },
            {
                opacity: 1,
                x: 0,
                ease: Power2.easeInOut
            }, "-=.8")
        .fromTo(".headline2", 0.8,
            {
                opacity: 0,
                x: -60
            },
            {
                opacity: 1,
                x: 0,
                ease: Power2.easeInOut
            }, "-=.5")
        .fromTo(".coleccion", 1.5,
            {
                opacity: 0,
            },
            {
                opacity: .5,
                ease: Power2.easeInOut
            }, "-=.5")
        .fromTo(".descubrir", 1.5,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                ease: Power2.easeInOut
            }, "-=2.2")
        .fromTo(".img-sp-sm", 1.2,
            {
                opacity: 0
            },
            {
                opacity: 1,
                ease: Power2.easeInOut
            }, "-=2")
        .fromTo(".heading", 1,
            {
                x: 60,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                ease: Power2.easeInOut
            }, "-=2.5")
        .fromTo(".colections-title", 1,
            {
                opacity: 0
            },
            {
                opacity: .5,
                ease: Power2.easeInOut
            }, "-=2")
        .fromTo(".nosotros-info", 1.5,
            {
                height: "0%"
            },
            {
                height: "100%",
                ease: Power2.easeInOut
            }, "-=3.4")
        .fromTo(".heading-title", 1.5,
            {
                opacity: 0
            },
            {
                opacity: 1,
                ease: Power2.easeInOut
            }, "-=2")
        .fromTo(".heading-text1", 1.5,
            {
                opacity: 0
            },
            {
                opacity: 1,
                ease: Power2.easeInOut
            }, "-=1.5")
        .fromTo(".heading-text2", 1.5,
            {
                opacity: 0
            },
            {
                opacity: 1,
                ease: Power2.easeInOut
            }, "-=1.2")

    const controller = new ScrollMagic.Controller();

    const tl2 = new TimelineMax();
    tl2
        .fromTo(".photo-vertical", 2, {
            opacity: 0,
            x: "-50%"
        }, {
            opacity: 1,
            x: "0%"
        })
        .fromTo(".photo-horizontal", 2, {
            opacity: 0,
            x: "50%"
        }, {
            opacity: 1,
            x: "0%"
        }, "-=2")

    let scene = new ScrollMagic.Scene({
        triggerElement: ".photo-vertical",
        duration: "100%",
        triggerHook: 1,
    })
        .setTween(tl2)
        .addIndicators()
        .addTo(controller);


    const tl3 = new TimelineMax();
    tl3
        .fromTo(".section-2-wrapper", 1, {
            height: 0
        }, {
            height: "40%"
        })

    let scene2 = new ScrollMagic.Scene({
        triggerElement: ".section-2-wrapper",
        triggerHook: 1,
        offset: "-100"
    })
        .setTween(tl3)
        .addIndicators()
        .addTo(controller);


    const tl4 = new TimelineMax();
    tl4.fromTo(".section-3-wrapper", 2.5, {
        height: 0
    }, {
        height: "20%"
    })

    let scene3 = new ScrollMagic.Scene({
        triggerElement: ".section-3-wrapper",
        triggerHook: 1,
        offset: "-100"
    })
        .setTween(tl4)
        .addIndicators()
        .addTo(controller);


    const tl5 = new TimelineMax();
    tl5.fromTo("blockquote", 3, {
        opacity: 0
    }, {
        opacity: 1
    })

    let scene4 = new ScrollMagic.Scene({
        triggerElement: "blockquote",
        triggerHook: 1,
        offset: "-100"
    })
        .setTween(tl5)
        .addIndicators()
        .addTo(controller);

    const tl6 = new TimelineMax();
    tl6.fromTo(".insta-p", 2, {
        y: 30
    }, {
        y: 0
    })
        .fromTo(".insta-a", 2, {
            y: 30
        }, {
            y: 0
        }, "-=2")

    let scene5 = new ScrollMagic.Scene({
        triggerElement: ".section-5",
        triggerHook: 1,
        offset: "100"
    })
        .setTween(tl6)
        .addIndicators()
        .addTo(controller);

    const tl7 = new TimelineMax();
    tl7.fromTo(".glide", 2, {
        y: 30
    }, {
        y: 0
    })

    let scene6 = new ScrollMagic.Scene({
        triggerElement: ".section-colecciones-1",
        triggerHook: 1,
        offset: "100"
    })
        .setTween(tl7)
        .addIndicators()
        .addTo(controller);

    const tl8 = new TimelineMax();
    tl8.fromTo(".colecciones-img", 2, {
        y: 30
    }, {
        y: 0
    })
        .fromTo(".collecion-about-title", 2, {
            y: 30
        }, {
            y: 0
        }, "-=1")
        .fromTo(".collecion-about-desc", 2, {
            y: 30
        }, {
            y: 0
        }, "-=1.5")

    let scene7 = new ScrollMagic.Scene({
        triggerElement: ".section-colecciones-2",
        triggerHook: 1,
        offset: "-100"
    })
        .setTween(tl8)
        .addIndicators()
        .addTo(controller);

    const tl9 = new TimelineMax();
    tl9.fromTo(".full-collection-title", 1, {
        y: 50
    }, {
        y: 0
    })
        .fromTo(".full-collection-wrapper", 1, {
            y: 50
        }, {
            y: 0
        }, "-=.5")

    let scene8 = new ScrollMagic.Scene({
        triggerElement: ".section-colecciones-3",
        triggerHook: 1,
    })
        .setTween(tl9)
        .addIndicators()
        .addTo(controller);

    const tl10 = new TimelineMax();
    tl10.fromTo(".heading-2", 1, {
        x: 50,
        opacity: 0
    }, {
        x: 0,
        opacity: 1
    })
        .fromTo(".content-3", 1, {
            x: -50,
            opacity: 0
        }, {
            x: 0,
            opacity: 1
        })

    let scene9 = new ScrollMagic.Scene({
        triggerElement: ".section-nosotros-1",
        triggerHook: 1,
        offset: "10"
    })
        .setTween(tl10)
        .addIndicators()
        .addTo(controller);

    const tl11 = new TimelineMax();
    tl11.fromTo(".sewing-1", 1.5, {
        y: 100,
        opacity: 0
    }, {
        y: 0,
        opacity: 1
    })
        .fromTo(".sewing-2", 1.5, {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1
        })

    let scene10 = new ScrollMagic.Scene({
        triggerElement: ".section-nosotros-2",
        triggerHook: 1,
        offset: "100"
    })
        .setTween(tl11)
        .addIndicators()
        .addTo(controller);




})






