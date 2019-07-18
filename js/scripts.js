$(document).ready(function(){
	$('sbody').on('click', function(e){
		e.preventDefault();
		if($('.layer').length){
			$('.layer').remove();
		}else{
			$('body').css({'position':'relative'}).append('<img alt="" src="images/layer.png" class="layer"><!-- Если хотите убрать эту херню, просто удалите кусочек кода в scripts.js -->')
			$('.layer').css({
				'position': 'absolute',
				'top': '0px',
				'left': '99px',
				'right': '0px',
				'margin': '0 auto',
				'opacity': '0.6',
	            'z-index': '666'
			})
		}
	});


	// Slick
	$('.blog-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 520,
	      settings: {
	        slidesToShow: 1
	      }
	    }
	  ]
	});

	// Faq
	if($('.faq-quest').length){
		$('.faq-quest').on('click', function(){
			var faqItem = $(this).closest('.faq-list-item');

			faqItem.toggleClass('open');
			faqItem.find('.faq-answer').slideToggle('fast');
		})
	}


	// Mobile button
	$('.nav-button').bind('click', function(){
		$(this).parent().toggleClass('show-menu');
	})


	// Lang dropdown
	$('.nav-lang-link').bind('click', function(e){
		e.preventDefault();

		$(this).parent('.nav-lang').toggleClass('open')
	})
	$(window).click(function() {
		$('.show-menu').removeClass('show-menu');
		$('.nav-lang').removeClass('open');
	});

	$('.nav-lang-link, .nav-lang-dropdown, .nav-button, .nav-wrapper').click(function(event){
	    event.stopPropagation();
	});


	// Scroll navigation
	$('#navsc').onePageNav();

	var rightNavPadding = function(){
		if(($(window).width() - $('.main.box').outerWidth())/2<$('.navsc').outerWidth()){
			$('.section-wrapper').css({'padding-right':$('.navsc').outerWidth()+'px'});
			$('.navsc-wrapper').addClass('fixed');
		}else{
			$('.section-wrapper').removeAttr("style");
			$('.navsc-wrapper').removeClass('fixed');
		}
	}

	rightNavPadding();
	$(window).resize(function(){
		rightNavPadding();
	})
	
	var menuColor = function(){
		if($(document).scrollTop()>$('.main-wrapper').outerHeight()/2){
			$('.navsc-wrapper').addClass('dark');
		}else{
			$('.navsc-wrapper').removeClass('dark');
		}
	}

	menuColor();
	$(document).scroll(function(){
		menuColor();
	})
});