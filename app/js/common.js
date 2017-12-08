$(window).on('load', function () {
	var $preloader = $('#page-preloader'),
		$spinner   = $preloader.find('.spinner');
	$spinner.fadeOut();
	$preloader.fadeOut();
	window. scrollTo(0, 0); 
})

$(function() {
	var hamburger = $("#my-icon");
	var blocker = $('.blocker');
	var mobmnu = {
		icon: $("#my-icon"),
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
			ths.icon.addClass('is-active');
		},
		close: function(){
			var ths = this;
			ths.blocker.removeClass('blocker-active');
			setTimeout(function(){
				ths.blocker.removeClass('blocker-z-index');
			}, 500)
			ths.page.css('transform', 'translateX(0)');
			ths.selector.css('display', 'none');
			ths.icon.removeClass('is-active');
		}
	}
	hamburger.click(function(){
		mobmnu.open();
	});
	blocker.click(function(){
		mobmnu.close();
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
		fitToSection: false,
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
  var wind_height = window.innerHeight;
	var doc_height
	var ua = navigator.userAgent.toLowerCase();
	var isAndroid = ua.indexOf("android") > -1;
	if(isAndroid) {
		if($('html').hasClass('keyboard-open')){
			console.log("It's not android");
		}else{
			$('input').focus(function() { 
				doc_height = wind_height;
				$('html').css('height', doc_height);
			})
			$('input').blur(function() {
				$('html').css('height', '100%');
			})
		}
		var Keyboard;
		Keyboard = (function(){
			var OPEN_KEYBOARD_CLASS,
					blurAction,
					blurTimeout,
						focusAction,
					getRandomId,
					getUniqueId,
					hasFocusedInput,
					initWindowSize,
					keyboardClose,
					keyboardOpen,
					setUniqueId;
			OPEN_KEYBOARD_CLASS = 'keyboard-open';
			initWindowSize = {
				height: 0,
				width: 0
			};
		hasFocusedInput = false;
		blurTimeout = null;
		function Keyboard() {
			setTimeout(function() {
				initWindowSize.height = window.innerHeight;
				initWindowSize.width = window.innerWidth;
				return true;
			}, 600);
	    this.bindListeners();
	  }
	  Keyboard.prototype.bindListeners = function() {
	    this.windowResizeListener();
	    return this.focusListeners();
	  };
	  Keyboard.prototype.windowResizeListener = function() {
	    return window.addEventListener('resize', function() {
	      var bodyTag;
	      bodyTag = document.getElementsByTagName('html')[0];
	      if (initWindowSize.height > window.innerHeight) {
	        if (bodyTag.className.indexOf(OPEN_KEYBOARD_CLASS) === -1) {
	          bodyTag.className += bodyTag.className + ' ' + OPEN_KEYBOARD_CLASS;
	          return keyboardOpen();
	        }
	      } else {
	        return keyboardClose();
	      }
	    });
	  };
	  Keyboard.prototype.focusListeners = function() {
	    var input, inputs, textarea, textareas, _i, _j, _len, _len1;
	    inputs = document.getElementsByTagName('input');
	    textareas = document.getElementsByTagName('textarea');
	    for (_i = 0, _len = inputs.length; _i < _len; _i++) {
	      input = inputs[_i];
	      setUniqueId(input);
	      input.addEventListener('focus', function() {
	        return focusAction.apply(this);
	      });
	      input.addEventListener('blur', function() {
	        return blurAction.apply(this);
	      });
	    }
	    for (_j = 0, _len1 = textareas.length; _j < _len1; _j++) {
	      textarea = textareas[_j];
	      setUniqueId(textarea);
	      textarea.addEventListener('focus', function() {
	        return focusAction.apply(this);
	      });
	      textarea.addEventListener('blur', function() {
	        return blurAction.apply(this);
	      });
	    }
	    return true;
	  };
	  focusAction = function() {
	    var bodyTag;
	    bodyTag = document.getElementsByTagName('html')[0];
	    if (bodyTag.className.indexOf(OPEN_KEYBOARD_CLASS) === -1) {
	      if (this.type !== 'checkbox' && this.type !== 'radio' && this.type !== 'submit') {
	        bodyTag.className += bodyTag.className + ' ' + OPEN_KEYBOARD_CLASS;
	        keyboardOpen();
	      }
	    }
	    hasFocusedInput = getUniqueId(this);
	    if (hasFocusedInput === getUniqueId(this) && blurTimeout !== null) {
	      return clearTimeout(blurTimeout);
	    }
	  };
	  blurAction = function() {
	    var thisInput;
	    thisInput = this;
	    return blurTimeout = setTimeout(function() {
	      if (hasFocusedInput === getUniqueId(thisInput)) {
	        keyboardClose();
	        hasFocusedInput = false;
	        return blurTimeout = null;
	      }
	    }, 500);
	  };
	  keyboardOpen = function() {
	    return true;
	  };
	  keyboardClose = function() {
	    var bodyTag;
	    bodyTag = document.getElementsByTagName('html')[0];
	    return bodyTag.className = bodyTag.className.replace(OPEN_KEYBOARD_CLASS, '');
	  };
	  setUniqueId = function(elm) {
	    return elm.setAttribute('data-unique-id', getRandomId());
	  };
	  getUniqueId = function(elm) {
	    return elm.getAttribute('data-unique-id');
	  };
	  getRandomId = function() {
	    return Math.floor((Math.random() * 9999999) + 1);
	  };
	  return Keyboard;
		})();
		window.onload = function() {
		  return new Keyboard;
		};
	}
});