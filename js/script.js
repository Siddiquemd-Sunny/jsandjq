	function textchange(){
		document.getElementById('h3').innerHTML ="Hello World !!!";
	}


	function text_change(){
		document.getElementById('2nd_b').innerHTML ="How are you?";
	}

	function mouseout(){
		document.getElementById('3rd_b').innerHTML ="what about you?";
	}
	//alert
	$(document).ready(function(){
		alert("Hello SSB! Welcome here");
		//show the top
		$('.buttop').click(function(){
			alert("hello ssb!  thanks for the click the button!");
		})
		//hide button
		$('#hide').click(function(){
			$('.massage').hide('fast');
		})
		//show button
		$('#show').click(function(){
			$('.massage').show('slow');
		});

		//show and hide
		$('#toggle').click(function(){
			$('.masgs').toggle(2000);
		});

		//fade out
		$('#fadeout').click(function(){
			$('.fade_effect').fadeOut(3000);
		});
		
		//fade in
		$('#fadein').click(function(){
			$('.fade_effect').fadeIn(3000);
		});

		//fade toggle
		$('#fadetoggle').click(function(){
			$('.fade_effect').fadeToggle(2000);
		});

		//Fade to
		$('#fadeto').click(function(){
			$('.fade_effect').fadeTo(1000,.5);
		});

		$('.footer').click(function(){
			$('.text_ani').slideToggle(1000)
		});
	});