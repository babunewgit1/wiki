(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});

		//click-more-news

		jQuery('.more-news button').click(function(){
			jQuery('.more-news-item').slideToggle()

		})


		//owlCarousel page-2-hero-area

		$("#owl-csel1").owlCarousel({
			items: 1,
			nav: false,
			dots: true,
			dotsData: true,
			autoplay: true,
			autoplayTimeout: 3000,
			startPosition: 0,
			rtl: false,
			loop: true,
			margin: 15,
			dots: true,
			nav: true,
			// center:true,
			// stagePadding: 2,
			navText: [
						'<i class="fa fa-angle-left" aria-hidden="true"></i>',
						'<i class="fa fa-angle-right" aria-hidden="true"></i>'
					],
			navContainer: '.main-content .custom-nav',
			responsive:{
				0: {
					items: 1,						
				},
				767: {
					items: 1,						
				},
				1200: {
					items: 1,						
				}
			}

		});


		//owlCarousel page-2-hero-area
		$('.myslider').owlCarousel({
			items: 1,
			nav: true,
			dots: true,
			dotsData: true,
			loop:true,
			navClass: ['owlprev', 'owlnext'],
			navText: ['', ''],
		
		});


		//tab
		$(document).ready(function() {
            $(".first_tab").champ();         

        });

		
		

				
		
		
		
		
		
		
		
		
	});
})(jQuery);