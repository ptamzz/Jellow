// JavaScript Document

//Audio
	//Home
	var eat = new Audio("snd/home/eating.mp3");
	var play = new Audio("snd/home/play.mp3");
	var learn = new Audio("snd/home/learning.mp3");
	var people = new Audio("snd/home/people.mp3");
	var others = new Audio("snd/home/others.mp3");

//btns
	//Level 1
		//Left
		var like = new Audio("snd/home/like.mp3");
		var more = new Audio("snd/home/more.mp3");
		var yes = new Audio("snd/home/yes.mp3");
		
		//Right
		var dontLike = new Audio("snd/home/dontLike.mp3");
		var less = new Audio("snd/home/less.mp3");
		var no = new Audio("snd/home/no.mp3");
		
	//Level 2
		//Left
		var reallyLike = new Audio("snd/home/reallyLike.mp3");
		var reallyMore = new Audio("snd/home/reallyMore.mp3");
		var reallyYes = new Audio("snd/home/reallyYes.mp3");
		
		//Right
		var reallyDontLike = new Audio("snd/home/reallyDontLike.mp3");
		var reallyLess = new Audio("snd/home/reallyLess.mp3");
		var reallyNo = new Audio("snd/home/reallyNo.mp3");
		
	//Emotions: level 1
		//left
		var iLike = new Audio("snd/emotion/ILike.mp3");
		var iReallyLike = new Audio("snd/emotion/IReallyLike.mp3");
		var iWant = new Audio("snd/emotion/IWant.mp3");
		var iReallyWant = new Audio("snd/emotion/IReallyWant.mp3");
		var iWantMore = new Audio("snd/emotion/IWantMore.mp3");
		var iReallyWantMore = new Audio("snd/emotion/IWantMuchMore.mp3");
		
		//Right
		var iDontLike = new Audio("snd/emotion/IDontLike.mp3");
		var iReallyDontLike = new Audio("snd/emotion/IReallyDontLike.mp3");
		var iDontWant = new Audio("snd/emotion/IDontWant.mp3");
		var iReallyDontWant = new Audio("snd/emotion/IReallyDontWant.mp3");
		var iWantLess = new Audio("snd/emotion/IWantLess.mp3");
		var iWantMuchLess = new Audio("snd/emotion/IWantMuchLess.mp3");
		
		
		

