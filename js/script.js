//	
//(function($) { "use strict";
//		
//	//Page cursors
//
//    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
//        t.style.left = n.clientX + "px", 
//		t.style.top = n.clientY + "px", 
//		e.style.left = n.clientX + "px", 
//		e.style.top = n.clientY + "px", 
//		i.style.left = n.clientX + "px", 
//		i.style.top = n.clientY + "px"
//    });
//    var t = document.getElementById("cursor"),
//        e = document.getElementById("cursor2"),
//        i = document.getElementById("cursor3");
//    function n(t) {
//        e.classList.add("hover"), i.classList.add("hover")
//    }
//    function s(t) {
//        e.classList.remove("hover"), i.classList.remove("hover")
//    }
//    s();
//    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
//        o(r[a])
//    }
//    function o(t) {
//        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
//    }
//	
//	//Navigation
//
//	var app = function () {
//		var body = undefined;
//		var menu = undefined;
//		var menuItems = undefined;
//		var init = function init() {
//			body = document.querySelector('body');
//			menu = document.querySelector('.menu-icon');
//			menuItems = document.querySelectorAll('.nav__list-item');
//			applyListeners();
//		};
//		var applyListeners = function applyListeners() {
//			menu.addEventListener('click', function () {
//				return toggleClass(body, 'nav-active');
//			});
//		};
//		var toggleClass = function toggleClass(element, stringClass) {
//			if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
//		};
//		init();
//	}();
//
//	
//	//Switch light/dark
//	
//	$("#switch").on('click', function () {
//		if ($("body").hasClass("light")) {
//			$("body").removeClass("light");
//			$("#switch").removeClass("switched");
//		}
//		else {
//			$("body").addClass("light");
//			$("#switch").addClass("switched");
//		}
//	});
//	
//})(jQuery); 
//	


//-=============================menu--------------------------=============

$('.toggle-menu').click(function() {
			$(this).toggleClass('active');
			$('#menu').toggleClass('open');
		});





//Filter section

		$(document).ready(function() {
			$(".button").click(function() {
				var name = $(this).attr('data-filter');
				if (name == "all") {
					$(".shot-thumbnail").show('2000');
				} else {
					$(".shot-thumbnail").not("." + name).hide('2000');
					$(".shot-thumbnail").filter("." + name).show('2000');
				}
			})

			$(".navigation a").click(function() {
				$(this).addClass("active").siblings().removeClass("active");
			})
		})


/* ===============================  Mouse Hover  =============================== */

		$('.about .items').on('mouseenter', function() {
			$(this).addClass("active").siblings().removeClass("active");
		});







	
	
	
	


//gallary================
$(document).ready( function() {

	var itemSelector = '.grid-item'; 

	var $container = $('#container').isotope({
		itemSelector: itemSelector,
		masonry: {
		  columnWidth: itemSelector,
		  isFitWidth: true
		}
	});

	//Ascending order
	var responsiveIsotope = [
		[480, 7],
		[720, 10]
	];

	var itemsPerPageDefault = 12;
	var itemsPerPage = defineItemsPerPage();
	var currentNumberPages = 1;
	var currentPage = 1;
	var currentFilter = '*';
	var filterAtribute = 'data-filter';
	var pageAtribute = 'data-page';
	var pagerClass = 'isotope-pager';

	function changeFilter(selector) {
		$container.isotope({
			filter: selector
		});
	}


	function goToPage(n) {
		currentPage = n;

		var selector = itemSelector;
			selector += ( currentFilter != '*' ) ? '['+filterAtribute+'="'+currentFilter+'"]' : '';
			selector += '['+pageAtribute+'="'+currentPage+'"]';

		changeFilter(selector);
	}

	function defineItemsPerPage() {
		var pages = itemsPerPageDefault;

		for( var i = 0; i < responsiveIsotope.length; i++ ) {
			if( $(window).width() <= responsiveIsotope[i][0] ) {
				pages = responsiveIsotope[i][1];
				break;
			}

			

		}

		return pages;
	}
	
	function setPagination() {

		var SettingsPagesOnItems = function(){

			var itemsLength = $container.children(itemSelector).length;
			
			var pages = Math.ceil(itemsLength / itemsPerPage);
			var item = 1;
			var page = 1;
			var selector = itemSelector;
				selector += ( currentFilter != '*' ) ? '['+filterAtribute+'="'+currentFilter+'"]' : '';
			
			$container.children(selector).each(function(){
				if( item > itemsPerPage ) {
					page++;
					item = 1;
				}
				$(this).attr(pageAtribute, page);
				item++;
			});

			currentNumberPages = page;

		}();

		var CreatePagers = function() {

			var $isotopePager = ( $('.'+pagerClass).length == 0 ) ? $('<div class="'+pagerClass+'"></div>') : $('.'+pagerClass);

			$isotopePager.html('');
			
			for( var i = 0; i < currentNumberPages; i++ ) {
				var $pager = $('<a href="javascript:void(0);" class="pager" '+pageAtribute+'="'+(i+1)+'"></a>');
					$pager.html(i+1);
					
					$pager.click(function(){
						var page = $(this).eq(0).attr(pageAtribute);
						goToPage(page);
					});

				$pager.appendTo($isotopePager);
			}

			$container.after($isotopePager);

		}();

	}

	setPagination();
	goToPage(1);

	//Adicionando Event de Click para as categorias
	$('.filters a').click(function(){
		var filter = $(this).attr(filterAtribute);
		currentFilter = filter;

		setPagination();
		goToPage(1);


	});

	//Evento Responsivo
	$(window).resize(function(){
		itemsPerPage = defineItemsPerPage();
		setPagination();
	});

	

});



 $(document).ready( function() {   

// filter items on button click
$('.filter-button-group').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $('.grid').isotope({ filter: filterValue });
  $('.filter-button-group li').removeClass('active');
  $(this).addClass('active');
});
    })
	

 $(document).ready( function() {   

// filter items on button click
$('.isotope-pager').on( 'click', 'a', function() {
  var filterValue = $(this).attr('data-page');

  $('.isotope-pager a').removeClass('active');
  $(this).addClass('active');
});
    })
	
	
	
	
	
	
	

$(document).ready(function(){
$('.popupimg').magnificPopup({
	type: 'image',
  mainClass: 'mfp-with-zoom', 
  gallery:{
			enabled:true
		},

  zoom: {
    enabled: true, 

    duration: 300, // duration of the effect, in milliseconds
    easing: 'ease-in-out', // CSS transition easing function

    opener: function(openerElement) {

      return openerElement.is('img') ? openerElement : openerElement.find('img');
  }
}

});

});







	