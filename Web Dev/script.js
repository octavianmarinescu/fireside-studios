	
	/*---------------------Nav Bar Sticky--------------------------*/

	const nav = document.getElementById('mainNav');
	const topOfNav = nav.offsetTop;

	function fixNav() {
		if(window.scrollY > topOfNav) {
			nav.classList.add('fixed-nav');
		} else {
			nav.classList.remove('fixed-nav');
		}
	}

	window.addEventListener('scroll', fixNav);

	/*---------------------Our Work Buttons---------------------*/

	const travelBtn = document.getElementById('travel');
	const weddingBtn = document.getElementById('wedding');
	const corporateBtn = document.getElementById('corporate');

	const travelCards = document.querySelector('.travel-cards');
	const weddingCards = document.querySelector('.wedding-cards');
	const corporateCards = document.querySelector('.corporate-cards');

	weddingBtn.addEventListener('click', () => {
		weddingCards.classList.remove('hidden');
		travelCards.classList.add('hidden');
		corporateCards.classList.add('hidden');

		travelBtn.classList.remove('portfolio-button-active');
		corporateBtn.classList.remove('portfolio-button-active');
		weddingBtn.classList.add('portfolio-button-active');
	});

	travelBtn.addEventListener('click', () => {
		travelCards.classList.remove('hidden');
		weddingCards.classList.add('hidden');
		corporateCards.classList.add('hidden');

		weddingBtn.classList.remove('portfolio-button-active');
		travelBtn.classList.add('portfolio-button-active');
		corporateBtn.classList.remove('portfolio-button-active');
	});

	corporateBtn.addEventListener('click', () => {
		travelCards.classList.add('hidden');
		weddingCards.classList.add('hidden');
		corporateCards.classList.remove('hidden');

		weddingBtn.classList.remove('portfolio-button-active');
		travelBtn.classList.remove('portfolio-button-active');
		corporateBtn.classList.add('portfolio-button-active');
	});




	/*-------------------------Smooth Scroll-------------------*/

	function smoothScroll(targetPos, duration) {

		var startPos = window.pageYOffset;
/*		var distance = targetPos - startPos;*/
		var startTime = null;

		function animation(currentTime) {
			if (startTime == null)
				startTime = currentTime;
			var timeElapsed = currentTime - startTime;
			var run = ease(timeElapsed, startPos, targetPos, duration);
			window.scrollTo(0, run);
			
			if(timeElapsed < duration) 
				requestAnimationFrame(animation);

		}

		function ease(t, b, c, d) {
			t /= d/2;
			if (t < 1) return c/2*t*t + b;
			t--;
			return -c/2 * (t*(t-2) - 1) + b;
		}

		requestAnimationFrame(animation);
	}


	var scrollAboutUs = document.querySelector('.about-us');
	scrollAboutUs.addEventListener('click', function() {
		var target = document.querySelector('.about-us-container');
		var targetPos = target.getBoundingClientRect().top - 80;
		smoothScroll(targetPos, 800);
	});

	var scrollOurWork = document.querySelector('.our-work');
	scrollOurWork.addEventListener('click', function() {
		var target = document.querySelector('.our-work-container');
		var targetPos = target.getBoundingClientRect().top - 80;
		smoothScroll(targetPos, 800);
	});

	var scrollSteps = document.querySelector('.steps');
	scrollSteps.addEventListener('click', function() {
		var target = document.querySelector('.how-it-works-container');
		var targetPos = target.getBoundingClientRect().top - 80;
		smoothScroll(targetPos, 800);
	});

	var scrollContact = document.querySelector('.contact');
	scrollContact.addEventListener('click', function() {
		var target = document.querySelector('.form-box');
		var targetPos = target.getBoundingClientRect().top - 150;
		smoothScroll(targetPos, 800);
	});

	var scrollHome = document.querySelector('.home');
	scrollHome.addEventListener('click', function() {
		var target = document.querySelector('.main-page-wrapper');
		var targetPos = target.getBoundingClientRect().top - 60;
		smoothScroll(targetPos, 800);
	});


	/*----------------Mobile Menu-------------------------*/

	var menuMobile = document.getElementById('menu-toggler');
	var navMobile = document.querySelector('.menu-mobile-items');
	var exit = document.getElementById('exit');

	menuMobile.addEventListener('click', function(e) {
		// document.querySelector('.menu-mobile-items').style.visibility='visible';
		navMobile.classList.toggle('menu');
		exit.style.visibility = 'visible';
	});


	exit.addEventListener('click', function(e) {
		navMobile.classList.toggle('menu');
		exit.style.visibility = 'hidden';
	});

	/*--------------------Fixed Nav Mobile--------------------*/

	const menuToggler = document.getElementById('menu-toggler');
	const topOfNavMobile = nav.offsetTop;

	function fixNavMobile() {
		if(window.scrollY > topOfNavMobile) {
			menuToggler.classList.add('fixed-nav-mobile');
		} else {
			menuToggler.classList.remove('fixed-nav-mobile');
		}
	}

	window.addEventListener('scroll', fixNavMobile);


	window.sr = ScrollReveal();

	if ($(window).width() > 480 ) {
		// //small screen, load other JS files
		// $.getScript('/js/script.js', function () {
		// 	//the script has been added to the DOM, you can now use it's code
		// });
		sr.reveal('.title', {
			duration: 1500,
			origin: 'top',
			distance: '200px'
		})
	
		sr.reveal('.slogan', {
			duration: 1500,
			origin: 'bottom',
			distance: '200px',
		})
	
		sr.reveal('.about-us-section', {
			duration: 2000,
			origin: 'top',
			viewFactor: 0.2
		})
	
		sr.reveal('.icons-first-row', {
			duration: 2000,
			origin: 'left',
			distance: '300px',
			viewFactor: 0.2
		})

		sr.reveal('.icons-second-row', {
			duration: 2000,
			origin: 'right',
			distance: '300px',
			viewFactor: 0.2
		})
	
		sr.reveal('.our-work-title', {
			duration: 2000,
			origin: 'top',
			// distance: '100px',
			viewFactor: 0.2
		})
	
		sr.reveal('.buttons', {
			duration: 2000,
			origin: 'bottom',
			// distance: '100px',
			viewFactor: 0.2
		})
	
		sr.reveal('.all-three', {
			duration: 2000,
			origin: 'bottom',
			// distance: '100px',
			viewFactor: 0.2
		})
	
		sr.reveal('.how-it-works-title', {
			duration: 2000,
			origin: 'top',
			// distance: '100px',
			viewFactor: 0.2
		})
	
		sr.reveal('.geo-form', {
			duration: 2000,
			origin: 'left',
			distance: '500px',
			viewFactor: 0.2
		})
	
		sr.reveal('.geo-form-reversed', {
			duration: 2000,
			origin: 'right',
			distance: '300px',
			viewFactor: 0.2
		})
	
		sr.reveal('.review-title', {
			duration: 2000,
			origin: 'top',
			// distance: '100px',
			viewFactor: 0.2
		})
	
		sr.reveal('.review-card', {
			duration: 2000,
			origin: 'top',
			distance: '50px',
			viewFactor: 0.2
		})
	
		sr.reveal('.form-box', {
			duration: 2000,
			origin: 'bottom',
			distance: '100px',
			viewFactor: 0.2
		})
	}
	

	