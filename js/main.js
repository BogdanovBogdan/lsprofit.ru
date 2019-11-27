const results = document.querySelector(".results");
const indicator = document.querySelector(".indicator");
const referal = document.querySelector(".referal");


//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

const sceneOne = new ScrollMagic.Scene({
	duration: 3000,
	triggerElement: results,
	triggerHook: 0,
	offset: 170
})
	.setPin(results)
	.addTo(controller);

const sceneTwo = new ScrollMagic.Scene({
	duration: 11600,
	triggerElement: indicator,
	triggerHook: 1,
	offset: 920
})
	.setPin(indicator)
	.addTo(controller);

const sceneThree = new ScrollMagic.Scene({
	duration: 2300,
	triggerElement: referal,
	triggerHook: 0,
	offset: 70
})
	.setPin(referal)
	.addTo(controller);



// start the counter, when the animated element go up to top window

$(document).ready(function() {
	let show = true;
	$(window).on("scroll", function(){

		if(!show) {return false;} 

		let wTop = $(window).scrollTop(); 
		let eTop = $(".stat").offset().top; 

		if(wTop + 400 >= eTop) { 
			
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