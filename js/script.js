// jQuery Events Start
	$(document).ready(function(){
		// 1 Alert Function
		$('.j-btn').click(function(){
			alert("Welcome To This Page!");
		});

		// 2 Hide Function
		$('.hide-btn').click(function(){
			$('h3').hide();
		});

		// 3 Show Function
		$('.show-btn').click(function(){
			$('h3').show();
		});

		// 4 Collapse Function
		$('.collapse-btn').click(function(){
			$('h4').collapse();
		});

		// 5 Toggle Function
		$('.toggle-btn').click(function(){
			$('.j-toggle').toggle(2000);
		});

		// 6 Fade In Function
		$('.fade-in').click(function(){
			$('.j-fade').fadeIn();
		});

		// 7 Fade Out Function
		$('.fade-out').click(function(){
			$('.j-fade').fadeOut();
		});	

		// 8 Fade Toggle Function
		$('.fade-toggle').click(function(){
			$('.j-fade').fadeToggle("slow");
		});

		// 9 Fade To Function
		$('.fade-to').click(function(){
			$('.j-fade').fadeTo(100,0.5);
		});

		// 10 Slide Toggle Function
		$('.title').click(function(){
			$('.paragraph').slideToggle("slow");
		});

		// 11 Empty Function
		$('.empty').click(function(){
			$('.j-empty').empty();
		});

		// 12 MouseEnter Function
		$('.enter').mouseenter(function(){
			alert("You Have Entered The Button!");
		});

		// 13 MouseLeave Function
		$('.leave').mouseleave(function(){
			alert("You Left The Button!");
		});

		// 14 Hover Function
		$('.hover').hover(function(){
    		alert("You entered The Button!");
  			},
  			// 15 Function
  			function(){
    			alert("Bye! Now You Leave The Button");
  			});

		// 16 Input Function
		$("input").focus(function(){
    		$(this).css("background-color", "yellow");
  			});
		// 17 Function
  		$("input").blur(function(){
    		$(this).css("background-color", "green");
  			});
		});

		// 18 Animation Function
		$('.animate').click(function(){
    		$('.box').animate({right: '250px'});
  		});

  		// 19 Another Animation Function
  		$('.animate-2').click(function(){
    		$('.box-2').animate({
      			right: '250px',
      			height: '150px',
      			width: '150px'
    		});
  		});

  		// 20 Another Animation Function
  		$('.animate-3').click(function(){
    		var div = $('.box-3');
			$('.box-3').animate({height: '300px', opacity: '0.4'}, "slow");
			$('.box-3').animate({width: '300px', opacity: '0.8'}, "slow");
			$('.box-3').animate({height: '100px', opacity: '0.4'}, "slow");
			$('.box-3').animate({width: '100px', opacity: '0.8'}, "slow");
  		});

  		// 21 Slide Up Down Function
  		$('.animate-4').click(function(){
    		$('.j-style').css("color", "red")
      			.slideUp(2000)
      			.slideDown(2000);
  		});

  		// 22 Sliding Stop Function	
  		$('.flip').click(function(){
    		$('.panel').slideDown(5000);
  		});
  		// 23 Function
  		$(".stop-sliding").click(function(){
    		$('.panel').stop();
  		});
  		// 24 Function
  		$(".start-sliding").click(function(){
    		$('.panel').slideDown(5000);
  		});

  		// 25 jQuery Style Add Function
  		$('.add-css').click(function(){
    		$('.jq-paragraph').addClass("j-paragraph");
    		// 26 jQuery Style Add Function
    		$('.jq-paragraph-2').addClass("j-paragraph-2");
    		// 27 jQuery Style Add Function
    		$('.jq-paragraph-3').addClass("j-paragraph-3");
  		});

  		// 28 jQuery Style Remove Function
  		$('.remove-css').click(function(){
    		$('.jq-paragraph').removeClass("j-paragraph");
    		// 29 jQuery Style Remove Function
    		$('.jq-paragraph-2').removeClass("j-paragraph-2");
    		// 30 jQuery Style Remove Function
    		$('.jq-paragraph-3').removeClass("j-paragraph-3");
  		});

  		// 31 jQuery Style Remove Function
  		$('.toggle-css').click(function(){
    		$('.jq-paragraph').toggleClass("j-paragraph");
    		// 32 jQuery Style Remove Function
    		$('.jq-paragraph-2').toggleClass("j-paragraph-2");
    		// 33 jQuery Style Remove Function
    		$('.jq-paragraph-3').toggleClass("j-paragraph-3");
  		});
// jQuery Events End