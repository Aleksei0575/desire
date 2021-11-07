// Как-то коряво работает при переключении экранов ент меню на десктоп
// $(function(){
//   $('.header__open-menu').on('click', function () {
//     $(this).toggleClass('header__close-menu');
//     if ($(window).width() < 768) {
//       $('.header__nav').toggle('display', '');
//     }
// 	});
// });

// Слайдер для блока offer
// $('.offer-slider').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   // arrows: false,
//   prevArrow: '<img class="offer-slider__arrows offer-slider__arrows--left" src="img/sprite/icon-arrow-left.svg" alt="Стрелка влево">',
//   nextArrow: '<img class="offer-slider__arrows offer-slider__arrows--right" src="img/sprite/icon-arrow-right.svg" alt="Стрелка вправо">',
//   // variableWidth: true,
//   focusOnSelect: true,
// 		responsive: [
// 			{
// 				breakpoint: 1024,
// 				settings: {
//           slidesToShow: 1,
//           centerMode: true,
//           // focusOnSelect: true,
// 				}
// 			},
// 			{
// 				breakpoint: 960,
// 				settings: {
// 					slidesToShow: 1,
//           centerMode: true,
//           arrows: false,
// 				}
// 			},
// 			{
// 				breakpoint: 768,
// 				settings: {
// 					slidesToShow: 1,
//           centerMode: true,
//           arrows: false,
// 				}
// 			},
// 			{
// 				breakpoint: 480,
// 				settings: {
// 					slidesToShow: 1,
//           centerMode: true,
//           arrows: false,
//           variableWidth: true,
// 				}
// 			},
// 		]
// });
// 'use strict';
// // меню
// (function () {
//   var navBtn = document.querySelector('.header__open-menu');
//   var nav = document.querySelector('.header__nav');

//   if (navBtn && nav) {
//     navBtn.addEventListener('click', openNav);
//   }

//   function openNav(evt) {
//     evt.preventDefault();
//     evt.stopPropagation();

//     if (navBtn.classList.contains('header__close-menu')) {
//       navBtn.classList.remove('header__close-menu');
//       nav.style.display = '';
//     } else {
//       navBtn.classList.add('header__close-menu');
//       nav.style.display = 'block';
//     }
//   }
// })();

$(function () {


  $('.header__btn').on('click', function () {
    $('.rightside-menu').removeClass('rightside-menu--js');
    console.log('click');
  });

  $('.rightside-menu__close').on('click', function () {
    $('.rightside-menu').addClass('rightside-menu--js');
    console.log('click');
  });

  $('.promo__slider').slick({
    dots: true,
    arrows: false,
    variableWidth: true,
    autoplay: true,

    responsive: [
			{
				breakpoint: 1024,
				settings: {
          slidesToShow: 1,
          centerMode: true,
				}
			},
			{
				breakpoint: 900,
				settings: {
          slidesToShow: 1,
          centerMode: true,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					centerMode: true,
				}
			},
			{
				breakpoint: 599,
				settings: {
					slidesToShow: 1,
				}
			},
		]
  });

  $('.contact-gallery__slider').slick({
    slidesToShow: 10,
		slidesToScroll: 10,
    dots: true,
    arrows: false,
    // variableWidth: true,
    // autoplay: true,

    responsive: [
			{
				breakpoint: 1750,
				settings: {
          slidesToShow: 8,
          slidesToScroll: 8,
          // centerMode: true,
				}
			},
			{
				breakpoint: 1450,
				settings: {
          slidesToShow: 7,
          slidesToScroll: 7,
          // centerMode: true,
				}
			},
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 6,
          slidesToScroll: 6,
				}
      },
      {
				breakpoint: 1150,
				settings: {
					slidesToShow: 5,
          slidesToScroll: 5,
				}
      },
      {
				breakpoint: 950,
				settings: {
					slidesToShow: 4,
          slidesToScroll: 4,
				}
      },
      {
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
          slidesToScroll: 3,
				}
      },
      {
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
          slidesToScroll: 2,
          // centerMode: true,
				}
      },
      {
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
          slidesToScroll: 1,
				}
      },
		]
  });

  $('.article-slider__box').slick({
    prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrowleft"><img src="img/sprite/icon-arrow-left.svg" alt="icon left"></img></button>',
    nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrowright"><img src="img/sprite/icon-arrow-right.svg" alt="icon right"></img></button>',
    autoplay: true,

    // responsive: [
		// 	{
		// 		breakpoint: 768,
		// 		settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
		// 		}
		// 	},
		// 	// {
		// 	// 	breakpoint: 900,
		// 	// 	settings: {
    //   //     slidesToShow: 1,
    //   //     centerMode: true,
		// 	// 	}
		// 	// },
		// 	// {
		// 	// 	breakpoint: 767,
		// 	// 	settings: {
		// 	// 		slidesToShow: 1,
		// 	// 		centerMode: true,
		// 	// 	}
		// 	// },
		// 	// {
		// 	// 	breakpoint: 599,
		// 	// 	settings: {
		// 	// 		slidesToShow: 1,
		// 	// 	}
		// 	// },
		// ]
  });

// === Раскомментировать блок, чтобы включить слайдер ====
  $('.blog-one__posts').slick({
    prevArrow: '<button type="button" class="blog-one__posts-arrow blog-one__posts-arrowleft"><img src="img/sprite/icon-arr-prew.svg" alt="icon left"></img></button>',
    nextArrow: '<button type="button" class="blog-one__posts-arrow blog-one__posts-arrowright"><img src="img/sprite/icon-arr-next.svg" alt="icon right"></img></button>',
    slidesToShow: 2,
		slidesToScroll: 2,
    // dots: true,
    // arrows: false,
    // variableWidth: true,
    // autoplay: true,
  });
//========================================================
  // let sortBlock = $('.page-gallery__inner');

  // if (sortBlock) {
  //   let mixer = mixitup('.page-gallery__inner', {
  //     load: {
  //         filter: '.category-living'
  //     }
  //   });
  // }

  let mixer = mixitup('.page-gallery__inner', {
    load: {
        filter: '.category-living'
    }
  });

});
'use strict';
(function () {
  var elementsLine = document.querySelectorAll('.inspiration__line');

  for (let elem of elementsLine) {
    // console.log(elem.dataset.width);
    let result = elem.dataset.width;
    elem.style.width = result;
  }

})();
