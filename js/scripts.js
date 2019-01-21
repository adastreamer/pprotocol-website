$(document).ready(function(){
	// Slick slider
	$('.roadmap-slider').slick({
		speed: 300,
		slidesToShow: 3,
		adaptiveHeight: true,
		responsive: [
	    {
	      breakpoint: 1200,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }]
	});
	$('.roadmap-slider').on('afterChange', function(){
		$('.roadmap-container > .first-title').html($('.roadmap-slide.slick-current .first-title').html())
	})

	$('.team-slider').slick({
	    slidesToShow: 3,
	    responsive: [
	        {
		        breakpoint: 1200,
		        settings: {
		            slidesToShow: 2
		        }
	        },
	        {
		        breakpoint: 900,
		        settings: {
		            slidesToShow: 1
		        }
	        },
	        {
		        breakpoint: 768,
		        settings: {
		            slidesToShow: 1
		        }
	        }
	    ]
	});


	// Scroll menu
	$('.page-scroller').alfaNavbar({ type: 'dotted'});

	fixPagerScroller = function(){
		var blockSpace = $('.nav-wrapper.box').offset().left + 10;
		$('.page-scroller-wrapper').css({'right':blockSpace+'px'})
	}
	fixPagerScroller();
	$(window).resize(function(){
		fixPagerScroller();
	})


	// Header mobile button
	$('.header-nav-button').on('click', function(){
		$(this).toggleClass('open')
	})


	// Header dropdown button
	$('.dropdown-button').on('click', function(e){
		e.preventDefault();

		$(this).parent().find('.dropdown').slideToggle('fast')
	})


	// Show button when scrolled
	$(document).scroll(function(){
		var scrollPath = $('#protocol').offset().top - $('#protocol').height()/2;
		if($(document).scrollTop() >= scrollPath){
			$('.bottom-panel .moved-to-bottom-panel').removeClass('hide')
		}else{
			$('.bottom-panel .moved-to-bottom-panel').addClass('hide')
		}
	})


	// Fancybox
	$('.js-fancybox').fancybox();


	// Включаем и отключаем анимации при скроле
	$(document).scroll(function(){
		$('.box').each(function(){
			box = $(this);

			if($(document).scrollTop()>box.offset().top-1 - box.height() & $(document).scrollTop()<box.offset().top+1 + box.height()){
				box.addClass('go-animate');
			}else{
				box.removeClass('go-animate');
			}
		});
	});


	// Рисуем диаграммы
	if($('.graph').length){
		setTimeout(function(){
			// <Graph 1
			var dataset = [
				{value: 35, color: '#7fbff1'}, 
				{value: 30, color: '#c73ce8'}, 
				{value: 16, color: '#993ecb'}, 
				{value: 9, color: '#a53be8'}, 
				{value: 10,color: '#ec69ef'}
			];

			var maxValue = 25;
			var container = $('.diag-1');

			var addSector = function(data, startAngle, collapse){
				var sectorDeg = 3.6 * data.value;
				var skewDeg = 90 + sectorDeg;
				var rotateDeg = startAngle;
				if (collapse){skewDeg++}

				var sector = $('<div>',{
			    	'class': 'sector'
				}).css({
			    	'background': data.color,
			    	'transform': 'rotate(' + rotateDeg + 'deg) skewY(' + skewDeg + 'deg)'
				});
				container.append(sector);

				return startAngle + sectorDeg;
			};

			dataset.reduce(function (prev, curr){
				return (function addPart(data, angle){
				    if (data.value <= maxValue){
						return addSector(data, angle, false);
				    }

				    return addPart({
						value: data.value - maxValue,
						color: data.color
				    }, addSector({
						value: maxValue,
						color: data.color,
				    }, angle, true));
				})(curr, prev);
			}, 0);
			// Graph1>

			// <Graph 2
			var dataset = [
				{value: 12, color: '#a142e9'}, 
				{value: 16, color: '#e86ff0'}, 
				{value: 8, color: '#50c9ef'}, 
				{value: 64, color: '#ac43cd'}
			];

			var maxValue = 25;
			var container = $('.diag-2');

			var addSector = function(data, startAngle, collapse){
				var sectorDeg = 3.6 * data.value;
				var skewDeg = 90 + sectorDeg;
				var rotateDeg = startAngle;
				if (collapse){skewDeg++}

				var sector = $('<div>',{
			    	'class': 'sector'
				}).css({
			    	'background': data.color,
			    	'transform': 'rotate(' + rotateDeg + 'deg) skewY(' + skewDeg + 'deg)'
				});
				container.append(sector);

				return startAngle + sectorDeg;
			};

			dataset.reduce(function (prev, curr){
				return (function addPart(data, angle){
			    	if (data.value <= maxValue){
			      		return addSector(data, angle, false);
			    	}

			    	return addPart({
			      		value: data.value - maxValue,
			      		color: data.color
			    	}, addSector({
			      		value: maxValue,
			      		color: data.color,
			    	}, angle, true));
				})(curr, prev);
			}, 0);
			// Graph2>
		}, 100)
	}
});
