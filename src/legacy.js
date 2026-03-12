export function initLegacy() {
  if (typeof window === 'undefined') return;

  const soundenabled = function (slugsToCheck, urlSound) {
    // Get the current slug from the URL
    const urlParts = window.location.pathname.split('/').filter(Boolean);
    const slug = urlParts[urlParts.length - 1];
    // Check if the slug matches one in the list
    if (slugsToCheck == slug) {
      document.getElementById('soundWr').style.display = "block";
      var toggleButtons = document.getElementById('toggleSoundButton');
      // __play
      const __ap = new APlayer({
        container: document.getElementById('hidden_audio'),
        mini: false,
        autoplay: true,
        theme: '#FADFA3',
        loop: 'all',
        order: 'list',
        preload: 'auto',
        volume: 0.99,
        mutex: false,
        listFolded: false,
        listMaxHeight: 90,
        audio: [
          {
            name: 'Game',
            artist: 'Sound game',
            url: urlSound,
            theme: '#b7daff'
          },
        ]
      });
      __ap.on('play', function () {
        toggleButtons.classList.remove('unsound');
      });
      __ap.on('pause', function () {
        toggleButtons.classList.add('unsound');
      });
      $('#toggleSoundButton').click(function () {
        __ap.toggle();
      });
    }
  };
  soundenabled('megashow-cuoc-thi-sang-tac-video-pocket-mega_180', '/assets/video.mp3?ver=1');
  soundenabled('event-pocket-mega-di-muon-noi_190', '/assets/Pocket Mega Music 2.mp3?ver=1');
  soundenabled('cuoc-thi-ve-tranh-trung-thu-mega_204', '/assets/Mid-Autumn Festival Music.mp3?ver=1');

  window.downloadGame = function () {
    if (/Android|phone|pad|pod|iPhone|iPod|ios|iPad|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone/i.test(navigator.userAgent)) {
      if (navigator.userAgent.match(/iPhone|pad|pod|iPhone|iPod|ios|iPad/i)) {//ios
        window.open('https://apps.apple.com/vn/app/id1626785478', '_blank');
      } else {
        window.open('https://play.google.com/store/apps/details?id=com.pocketmega.joy', '_blank');
      }
    } else {
      window.open('https://play.google.com/store/apps/details?id=com.pocketmega.joy', '_blank');
    }
  };

  window.customAlert = function (message) {
    $('#modal__alert').find('.text-alert').html(message);
    $('#modal__alert').show();
  };

  window.goBack = function () {
    window.history.back();
  };

  $('.control-menu').click(function (e) {
    // e.preventDefault()
    $('#hambuger').trigger('click');
  });

  // anchor click Nav Right
  $('.i-control').click(function () {
    $('.fixed__right').toggleClass('open');
    $(this).toggleClass('i-control-open'); // active bg btn
  });
  var offset = 1080;
  const go_top = $('.go-top');
  go_top.click(function () { $('html,body').animate({ scrollTop: 0 }, 100); });

  $(document).ready(function () {
    // sllick slide new  
    $("body").on("click", ".close_modal, .btn__close", function () {
      $(this).parents(".modal").hide();
    });
    $('.list-slide-new').slick({
      dots: true,
      prevArrow: false,
      nextArrow: false,
      autoplay: true,
      infinite: true,
      speed: 500,
    });

    // scroll to div when site has class
    if ($('#main-news')[0]) {
      setTimeout(function () {
        $('html, body').animate({
          scrollTop: $('.main-news').offset().top
        }, 700);
      }, 700);
    }

    // tab new
    $('.tab-new .tab-link').click(function () {
      var tab_id = $(this).attr('data-tab');
      var tab_view = $(this).attr('data-more');

      $('.tab-new .tab-link').removeClass('current');
      $('.tab-detail').removeClass('current');
      $('.link-more').removeClass('current');

      $(this).addClass('current');
      $("#" + tab_id).addClass('current');
      $("#" + tab_view).addClass('current');
    });

    // function sliderChar(id) {
    //   // char
    //   var lstChar__ = $('#'+id+' .lstIF__char_');
    //   if(lstChar__.hasClass('slick-slider')) {
    //   } else {
    //   lstChar__.slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     infinite: true,
    //     // autoplay: true,
    //     arrows: true,
    //     autoplaySpeed: 5000,
    //   });
    //   }
    //   lstChar__.on("afterChange", function (ev, slick, current, next) {
    //     $('.imgARt_char').removeClass('active')
    //     $('.imgARt_char' + (current + 1)).addClass('active')

    //     $('#'+id+' .eachTabChar__').removeClass('active')
    //     $('#'+id+' .eachTabChar__' + (current + 1)).addClass('active')
    //   })
    //   $('#'+id+' .eachTabChar__').click(function () {
    //     let _id = $(this).attr('data-char');
    //     // $('.eachTabChar__').removeClass('active')
    //     // $('.eachTabChar__'+_id).addClass('active')
    //     lstChar__.slick('slickGoTo', _id - 1);
    //   });

    // }
    // sliderChar('all');


    var lstChar__ = $('#lstIF__char_');
    lstChar__.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      // autoplay: true,
      arrows: true,
      autoplaySpeed: 5000,
    });
    $('.tabChar .btnChar').click(function () {
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
      $('.menChar__').hide();
      $('#' + $(this).attr('data-id')).show();
      $('#' + $(this).attr('data-id')).addClass('active');
      $('#' + $(this).attr('data-id')).siblings().removeClass('active');
      sliderChar($(this).attr('data-id'));
    });
    $('.list-feature').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      arrows: true,
      dots: true,
      autoplaySpeed: 5000,
    });

  });

  // function tabSlider(idTab,idImages) {
  //    var idImages_ = '#'+idImages+' .wrapSlider';
 
  //    $('#'+idImages+' .wrapSlider').slick({
  //      dots: true,
  //      autoplay: false,
  //      speed: 500,
  //      arrows: true,
  //      infinite: false,
  //      fade: true,
  //      slidesToShow: 1,
  //      slidesToScroll: 1,
  //      swipe: false
  //    });
  //    $('#'+idImages+' .wrapSlider').on('afterChange', function(event, slick, direction){
  //      var direct = direction;
  //      $('#'+idTab+' .thumb_img[data-id='+direct+']').siblings().removeClass('active');
  //      $('#'+idTab+' .thumb_img[data-id='+direct+']').addClass('active');
  //    });
  //    $('#'+idTab+' .thumb_img').click(function(){
  //      var direct_nav = $(this).attr('data-id');
  //      $('#'+idTab+' .thumb_img[data-id='+direct_nav+']').siblings().removeClass('active');
  //      $(this).addClass('active');
  //      $('#'+idImages+' .wrapSlider').slick('slickGoTo', direct_nav);
  //    });
  //  }
  //  tabSlider('char_fav','images_fav');
  //  tabSlider('char_science','images_science');
  //  tabSlider('char_magic','images_magic');
  //  tabSlider('char_fight','images_fight');
  //  tabSlider('char_god','images_god');
  //  tabSlider('char_devil','images_devil');
  //  tabSlider('char_special','images_special');
  //  $('.item_navChar').click(function(){
  //    $(this).addClass('active');
  //    $(this).siblings().removeClass('active');
  //    var data_char = $(this).attr('data-tabid');
  //    var data_slider = $(this).attr('data-tabimages');
  //    $('.tabContent .content').removeClass('active');
  //    $('#'+data_char).addClass('active');
  //    $('.tabImages .content').removeClass('active');
  //    $('#'+data_slider).addClass('active');
  //  });
   
  //  var rankPowerType = 'worpower';
  //  var getRank = (serverid, name = null, page = 1) => {
  //    if(name && name.length > 0) {
  //      rankPowerType = name;
  //    }
  //    $.get("//rank/" + `${rankPowerType}/${serverid}?page=${page}`, resp => {
  //      $('.wraper-rank').html(resp);
  //    });
  //  };
  //  getRank('all');
  //  $('.wraper-rank').on("change", '.drb-rank-serverid', function (e) {
  //    getRank($(this).val());
  //  });

  $(document).ready(function () {

    $('.listSLNH').slick({
      dots: true,
      prevArrow: false,
      nextArrow: false,
      autoplay: true,
      speed: 1000,
    });

  });


  $(document).ready(function () {


    var ft__submit = $('.lstFT__slide');

    ft__submit.slick({
      dots: true,
      autoplay: true,
      speed: 500,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: false,
          }
        },
      ]

    });
    var modalAds = document.getElementById("modal__ads");

    if (modalAds) {
      var isRunning = false;

      // Select all ads by class
      let elements = document.querySelectorAll(".ads_img");

      elements.forEach(el => {
        // Get the countdown date from the data-time attribute
        let time = el.getAttribute("data-time");
        let timeStart = el.getAttribute("data-start");
        var runningRemove = false;
        let nowDate = new Date().getTime();
        if (timeStart == 'false') {
          runningRemove = true;
        } else {
          let startDate = new Date(timeStart).getTime();
          if (startDate <= nowDate) {
            runningRemove = true;
          }
        }
        if (runningRemove) {
          let countDownDate = new Date(time).getTime();
          let distance = countDownDate - nowDate;

          if (distance > 0) {
            isRunning = true;
          } else {
            el.remove(); // remove expired ads
          }

        } else {
          el.remove();
        }
      });

      // If there are active ads, show the modal
      if (isRunning) {
        modalAds.style.display = "block";

        $('#ads__').slick({
          dots: false,
          arrows: true,
          autoplay: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        });

        setTimeout(() => {
          modalAds.classList.add("active");
        }, 1000);
      }
    }

  });


  var detailId = function () {
    // Get the current slug from the URL
    const urlParts = window.location.pathname.split('/').filter(Boolean);
    const slug = urlParts[urlParts.length - 1];

    // List of slugs to match
    const slugsToCheck = [
      'combo-uu-dai-tieu-phi-mung-tron-thang_184'
    ];

    // Check if the slug matches one in the list
    if (slugsToCheck.includes(slug)) {

      $('.main-news').attr('id', 'main-news-duatop');

      // Show sidebar
      $('#extra-content').show();

      // Build nav from h1
      let html = '';
      $('.wrapContent h1').each(function (index) {
        if (index + 1 < $('.wrapContent h1').length) {
          $(this).attr('id', 'heading-' + (index + 1));
          html += `<li><a href="#heading-${index + 1}">${$(this).text()}</a></li>`;
        }
      });
      $('#main-nav__list').html(html);

      // Handle clicks on nav links (smooth scroll)
      $('#main-nav__list a').on('click', function (e) {
        e.preventDefault();

        const heightHead = $('.main_head').outerHeight() + 50;
        const targetId = $(this).attr('href');
        const targetElement = $(targetId);

        if (targetElement.length) {
          $('html, body').animate({
            scrollTop: targetElement.offset().top - heightHead
          }, 100);
        }

        $('body').removeClass('open');
      });

      // Handle drawer toggle
      $('#sub-drawer-toggle-label').on('click', function () {
        $('body').toggleClass('open');
      });
    }

  };
  detailId();
};

