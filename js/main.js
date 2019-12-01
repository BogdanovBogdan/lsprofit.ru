// changing text on small screen

if (window.innerWidth < 576) {
	$('.referal__subtitle').text('7-ми уровневая реферальная программа в глубину');
	$('.referal__container').after($('.referal__subtitle'));
	$('.indicator__title').text('Работа индикатора');
	$('.indicator__sell--comment').html("Продаем при сигнале <span class='uppercase'>sell</span>");
}




// toggler nav button

$('.nav-btn').on('click', function(e) {
	e.preventDefault;
	$('.nav-btn__gamb').toggleClass('nav-btn__gamb--active');
	$('.nav-links').toggleClass('nav-links--show');
});



// add percent

if (window.innerWidth > 1169) {
	let perc = $("#percents"),
	sell = $('.indicator__wrapper--first'),
	sellComment = $('.indicator__sell--comment'),
	take = $('.indicator__wrapper--second'),
	takeComment = $('.indicator__take--comment');

	$(window).on("scroll load", function(){
		let scrlTop = $(window).scrollTop();
		
		if (scrlTop > 10000 && scrlTop < 13000) {
			perc.text(40);
			sell.css({'bottom': '437px', 'left': '638px'});
			sellComment.css('display', 'none');
			take.css({'bottom': '467px', 'left': '448px'});
			takeComment.css("display", "block");

		} else if (scrlTop > 13000) {
			perc.text(50);
			take.css({'bottom': '37px', 'left': '679px'});
			takeComment.css("display", "none");

		} else {
			perc.text(30);
			take.css({'bottom': '107px', 'left': '314px'});
			sell.css({'bottom': '257px', 'left': '263px'});
			sellComment.css("display", "block");
		}
		if (scrlTop > 10000) {
			sell.css({'bottom': '437px', 'left': '638px'});
			sellComment.css('display', 'none');
		} 
	});
}




//SCROLLMAGIC
// const results = document.querySelector(".results");
// const indicator = document.querySelector(".indicator");
// const referal = document.querySelector(".referal");

// const controller = new ScrollMagic.Controller();

// const sceneOne = new ScrollMagic.Scene({
// 	duration: 3000,
// 	triggerElement: results,
// 	triggerHook: 0.5,
// 	offset: 500
// })
// .setPin(results)
// .addTo(controller);

// const sceneTwo = new ScrollMagic.Scene({
// 	duration: 8800,
// 	triggerElement: indicator,
// 	triggerHook: 0.5,
// 	offset: 600
// })
// .setPin(indicator)
// .addTo(controller);

// const sceneThree = new ScrollMagic.Scene({
// 	duration: 2800,
// 	triggerElement: referal,
// 	triggerHook: 0.5,
// 	offset: 440
// })
// .setPin(referal)
// .addTo(controller);




// start the counter, when the animated element go up to top window

$(document).ready(function() {
	let show = true;
	$(window).on("scroll load", function(){

		if(!show) {return false;} 
		let wTop = $(window).scrollTop(); 
		let eTop = $(".stat").offset().top; 

		if(wTop + 500 >= eTop) { 
			
			$('.stat__num').each(function() { 
				$(this).css("opacity", "1"); 
				$(".stat__wrapper").css("opacity", "1"); 
				$(this).prop('Counter', 0).animate({ 
					Counter: $(this).text()
				}, {
					duration: 3000,
					easing: 'swing',
					step: function(now) {
						$(this).text(Math.ceil(now));
					}
				});
				// delay += 1000;
			});

			show = false;
		}
	});
});




// connection castomize button play to yt player 

let player;

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
	// create the global player from the specific iframe (#video)
	player = new YT.Player('video', {
		events: {
			// call this function when player is ready to use
			'onReady': onPlayerReady
		}
	});
}

function onPlayerReady(event) {

	// bind events
	let playButton = document.querySelector("#play-button");
	let pauseButton = document.querySelector("#pause-button");

	playButton.addEventListener("click", function() {
		player.playVideo();
		playButton.style.display = "none";

	});
	
	pauseButton.addEventListener("click", function() {
		player.pauseVideo();
	});
	
}

// Inject YouTube API script
let tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);