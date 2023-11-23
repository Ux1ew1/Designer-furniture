'use strict'

function lastSlider() {
  let mySwiper = ''
  let breakpoint = window.matchMedia('(max-width: 1024px)')
  let breakpointChecker = function () {
    if (breakpoint.matches) {
      if (mySwiper) {
        mySwiper.destroy(true, true)
      }

      var swiper = new Swiper('.last-item__slider', {
        slidesPerView: 4,
        spaceBetween: 31,
        scrollbar: {
          el: '.last-scrollbar',
          hide: false,
        },
        breakpoints: {
          768: {
            slidesPerView: 'auto',
            spaceBetween: 31,
            scrollbar: {
              el: '.last-scrollbar',
              hide: false,
            },
          },
          425: {
            slidesPerView: 'auto',
            spaceBetween: 31,
            scrollbar: {
              el: '.last-scrollbar',
              hide: false,
            },
            pagination: {
              el: '.last-pagination',
              type: 'fraction',
            },
          },
          320: {
            slidesPerView: 'auto',
            spaceBetween: 31,
            pagination: {
              el: '.last-pagination',
              type: 'fraction',
            },
            scrollbar: {
              el: '.last-scrollbar',
              hide: false,
            },
          },
        },
      })
      return
    } else {
      if (mySwiper) {
        mySwiper.destroy(true, true)
      }
      var swiper = new Swiper('.last-item__slider', {
        slidesPerView: 4,
        spaceBetween: 31,
        allowSlidePrev: 'false',
      })
    }
  }
  breakpoint.addListener(breakpointChecker)
  breakpointChecker()
}

lastSlider()
