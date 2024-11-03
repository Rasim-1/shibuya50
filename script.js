const burger = document.querySelector('.burger')
const nav = document.querySelector('.nav')

burger.addEventListener('click' , () => {
    nav.classList.toggle('active')
})



const swiperAlbum1 = new Swiper('.swiper-album-1', {
    loop: true,
    slidesPerView: 0.3,
    spaceBetween: 8,

    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },

    breakpoints: {
        500: {
            slidesPerView: 0.4,
        },

        700: {
            slidesPerView: 0.5,
        },

        900: {
            slidesPerView: 0.6,
        }
    },

    allowTouchMove: false,

    speed: 20000
});


const swiperAlbum2 = new Swiper('.swiper-album-2', {
    loop: true,
    slidesPerView: 0.3,
    spaceBetween: 8,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: true
    },

    
    breakpoints: {
        500: {
            slidesPerView: 0.4,
        },

        700: {
            slidesPerView: 0.5,
        },

        900: {
            slidesPerView: 0.6,
        }
    },

    
    allowTouchMove: false,

    speed: 20000
});



const swiperAlbum3 = new Swiper('.swiper-album-3', {
    loop: true,
    slidesPerView: 0.3,
    spaceBetween: 8,

    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },

    breakpoints: {
        500: {
            slidesPerView: 0.4,
        },

        700: {
            slidesPerView: 0.5,
        },

        900: {
            slidesPerView: 0.6,
        }
    },

    allowTouchMove: false,

    speed: 20000
});

const swiperAlbum4 = new Swiper('.swiper-album-4', {
    loop: true,
    slidesPerView: 0.3,
    spaceBetween: 4,

    autoplay: {
        delay: 0,
        reverseDirection: true

    },

    breakpoints: {
        500: {
            slidesPerView: 0.4,
        },

        700: {
            slidesPerView: 0.5,
        },

        800: {
            slidesPerView: 0.6,
        }
    },

    allowTouchMove: false,

    speed: 30000
});

