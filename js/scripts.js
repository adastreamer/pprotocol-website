$(document).ready(function(){
	$('sbody').on('click', function(e){
		e.preventDefault();
		$('body').css({'position':'relative'}).append('<img alt="" src="images/layer.png" class="layer"><!-- Если хотите убрать эту херню, просто удалите кусочек кода в scripts.js -->')
		$('.layer').css({
			'position': 'absolute',
			'top': '-376px',
			'left': '0px',
			'right': '0px',
			'margin': '0 auto',
			'opacity': '0.6',
            'z-index': '666'
		}).on('click', function(){
			$(this).remove();
		});
	});

	
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

	new Chart(document.getElementById("doughnut-chart-1"), {
	    type: 'doughnut',
	    data: {
	      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
	      display: false,
	      datasets: [
	        {
	          label: "Population (millions)",
	          backgroundColor: ["#7fbff1", "#c73ce8","#993ecb","#a53be8","#ec69ef"],
	          data: [35,30,15,10,10],
	          borderWidth: 0
	        }
	      ]
	    },
	    options: {
	    	legend: {
		        display: false
		    }
	    }
	});
	new Chart(document.getElementById("doughnut-chart-2"), {
	    type: 'doughnut',
	    data: {
	      labels: ["Africa", "Asia", "Europe", "Latin America"],
	      display: false,
	      datasets: [
	        {
	          label: "Population (millions)",
	          backgroundColor: ["#a142e9", "#e86ff0","#50c9ef","#ac43cd"],
	          data: [3,4,2,16],
	          borderWidth: 0
	        }
	      ]
	    },
	    options: {
	    	legend: {
		        display: false
		    }
	    }
	});

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

	$('.page-scroller').alfaNavbar({ type: 'dotted'});

	fixPagerScroller = function(){
		var blockSpace = $('.nav-wrapper.box').offset().left + 10;
		$('.page-scroller-wrapper').css({'right':blockSpace+'px'})
	}
	fixPagerScroller();
	$(window).resize(function(){
		fixPagerScroller();
	})

	$('.header-nav-button').on('click', function(){
		$(this).toggleClass('open')
	})


	var i=0;
	var interval = setInterval(function(){
		$('.tokensale-graph-part:eq('+i+')').addClass('go')
	   	i++;
	   	if (i==$('.tokensale-graph-part').size())
	     	clearInterval(interval);
	}, 600)

	setInterval(function(){
		var i=0;
		var interval = setInterval(function(){
			$('.tokensale-graph-part:eq('+i+')').addClass('go')
		   	i++;
		   	if (i==$('.tokensale-graph-part').size())
		     	clearInterval(interval);
		}, 600)

		setTimeout(function(){
			$('.tokensale-graph-part').addClass('out');
		}, 8000)
		setTimeout(function(){
			$('.tokensale-graph-part').removeClass('out').removeClass('go');
		}, 9000)
	}, 10000)


	$('.dropdown-button').on('click', function(e){
		e.preventDefault();

		$(this).parent().find('.dropdown').slideToggle('fast')
	})

	$(document).scroll(function(){
		var scrollPath = $('#protocol').offset().top - $('#protocol').height()/2;
		console.log(scrollPath)
		if($(document).scrollTop() >= scrollPath){
			$('.bottom-panel .moved-to-bottom-panel').removeClass('hide')
		}else{
			$('.bottom-panel .moved-to-bottom-panel').addClass('hide')
		}
	})

	$('.js-fancybox').fancybox();
});
