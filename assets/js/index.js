
$(function () {

  // ======================================
  // スクロールでヘッダー固定
  // ======================================
  var windowWidth = $(window).width();
  var windowHeight = $(window).height() + 348;

  if (windowWidth > 833) {
    $(window).scroll(function() {
      if($(this).scrollTop() > windowHeight) {
        $('#header').addClass('is-fixed');
      } else {
        $('#header').removeClass('is-fixed');
      }
    });
  }

  // =========================================================
  // スクロールして表示領域に入ったらclass付与
  // =========================================================
  // $(".anim").on("inview", function () {
  //   $(this).addClass("is-active");
  // });

  $(".animate__animated").css({'opacity': 0});

  $(".lightSpeedInRight").each(function () {
    if($(window).height() > $(this).offset().top){
      $(this).addClass("animate__lightSpeedInRight").css({'opacity': 1});
    }
  });

  $(".bounceIn").each(function () {
    if($(window).height() > $(this).offset().top){
      $(this).addClass("animate__bounceIn").css({'opacity': 1});
    }
  });

  $(".bounceInRight").each(function () {
    if($(window).height() > $(this).offset().top){
      $(this).addClass("animate__bounceInRight").css({'opacity': 1});
    }
  });

  $(".bounceInDown").each(function () {
    if($(window).height() > $(this).offset().top){
      $(this).addClass("animate__bounceInDown").css({'opacity': 1});
    }
  });

  $(".zoomInUp").each(function () {
    if($(window).height() > $(this).offset().top){
      $(this).addClass("animate__zoomInUp").css({'opacity': 1});
    }
  });

  $(".zoomInRight").each(function () {
    if($(window).height() > $(this).offset().top){
      $(this).addClass("animate__zoomInRight").css({'opacity': 1});
    }
  });

  $(".fadeInLeftBig").each(function () {
    if($(window).height() > $(this).offset().top){
      $(this).addClass("animate__fadeInLeftBig").css({'opacity': 1});
    }
  });

  $(".flipInX").each(function () {
    if($(window).height() > $(this).offset().top){
      $(this).addClass("animate__flipInX").css({'opacity': 1});
    }
  });

  $(".flipInY").each(function () {
    if($(window).height() > $(this).offset().top){
      $(this).addClass("animate__flipInY").css({'opacity': 1});
    }
  });

  $(".heartBeat").each(function () {
    if($(window).height() > $(this).offset().top){
      $(this).addClass("animate__heartBeat").css({'opacity': 1});
    }
  });

  // $(".lightSpeedInRight").on("inview", function () {
  //   $(this).addClass("animate__lightSpeedInRight").css({'opacity': 1});
  // });

  // $(".bounceInRight").on("inview", function () {
  //   $(this).addClass("animate__bounceInRight").css({'opacity': 1});
  // });

  // $(".bounceIn").on("inview", function () {
  //   $(this).addClass("animate__bounceIn").css({'opacity': 1});
  // });
  
  // $(".bounceInDown").on("inview", function () {
  //   $(this).addClass("animate__bounceInDown").css({'opacity': 1});
  // });

  // $(".zoomInUp").on("inview", function () {
  //   $(this).addClass("animate__zoomInUp").css({'opacity': 1});
  // });

  // $(".zoomInRight").on("inview", function () {
  //   $(this).addClass("animate__zoomInRight").css({'opacity': 1});
  // });

  // $(".fadeInLeftBig").on("inview", function () {
  //   $(this).addClass("animate__fadeInLeftBig").css({'opacity': 1});
  // });

  // $(".flipInX").on("inview", function () {
  //   $(this).addClass("animate__flipInX").css({'opacity': 1});
  // });

  // $(".flipInY").on("inview", function () {
  //   $(this).addClass("animate__flipInY").css({'opacity': 1});
  // });

  // $(".heartBeat").on("inview", function () {
  //   $(this).addClass("animate__heartBeat").css({'opacity': 1});
  // });

  
  // $(".animRep").on("inview", function (event, isInView) {
  //   var target = $(this);
  //   var delay = $(this).data('delay');
  //   if (isInView) {
  //     setTimeout(function(){
  //       target.stop().addClass("is-active");
  //     }, delay);
  //   } else {
  //     target.stop().removeClass("is-active");
  //   }
  // });

  // =========================================================
  // モーダル
  // =========================================================
  // モーダルウィンドウを開く
  $('.modal-open').on('click', function(){
    var target = $(this).data('target');
    var modal = document.getElementById(target);
    scrollPosition = $(window).scrollTop();

    $('body').addClass('fixed').css({'top': -scrollPosition});
    $(modal).fadeIn();
    return false;
  });

  // モーダルウィンドウを閉じる
  $('.modal-close, .modal-bg').on('click', function(){
    $('body').removeClass('fixed').css({'top': 0});
    window.scrollTo( 0 , scrollPosition );
    $('.modal-area').fadeOut();    
    return false;
  });

});


