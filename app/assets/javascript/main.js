//load methods global variables.
var datatarget; // set global variable for storing data-target attribute
var datadestination; // set global variable for where to load the data-target object

$(document).ready(function(){


    /* UTILITIES
     Set of utilitY functions and methods used in almost every project
	*/
    
		/*================================================================*/
	    /*  FLUID RESIZING
	    /*================================================================
	    uspDimensions(); //set up columns etc on page load
	    $(window).resize(function() {
	        uspDimensions();
	    });*/

	  	/*================================================================*/
	    /*  BX SLIDER
	    /*================================================================ 
	    $('#uspimages').bxSlider({
	    	onSlideBefore: function(){
				// do mind-blowing JS stuff here
				nextSlide ();
				
			},
			//mode: 'fade',
			minSlides: 1,
			maxSlides: 1,
			slideWidth: 195,
			slideMargin: 0,
			auto: true,
	  		autoControls: false,
	  		easing: 'ease-in-out',
	  		touchEnabled: false,
	  		preventDefaultSwipeY: true,
	  		pager: false,
	  		controls: false,
	  		pause: 6000

	    });*/ 

	    /*================================================================*/
	    /*  INVITE WIDGET
	    /*================================================================
	    	//hover event (shows little label flag thingy) 
		    $(".invitee").mouseenter(function() {			
			  $(this).siblings('.hover-box').addClass('show');  
			});
			$(".invitee").mouseleave(function() {			
			  $(this).siblings('.hover-box').removeClass('show');  
			});
			//close hover by tapping (for mobiles)
			$('.hover-box').unbind('click').click(function() {
				$(this).removeClass('show');  
			});*/ 

	    /*================================================================*/
	    /*  INIT WOW
	    /*================================================================ 
			new WOW().init();*/






	  	/*================================================================*/
	    /*  CLICK HANDLERS
	    /*================================================================*/  
	    $('#btnContactUs').unbind('click').click(function() {
			$('html, body').animate({
				scrollTop: $("#secContact").offset().top
			}, 2000);
		});

	    
	    /*$('#btnApple').unbind('click').click(function() {
			alert('clicked');
		});*/



		/**************************************** 
	      STICKY 
	    ****************************************/
		/*
		$("#sticky").sticky({
			topSpacing: 0
		});
		*/





		/*================================================================*/
		  //KENDO GARBAGE COLLECTION SETUP
		/*================================================================
		var garbagecollectortarget = 'lipsum'; // set target for kendo garbage collector...
		  //by inserting this div, we now have our target for easy kendo garbage collection
		  $('<div id="kendoGarbageCollection" style="display:none;"></div>').insertAfter(garbagecollectortarget);*/


		/*================================================================*/
		/*	DOCUMENT CLICK TO CLOSE STUFF
		/*================================================================*/
		/*
		click outside to close
		$(document).mouseup(function(e) {
			//close open subnav
			subnav = $(this).find('.subnav');
			if (!subnav.is(e.target) // if the target of the click isn't the container...
				&& subnav.has(e.target).length === 0) // ... nor a descendant of the container
			{
				subnav.slideUp('fast');
			}
			//close open searchbar
			searchbar = $(this).find('.searchbar');
			if (!searchbar.is(e.target) // if the target of the click isn't the container...
				&& searchbar.has(e.target).length === 0) // ... nor a descendant of the container
			{
				searchbar.slideUp('fast');
			}
		});
		*/



		/*================================================================*/
		/*	AJAXIFIED BOOTSTRAP MODAL
		/*================================================================*/
		var bsmodal; // set variable for storing modal
		var bsmdatatitle; //trigger data-title
		var bsmdatatarget; //trigger data-target
		var bsmtrigger; //store trigger as DOM element


		<!--trigger click handlers -->
		$('.bsmodaltrigger').click(function(e) {

			if (!$(this).hasClass("disabled")) {

				//STORE STUFF
				bsmodal = $("#bsModal"); // set variable for storing modal
				bsmdatatitle = $(this).data('title'); //trigger data-title
				bsmdatatarget = $(this).data('target'); //trigger data-target
				bsmtrigger = $(this); //store trigger as DOM element


				//stop the trigger
				e.preventDefault();
				e.stopPropagation();


				// title the modal
				$('#bsModal #modaltitle').text(bsmdatatitle);

				//show the modal 
				bsmodal.modal('show');

				//instantiate data-target to  dialogue
				bsmodal.attr('data-target', bsmdatatarget);

				// load content
				$('#bsmodalajaxtarget').load('app/assets/pages/' + bsmdatatarget + '.html', function() {
					//
				});

				//DO STUFF

			}
		});


		/**************************************** 
		PUBLIC SHELL LINK 
		****************************************/
		$('.pslink').unbind('click').click(function() {
			datatarget = null; // reset trigger data-target
			datatarget = $(this).data('target'); //trigger data-target

			//navigate to public shell
			window.location.href = datatarget + '.html';		

		});
	




 });

/**************************************** 
SHELL DIMENSIONS 
****************************************/ 
var winwidth;
var secHeight;
var hdrHeight;
var uspHeight;
var iphoneWidth;
var promoimageHeight;
var projectorconnectorWidth;
var projectorconnectorHeight;
var beaconconnectorWidth;
var beaconconnectorHeight;


