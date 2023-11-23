'use strict'

function lastSlider() {
  let mySwiper = ''
  let breakpoint = window.matchMedia('(max-width: 767px)')
  let breakpointChecker = function () {
    if (breakpoint.matches) {
      if (mySwiper) {
        mySwiper.destroy(true, true)
      }

      mySwiper = new Swiper('.last-item__slider', {
        slidesPerView: 4,
        spaceBetween: 100,

        scrollbar: {
          el: '.last-scrollbar',
        },
      })
      return
    } else {
      if (mySwiper) {
        mySwiper.destroy(true, true)
      }

      mySwiper = new Swiper('.last-item__slider', {
        spaceBetween: 40,
        scrollbar: {
          el: '.last-scrollbar',
        },
      })
    }
  }
  breakpoint.addListener(breakpointChecker)
  breakpointChecker()
}

lastSlider()