$(window).on('load scroll', function (){

  var windowWidth = $(window).width();
  var wh = $(window).height();

  if (windowWidth > 833) {
    var adjust = 4; // PC時
    var adjust2 = 4; // PC時
  } else {
    var adjust = 3; // SP時
    var adjust2 = 4; // SP時
  }

  $('.animRep').each(function () {
  
    var elemOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();

    var target = $(this);
    var delay = $(this).data('delay');

    if(scrollPos > elemOffset - wh + (wh / adjust2) ){
      setTimeout(function(){
        target.stop().addClass('is-active');
      }, delay);
    }
  });

  $(".anim").each(function () {
    if($(window).scrollTop() > $(this).offset().top - wh ){
      $(this).addClass("is-active");
    }
  });

  $(".lightSpeedInRight").each(function () {
    if($(window).scrollTop() > $(this).offset().top - wh + (wh / adjust) ){
      $(this).addClass("animate__lightSpeedInRight").css({'opacity': 1});
    }
  });

  $(".bounceIn").each(function () {
    if($(window).scrollTop() > $(this).offset().top - wh + (wh / adjust) ){
      $(this).addClass("animate__bounceIn").css({'opacity': 1});
    }
  });

  $(".bounceInRight").each(function () {
    if($(window).scrollTop() > $(this).offset().top - wh + (wh / adjust) ){
      $(this).addClass("animate__bounceInRight").css({'opacity': 1});
    }
  });

  $(".bounceInDown").each(function () {
    if($(window).scrollTop() > $(this).offset().top - wh + (wh / adjust) ){
      $(this).addClass("animate__bounceInDown").css({'opacity': 1});
    }
  });

  $(".zoomInUp").each(function () {
    if($(window).scrollTop() > $(this).offset().top - wh + (wh / adjust) ){
      $(this).addClass("animate__zoomInUp").css({'opacity': 1});
    }
  });

  $(".zoomInRight").each(function () {
    if($(window).scrollTop() > $(this).offset().top - wh + (wh / adjust) ){
      $(this).addClass("animate__zoomInRight").css({'opacity': 1});
    }
  });

  $(".fadeInLeftBig").each(function () {
    if($(window).scrollTop() > $(this).offset().top - wh + (wh / adjust) ){
      $(this).addClass("animate__fadeInLeftBig").css({'opacity': 1});
    }
  });

  $(".flipInX").each(function () {
    if($(window).scrollTop() > $(this).offset().top - wh + (wh / adjust) ){
      $(this).addClass("animate__flipInX").css({'opacity': 1});
    }
  });

  $(".flipInY").each(function () {
    if($(window).scrollTop() > $(this).offset().top - wh + (wh / adjust) ){
      $(this).addClass("animate__flipInY").css({'opacity': 1});
    }
  });

  $(".heartBeat").each(function () {
    if($(window).scrollTop() > $(this).offset().top - wh + (wh / adjust) ){
      $(this).addClass("animate__heartBeat").css({'opacity': 1});
    }
  });

});


// =========================================================
// キャンペーンスライダー
// =========================================================
var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev"
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    hide: false
  },
});