$(function() {
	
	//Set width
	$(window).bind("resize", setItemsWidth);
	setItemsWidth();
	
	//To disable MobileSarai auto-select
	/* $.fn.extend({ 
		disableSelection : function() { 
			this.each(function() { 
				this.onselectstart = function() { return false; }; 
				this.unselectable = "on"; 
				$(this).css('-moz-user-select', 'none'); 
				$(this).css('-webkit-user-select', 'none'); 
			}); 
		} 
	}); */

	//First click
	
	$(".btns").live("click", function(){
		console.log("Clicked");
		var e = $(this), id = $(this).attr('id'), level = $(this).data('state');
		
		//Check for navigation tree level
		if(level == 1){
			console.log("level 1");
			//Play sound
				//Home
				if(id == 'eat'){
					eat.play();
				} else if (id == 'play'){
					play.play();
				} else if (id == 'learn'){
					learn.play();
				} else if (id == 'people'){
					people.play();
				} else if (id == 'others'){
					others.play();
				} else if (id == 'like'){
					//Check if a button is already pressed
					if($('.items .btns').hasClass('glowBlue') || $('.items .btns').hasClass('glowYellow')){
						//Glow yellow
						$('.glowBlue').removeClass('glowBlue').addClass('glowYellow');
						iLike.addEventListener('ended', function(){
							learn.play();
						});
						iLike.play();
					} else {
						like.play();
					}
				} else if (id == 'more'){
					
					//Check if a button is already pressed
					if($('.items .btns').hasClass('glowBlue') || $('.items .btns').hasClass('glowYellow')){
						//Glow yellow
						$('.glowBlue').removeClass('glowBlue').addClass('glowYellow');
						iWant.addEventListener('ended', function(){
							learn.play();
						});
						iWant.play();
					} else {
						more.play();
					}
				} else if (id == 'yes'){
					
					//Check if a button is already pressed
					if($('.items .btns').hasClass('glowBlue') || $('.items .btns').hasClass('glowYellow')){
						//Glow yellow
						$('.glowBlue').removeClass('glowBlue').addClass('glowYellow');
						iWant.addEventListener('ended', function(){
							learn.play();
						});
						iWant.play();
					} else {
						yes.play();
					}
				} else if (id == 'dontLike'){
					
					//Check if a button is already pressed
					if($('.items .btns').hasClass('glowYellow') || $('.items .btns').hasClass('glowBlue')){
						//Glow yellow
						$('.glowBlue').removeClass('glowBlue').addClass('glowYellow');
						iDontLike.addEventListener('ended', function(){
							learn.play();
						});
						iDontLike.play();
					} else {
						dontLike.play();
					}
					
				} else if (id == 'less'){
				
					//Check if a button is already pressed
					if($('.items .btns').hasClass('glowYellow') || $('.items .btns').hasClass('glowBlue')){
						//Glow yellow
						$('.glowBlue').removeClass('glowBlue').addClass('glowYellow');
						iWantLess.addEventListener('ended', function(){
							learn.play();
						});
						iWantLess.play();
					} else {
						less.play();
					}

				} else if (id == 'no'){
					
					//Check if a button is already pressed
					if($('.items .btns').hasClass('glowYellow') || $('.items .btns').hasClass('glowBlue')){
						//Glow yellow
						$('.glowBlue').removeClass('glowBlue').addClass('glowYellow');
						iDontWant.addEventListener('ended', function(){
							learn.play();
						});
						iDontWant.play();
					} else {
						no.play();
					}
				}

			$(".btns").removeClass("glowBlue glowGreen");
			e.addClass("glowBlue");		//If level 1, glow blue
			
			$(".btns").data("state", 1);
			e.data("state", 2);
		} else if (level == 2){
			console.log("level 2");
			
			//Play sound
				//Home
				if(id == 'eat'){
					//Go to page
					loadPage("eat");
				} else if (id == 'play'){
					//Go to page
					loadPage("play");
				} else if (id == 'learn'){
					//Go to page
					loadPage("learn");
				} else if (id == 'people'){
					//Go to page
					loadPage("people");
				} else if (id == 'others'){
					//Go to page
					loadPage("others");
				} else if (id == 'like'){
					
					//Check if a button is already pressed
					if($('.items .btns').hasClass('glowYellow') || $('.items .btns').hasClass('glowBlue')){
						//Glow nothing
						//$('.glowBlue').removeClass('glowBlue').addClass('glowYellow');
						iReallyLike.addEventListener('ended', function(){
							learn.play();
						});
						iReallyLike.play();
					} else {
						reallyLike.play();
					}
				} else if (id == 'more'){
					
					//Check if a button is already pressed
					if($('.items .btns').hasClass('glowYellow') || $('.items .btns').hasClass('glowBlue')){
						//Glow yellow
						$('.glowBlue').removeClass('glowBlue').addClass('glowYellow');
						iReallyWantMore.addEventListener('ended', function(){
							more.play();
						});
						iReallyWantMore.play();
					} else {
						reallyMore.play();
					}
				} else if (id == 'yes'){
					
					//Check if a button is already pressed
					if($('.items .btns').hasClass('glowYellow') || $('.items .btns').hasClass('glowBlue')){
						//Glow yellow
						$('.glowBlue').removeClass('glowBlue').addClass('glowYellow');
						iReallyWant.addEventListener('ended', function(){
							yes.play();
						});
						iReallyWant.play();
					} else {
						reallyYes.play();
					}
					
				} else if (id == 'dontLike'){
					//Check if a button is already pressed
					if($('.items .btns').hasClass('glowYellow') || $('.items .btns').hasClass('glowBlue')){
						//Glow yellow
						$('.glowBlue').removeClass('glowBlue').addClass('glowYellow');
						iReallyDontLike.addEventListener('ended', function(){
							learn.play();
						});
						iReallyDontLike.play();
					} else {
						reallyDontLike.play();
					}
					
				} else if (id == 'less'){
					
					//Check if a button is already pressed
					if($('.items .btns').hasClass('glowYellow') || $('.items .btns').hasClass('glowBlue')){
						//Glow yellow
						$('.glowBlue').removeClass('glowBlue').addClass('glowYellow');
						iWantMuchLess.addEventListener('ended', function(){
							learn.play();
						});
						iWantMuchLess.play();
					} else {
						//less.play();
						reallyLess.play();
					}
					
				} else if (id == 'no'){
					
					//Check if a button is already pressed
					if($('.items .btns').hasClass('glowYellow') || $('.items .btns').hasClass('glowBlue')){
						//Glow yellow
						$('.glowBlue').removeClass('glowBlue').addClass('glowYellow');
						iReallyDontWant.addEventListener('ended', function(){
							learn.play();
						});
						iReallyDontWant.play();
					} else {
						reallyNo.play();
					}
				}
				
				
			//If level 2, glow green
			$(".btns").removeClass("glowBlue glowGreen");
			
			e.addClass("glowGreen");
			$(".btns").data("state", 1);
			e.data("state", 1);
		} else {
			//Throw error or do nothing
		}
	});

}); // jQuery $(funtion() ends


function setItemsWidth(){
	$(".items").css({ width : $(window).width() - 200	});
}

function loadPage(page){
	var dataString = { "page": page },
		url = "page/"+page+".html";

	$.ajax({
		type: "GET",
		url: url, //"page.php",
		data: dataString,
		cache: false,
		success: function(data){
			if(data != ''){
				console.log("Data Exists");
				$('.items').html(data);
			} else {
				console.log("Data Doesn't exists");
				$('.items').html("No Page found");
			}
		}
	});
	
}







