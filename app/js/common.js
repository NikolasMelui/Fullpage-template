$(window).on('load', function () {
	var $preloader = $('#page-preloader'),
			$spinner   = $preloader.find('.spinner');
	$spinner.fadeOut();
	$preloader.fadeOut();
})
$(function() {

	var icon = $("#my-icon");
	var blocker = $('.blocker');
	var mobmnu = {
		selector: $('.mobile-menu'),
		page: $('.page'),
		blocker: $('.blocker'),
		open: function(){
			var ths = this;
			ths.selector.css('display', 'block');
			ths.page.css('transform', 'translateX(-80%)');
			ths.blocker.addClass('blocker-z-index');
			setTimeout(function(){
				ths.blocker.addClass('blocker-active');
			}, 100);
		},
		close: function(){
			var ths = this;
			ths.blocker.removeClass('blocker-active');
			setTimeout(function(){
				ths.blocker.removeClass('blocker-z-index');
			}, 500)
			ths.page.css('transform', 'translateX(0)');
			ths.selector.css('display', 'none');
		}
	}
	icon.click(function(){
		mobmnu.open();
		$(this).addClass('is-active');
	});
	blocker.click(function(){
		mobmnu.close();
		icon.removeClass('is-active');
	});

  $('.content').fullpage({
		//Navigation
		menu: '.top-mnu, .mobile-menu',
		//lockAnchors: false,
		anchors: ['block_1', 'block_2', 'block_3', 'block_4'],
		navigation: true,
		navigationPosition: 'right',
		//navigationTooltips:  ['home', 'about-us', 'about-1', 'about-2', 'about-3', 'service', 'we-are', 'call'],
		//showActiveTooltip: false,
		//slidesNavigation: false,
		//slidesNavPosition: 'bottom',

	//Scrolling
		css3: true,
		scrollingSpeed: 550,
		autoScrolling: true,
		fitToSection: true,
		//fitToSectionDelay: 1000,
		scrollBar: false,
		easing: 'easeInOutCubic',
		//easingcss3: 'cubic-bezier(0, 0, 0.5, 2)',
		//loopBottom: false,
		//loopTop: false,
		//loopHorizontal: true,
		//continuousVertical: false,
		//continuousHorizontal: false,
		//scrollHorizontally: true,
		//interlockedSlides: false,
		//dragAndMove: true,
		// offsetSections: false,
		// resetSliders: false,
		// fadingEffect: true,
		normalScrollElements: '#conf, .mfp-content',
		//scrollOverflow: true,
		//scrollOverflowReset: true,
		//scrollOverflowOptions: null,
		// touchSensitivity: 15,
		// normalScrollElementTouchThreshold: 5,
		bigSectionsDestination: 'top',

		//Accessibility
		// keyboardScrolling: true,
		// animateAnchor: true,
		// recordHistory: true,

		//Design
		controlArrows: false,
		//verticalCentered: true,
		//sectionsColor : ['#ccc', '#fff'],
		paddingTop: '0px',
		//paddingBottom: '0px',
		//fixedElements: '#my-header, #my-aside-L, #my-footer',
		//responsiveWidth: 700,
		//responsiveHeight: 350,
		//responsiveSlides: true,
		//parallax: true,
		//parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

		//Custom selectors
		sectionSelector: '.sect',
		//slideSelector: '.slide',

		lazyLoading: true,

		//events
		onLeave: function(index, nextIndex, direction){
			mobmnu.close();
			$('#toTop').fadeIn();
			if(index == 2 && direction == 'up'){
				$('#toTop').fadeOut();
			}
		},
		afterLoad: function(anchorLink, index){
		  if(index == 1){
			  $('#toTop').fadeOut();
			}
		},
		afterRender: function(){},
		afterResize: function(){},
		afterResponsive: function(isResponsive){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
	});
  var yesss = $('.subject-success');
	$(".form").submit(function(){
		var th = $(this);
		$.ajax({
			url: "mail.php",
			type: "POST",
			data: th.serialize()
		}).done(function() {
			yesss.css({'display': 'block'});
			setTimeout(function(){
			  yesss.css({'opacity': 1});
			}, 100)
			setTimeout(function(){
			  yesss.css({'opacity': 0});
			}, 5000)
			setTimeout(function(){
			  yesss.css({'display': 'none'});
			}, 5500)
			setTimeout(function() {
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	var open_conf = $('.open-conf');
	var close_conf = $('.close-conf');
	var conf = $('#conf');
	$('.open-conf').click(function(e){
	  e.preventDefault();
	  var id = $(this).attr('href');
	  var conf = $(id);
	  conf.css({'display': 'block', 'z-index': '9999999'});
	  setTimeout(function(){
	    conf.css({'opacity': 1});
	  }, 100)
	  console.log(id)
	})
	close_conf.click(function(e){
	  e.preventDefault();
	  conf.css({'opacity': 0});
	  setTimeout(function(){
	    conf.css({'display': 'none', 'z-index': '-100'});
	  }, 500)
	})

  $(".phone").inputmask("+7 (999) 999-99-99");

  // slowLooper(playVideoClosestToCenter);

  // function isVideoPlaying(elem) {
  //   if (elem.paused || elem.ended || elem.readyState < 2) {
  //       return false;
  //   } else {
  //     return true;
  //   }
  // }
  // function isScrolledIntoView(el) {
  //   var elementTop = el.getBoundingClientRect().top;
  //   var elementBottom = el.getBoundingClientRect().bottom;
  //   var isVisible = elementTop < window.innerHeight && elementBottom >= 0;
  //   return isVisible;
  // }
  // function playVideoClosestToCenter() {
  //   var vids = document.querySelectorAll('video');
  //   var smallestDistance = null;
  //   var smallestDistanceI = null;
  //   for (var i = 0; i < vids.length; i++) {
  //     var el = vids[i];
  //     var elementTop = el.getBoundingClientRect().top;
  //     var elementBottom = el.getBoundingClientRect().bottom;
  //     var elementCenter = (elementBottom + elementTop) / 2.0;
  //     var windowCenter = window.innerHeight / 2.0;
  //     var distance = Math.abs(windowCenter - elementCenter);
  //     if (smallestDistance === null || distance < smallestDistance) {
  //       smallestDistance = distance;
  //       smallestDistanceI = i;
  //     }
  //   }
  //   if (smallestDistanceI !== null) {
  //     vids[smallestDistanceI].play();
  //     for (var i = 0; i < vids.length; i++) {
  //       if (i !== smallestDistanceI) {
  //         vids[i].pause();
  //       }
  //     }
  //   }
  // }
  // function playAllVisibleVideos(timestamp) {
  //   // This fixes autoplay for safari
  //   var vids = document.querySelectorAll('video');
  //   for (var i = 0; i < vids.length; i++) {
  //     if (isVideoPlaying(vids[i]) && !isScrolledIntoView(vids[i])) {
  //       vids[i].pause();
  //     }
  //     if (!isVideoPlaying(vids[i]) && isScrolledIntoView(vids[i])) {
  //       vids[i].play();
  //     }
  //   }
  // }
  // function slowLooper(cb) {
  //   // Throttling requestAnimationFrame to a few fps so we don't waste cpu on this
  //   // We could have listened to scroll+resize+load events which move elements
  //   // but that would have been more complicated.
  //   function repeats() {
  //     cb();
  //     setTimeout(function() {
  //       window.requestAnimationFrame(repeats);
  //     }, 200);
  //   }
  //   repeats();
  // }
});