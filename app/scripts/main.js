// jshint devel:true
$(function() {
  'use strict';

  function setBodyClass(theme) {
    $('body').removeClass().addClass('theme-' + theme);
  }

  var testSlider = new Swiper('.js-carousel-test', {
    speed: 800,
    pagination: '.swiper-pagination',
    paginationClickable: true,
    direction: 'vertical',
    mousewheelControl: true,
    nextButton: '.caption-nav-link.next',
    prevButton: '.caption-nav-link.prev',
    onInit: function(swiper) {
      setBodyClass(swiper.slides[swiper.activeIndex].dataset.theme);
    },

    onSlideChangeStart: function(swiper) {
      setBodyClass(swiper.slides[swiper.activeIndex].dataset.theme);
    }
  });

  var testSliderH = new Swiper('.swiper-container-h', {
    pagination: '.swiper-pagination-h',
    paginationClickable: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 30
  });

  var mainSlider = new Swiper('.js-carousel-main', {
    speed: 800,
    pagination: '.swiper-pagination',
    paginationClickable: true,
    direction: 'vertical',
    mousewheelControl: true,
    nextButton: '.caption-nav-link.next',
    prevButton: '.caption-nav-link.prev',
    onInit: function(swiper) {
      setBodyClass(swiper.slides[swiper.activeIndex].dataset.theme);
    },

    onSlideChangeStart: function(swiper) {
      setBodyClass(swiper.slides[swiper.activeIndex].dataset.theme);
    }
  });

  var clientSlider = new Swiper('.js-carousel-client', {
    speed: 800,
    pagination: '.client-pagination',
    paginationClickable: true,
    bulletClass: 'client-pagination-item',
    bulletActiveClass: 'client-pagination-item-active',
    direction: 'vertical',
    mousewheelControl: true,
    nextButton: '.caption-nav-link.next',
    prevButton: '.caption-nav-link.prev',
    onInit: function(swiper) {
      setBodyClass(swiper.slides[swiper.activeIndex].dataset.theme);
    },

    onSlideChangeStart: function(swiper) {
      setBodyClass(swiper.slides[swiper.activeIndex].dataset.theme);
    },

    paginationBulletRender: function(index, className) {
      var data = $('.js-carousel-client .swiper-slide').eq(index).data();
      return '<li class="' + className + '"><a class="link" href="#"><span>' + data.name + '</span></a></li>';
    }
  });

  var teamSlider = new Swiper('.js-carousel-team', {
    speed: 800,
    grabCursor: true,
    pagination: '.team-pagination',
    paginationClickable: true,
    bulletClass: 'team-pagination-item',
    bulletActiveClass: 'team-pagination-item-active',
    direction: 'vertical',
    mousewheelControl: true,
    nextButton: '.caption-nav-link.next',
    prevButton: '.caption-nav-link.prev',
    scrollbar: '.swiper-scrollbar',
    scrollbarHide: true,
    parallax: true,
    onInit: function(swiper) {
      setBodyClass(swiper.slides[swiper.activeIndex].dataset.theme);
    },

    onSlideChangeStart: function(swiper) {
      setBodyClass(swiper.slides[swiper.activeIndex].dataset.theme);
    },

    paginationBulletRender: function(index, className) {
      var data = $('.js-carousel-team .swiper-slide').eq(index).data();
      return '<li class="' + className + '"><span>' + data.name + '</span> ' + data.position + '</li>';
    }
  });

  // if ($('#wrapper').length) {
  //   var myScroll = new IScroll('#wrapper', {
  //     scrollbars: true,
  //     mouseWheel: true,
  //     scrollY: true,
  //     bounce: true,
  //     momentum: false,
  //     snap: true,
  //     probeType: 3
  //   });

  //   setBodyClass($('#scroller .section').eq(0).data('theme'));

  //   myScroll.on('scroll', function() {
  //     var $activePageBg = $('#scroller .section').eq(this.currentPage.pageY).find('.section-bg');
  //     console.log(this.y, this.currentPage);
  //     $activePageBg.css({
  //       transform: 'translate3d(0, ' + ((this.y > 0 ? this.y : this.y * -1) / (window.innerHeight / 100)) + '%, 0)'
  //     });
  //   });

  //   myScroll.on('scrollStart', function() {
  //     $('#wrapper').addClass('is-scrolling');
  //     console.log('scroll start');
  //   });

  //   myScroll.on('scrollEnd', function() {
  //     $('#wrapper').removeClass('is-scrolling')
  //     console.log('scroll end');
  //     setBodyClass($('#scroller .section').eq(this.currentPage.pageY).data('theme'));
  //   });

  //   document.addEventListener('touchmove', function(e) {
  //     e.preventDefault();
  //   }, false);
  // }

  var $frame  = $('#smart');
  var $slidee = $frame.children('ul').eq(0);
  var $wrap   = $frame.parent();

  // Call Sly on frame
  $frame.sly({
    itemNav: 'basic',
    smart: 1,
    activateOn: 'click',
    mouseDragging: 1,
    touchDragging: 1,
    releaseSwing: 1,
    startAt: 3,
    scrollBar: $wrap.find('.scrollbar'),
    scrollBy: 1,
    pagesBar: $wrap.find('.pages'),
    activatePageOn: 'click',
    speed: 300,
    elasticBounds: 1,
    easing: 'easeOutExpo',
    dragHandle: 1,
    dynamicHandle: 1,
    clickBar: 1
  });

});
