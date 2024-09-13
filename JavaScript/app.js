
gsap.registerPlugin(ScrollTrigger);


document.querySelectorAll("section").forEach(section => {
    gsap.from(section, {
        opacity: 0,
        y: -10,
        duration: 1,
        scrollTrigger: {
            trigger: section,
            start: "top 60%",
            end: "bottom 10%",
            // toggleActions: "play reverse play reverse",
             markers: true,
            onEnter: () => {
                gsap.from(section.querySelectorAll(".--animated_show"), {
                    opacity: 0,
                    duration: 0.5,
                    y: -10,
                    stagger: 0.2,

                });
            }
        }
    });
});

var tl = gsap.timeline({ defaults: { duration: 0.5, ease: "none" } });
tl.from(".header__bgImage", { opacity: 0, duration: 0.5 });
tl.from(".navigete__link", { opacity: 0, duration: .4, stagger: 0.1 });
tl.from(".main-banner", { opacity: 0, duration: .4 });
tl.from("main", { opacity: 0, duration: .4 });
var swiper = new Swiper(".Best-sellers__products", {
    slidesPerView:1,
    spaceBetween: 30,
    loop: true,
    direction: "horizontal",

    autoplay: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
        
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    }
});
var swiper = new Swiper(".brand", {
    slidesPerView: 1,

    spaceBetween: 30,
    loop: true,
    direction: "horizontal",

    autoplay: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 320px
        200: {
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 4,
            spaceBetween: 40
        },
        840: {
            slidesPerView: 5,
            spaceBetween: 50
        }
    }
});
