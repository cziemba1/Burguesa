const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const nav = document.querySelector("ul");
const headline = document.querySelector(".headline");
const headline2 = document.querySelector(".headline2");
const colection = document.querySelector(".coleccion");
const discover = document.querySelector(".descubrir");

const tl = new TimelineMax();

tl.fromTo(hero, 1.5,
    {
        height: "0%"
    },
    {
        height: "100%",
        ease: Power2.easeInOut
    })
    .fromTo(slider, 1.2,
        {
            x: "-100%"
        },
        {
            x: "0%",
            ease: Power2.easeInOut
        }, "-=1.2")
    .fromTo(logo, 0.8,
        {
            opacity: 0,
            x: 30
        },
        {
            opacity: 1,
            x: 0,
            ease: Power2.easeInOut
        }, "-=0.5")
    .fromTo(nav, 0.8,
        {
            opacity: 0,
            x: -30
        },
        {
            opacity: 1,
            x: 0,
            ease: Power2.easeInOut
        }, "-=1")
    .fromTo(headline, 0.8,
        {
            opacity: 0,
            x: 60
        },
        {
            opacity: 1,
            x: 0,
            ease: Power2.easeInOut
        }, "-=.8")
    .fromTo(headline2, 0.8,
        {
            opacity: 0,
            x: -60
        },
        {
            opacity: 1,
            x: 0,
            ease: Power2.easeInOut
        }, "-=.5")
    .fromTo(colection, 1.5,
        {
            opacity: 0,
        },
        {
            opacity: .5,
            ease: Power2.easeInOut
        }, "-=.5")
    .fromTo(discover, 1.5,
        {
            opacity: 0,
        },
        {
            opacity: 1,
            ease: Power2.easeInOut
        }, "-=2.2")