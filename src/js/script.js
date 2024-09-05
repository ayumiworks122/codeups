jQuery(function ($) {
  // ハンバーガーメニュー
  $(function () {
    $(".humburger").on("click", function () {
      $(this).toggleClass("active");
      $(".header__menu").toggleClass("active");
      return false;
    });
  });

  //要素の取得とスピードの設定
  var box = $(".js-fadeImage"),
    speed = 700;

  //.colorboxの付いた全ての要素に対して下記の処理を行う
  box.each(function () {
    $(this).append('<div class="color"></div>');
    var color = $(this).find($(".color")),
      image = $(this).find("img");
    var counter = 0;

    image.css("opacity", "0");
    color.css("width", "0%");
    //inviewを使って背景色が画面に現れたら処理をする
    color.on("inview", function () {
      if (counter == 0) {
        $(this)
          .delay(200)
          .animate({ width: "100%" }, speed, function () {
            image.css("opacity", "1");
            $(this).css({ left: "0", right: "auto" });
            $(this).animate({ width: "0%" }, speed);
          });
        counter = 1;
      }
    });
  });
});
// メインビジュアルスライダー
const mvSwiper = new Swiper("#swiper01", {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  effect: "fade",
  speed: 2500,
});
// キャンペーンスライダー
const campaignSwiper = new Swiper("#swiper02", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: "auto",
  spaceBetween: 24,
  breakpoints: {
    768: {
      spaceBetween: 40,
    },
  },
});