function uspDimensions(){

        //start: calculations
        winwidth = window.innerWidth;
        secHeight = ($('#secApp').outerHeight());  
        hdrHeight = ($('#masthead').outerHeight()) + ($('#apphdr').outerHeight());
        uspHeight = secHeight - hdrHeight;
        iphoneWidth = ($('#iphone').outerWidth()); 
        promoimageHeight = ($('.promoimage').outerHeight());  
        projectorconnectorWidth = ($('.promoimage').outerWidth()) * 0.9367;
        projectorconnectorHeight = projectorconnectorWidth * 2.83;
        beaconconnectorWidth = ($('.promoimage').outerWidth()) * 1.17;
        beaconconnectorHeight = beaconconnectorWidth * 1.8;  

        //set usp's height
        $('#appusps').css({"height": uspHeight + 'px'});

        //center iphone
        $('#iphone').css({"margin-left": '-' + iphoneWidth/2 + 'px'});

        //set height of promo content
        $('.promocontent').css({"height": promoimageHeight + 'px'});
        $('.beaconpromoimg').css({"height": promoimageHeight + 'px'});
        

        //set projectorconnector size and position
        $('#projectorconnector').css({"width": projectorconnectorWidth + 'px',"height": projectorconnectorHeight + 'px'});
        //set beaconconnector size and position
        $('#beaconconnector').css({"width": beaconconnectorWidth + 'px',"height": beaconconnectorHeight + 'px'});

        //remove all css animations for tablets on down
        if (winwidth < 991){
        	$('div, form').removeClass('wow fadeInUp fadeInRight fadeInLeft delayp1 delayp2 delayp4');
        }

}



/**************************************** 
BX SLIDER 
****************************************/
var uspmsgslider = $('#uspmsgslider').bxSlider({
    	mode: 'vertical',
		minSlides: 1,
		maxSlides: 1,
		slideMargin: 0,
		auto: false,
  		autoControls: false,
  		easing: 'ease-in-out',
  		touchEnabled: false,
  		preventDefaultSwipeY: true,
  		pager: false,
  		controls: false,
  		pause: 6000
});
function nextSlide () {
	uspmsgslider.goToNextSlide();
  	//return false;
  	var currentslide = uspmsgslider.getCurrentSlide();
  	var currentusp = '.uspmsg' + (currentslide + 1);

  	//make current slide opaque
	$('#uspmsgslider li').removeClass('opacity-1');
	$(currentusp).addClass('opacity-1');



}





/**************************************** 
AJAXIFIED LINKS 
****************************************/
function ajaxlinks (datatarget, datadestination) {	
	$('.ajaxlink').unbind('click').click(function() {
		datatarget = null; // reset trigger data-target
		datatarget = $(this).data('target'); //trigger data-target
		datadestination = null; // reset 
		datadestination = $(this).data('destination'); //data-target destination		

		$('#' + datadestination).load('app/assets/pages/' + datatarget + '.html', function() {
			$.ajax({
				dataType: 'script',
				url: 'app/assets/javascript/'+ datatarget + '.js',
				success: function (response) { 
					//fire it up
					window['init' + datatarget]();
					
					//do stuff
				}
			});	
		});
	});
}

/*============================================
//GENERIC LOADER
============================================*/
function loadcontent (datatarget, datadestination) {	
	$('#' + datadestination).load('app/assets/pages/' + datatarget + '.html', function() {
		$.ajax({
			dataType: 'script',
			url: 'app/assets/javascript/'+ datatarget + '.js',
			success: function (response) { 
				//fire it up
				window['init' + datatarget]();
				
				//do stuff
			}
		});	
	});
}


/*============================================
//KENDO CLEANUP
============================================*/
function kendogarbage () {
		if ($("div").last().hasClass('modal-backdrop')  ) {
			$(this).nextAll('.k-animation-container').remove();
			$(this).nextAll('.k-list-container').remove();
		} else {
			//$('#kendoGarbageCollection').nextAll().remove();
			$('#kendoGarbageCollection').nextAll('.k-animation-container').remove();
			$('#kendoGarbageCollection').nextAll('.k-list-container').remove();
		}
}

function kendonoconflict () {
	$('*.k-widget').removeClass('form-control');
}

/*============================================
// jQuery no-double-tap-zoom plugin
============================================*/
// Triple-licensed: Public Domain, MIT and WTFPL license - share and enjoy!

(function($) {
  var IS_IOS = /iphone|ipad/i.test(navigator.userAgent);
  $.fn.nodoubletapzoom = function() {
    if (IS_IOS)
      $(this).bind('touchstart', function preventZoom(e) {
        var t2 = e.timeStamp
          , t1 = $(this).data('lastTouch') || t2
          , dt = t2 - t1
          , fingers = e.originalEvent.touches.length;
        $(this).data('lastTouch', t2);
        if (!dt || dt > 500 || fingers > 1) return; // not double-tap

        e.preventDefault(); // double tap - prevent the zoom
        // also synthesize click events we just swallowed up
        $(this).trigger('click').trigger('click');
      });
  };
})(jQuery);