// Goals
$(document).ready(function() {

	//Яндекс.Метрика
    $('form#order-form').submit(function() {
			yaCounter43230029.reachGoal('zakaz-1');
			return true;
    });
	$('form#order-form').submit(function() {
			yaCounter43230029.reachGoal('zakaz-1.1');
			return true;
    });

	$('form#order-upcell-form1').submit(function() {
			yaCounter43230029.reachGoal('upcell-order1');
			return true;
    });
    $('form#order-upcell-form2').submit(function() {
			yaCounter43230029.reachGoal('upcell-order2');
			return true;
    });
    $('form#order-upcell-form3').submit(function() {
			yaCounter43230029.reachGoal('upcell-order3');
			return true;
    });
    $('form#order-upcell-form4').submit(function() {
			yaCounter43230029.reachGoal('upcell-order4');
			return true;
    });
    $('form#order-upcell-form5').submit(function() {
			yaCounter43230029.reachGoal('upcell-order5');
			return true;
    });

	// Goal TOP mailru
    $('form#order-form').submit(function() {
			var _tmr = window._tmr || (window._tmr = []);
			_tmr.push({ id: "2892541", type: "reachGoal", goal: "zakaz-1", value: 1 });
    });
		$('form#order-upcell-form1').submit(function() {
			var _tmr = window._tmr || (window._tmr = []);
			_tmr.push({ id: "2892541", type: "reachGoal", goal: "upcell-order1", value: 1 });
    });
    $('form#order-upcell-form2').submit(function() {
			var _tmr = window._tmr || (window._tmr = []);
			_tmr.push({ id: "2892541", type: "reachGoal", goal: "upcell-order2", value: 1 });
    });
    $('form#order-upcell-form3').submit(function() {
    	var _tmr = window._tmr || (window._tmr = []);
			_tmr.push({ id: "2892541", type: "reachGoal", goal: "upcell-order3", value: 1 });
    });
    $('form#order-upcell-form4').submit(function() {
    	var _tmr = window._tmr || (window._tmr = []);
			_tmr.push({ id: "2892541", type: "reachGoal", goal: "upcell-order4", value: 1 });
    });
    $('form#order-upcell-form5').submit(function() {
    	var _tmr = window._tmr || (window._tmr = []);
			_tmr.push({ id: "2892541", type: "reachGoal", goal: "upcell-order5", value: 1 });
    });

});



/*-------------------------------
Ajax отправка формы - Заявка
-------------------------------- */
// $(document).ready(function() {
//     $('form#order-form').submit(function(e) {
//         e.preventDefault();
//         var msg = $(this).serialize();
//         var action = $(this).attr('action');
//         $.ajax({
//             type: "POST",
//             url: action,
//             data: msg,
//             success: function(data) {
//                 if (data == '') {
//                     if ($('#upcell-more1').css('display') == 'block') {
//                         $('#upcell-more1').modal('hide');
//                     }
//                     if ($('#upcell-more2').css('display') == 'block') {
//                         $('#upcell-more2').modal('hide');
//                     }
//                     if ($('#upcell-more3').css('display') == 'block') {
//                         $('#upcell-more3').modal('hide');
//                     }
//                  if ($('#upcell-more4').css('display') == 'block') {
//                         $('#upcell-more4').modal('hide');
//                     }
//                  if ($('#upcell-more5').css('display') == 'block') {
//                         $('#upcell-more5').modal('hide');
//                     }
//                     if ($('.order-succes-text').css('display') == 'none') {
//                         $('.order-succes-text').fadeIn("slow");
//                     }
//                     setTimeout(function() {
//                         $('#order-success').modal('show');
//                     }, 500);

//                     setTimeout(function() {
//                         $('.order-succes-text').fadeOut("slow");
//                         $('#upcell-name-f').val('');
//                         $('#upcell-phone-f').val('');
//                     }, 3000);
//                 } else {
//                     $('#order-error').modal('show');
//                     setTimeout(function() {
//                         $('#order-error').modal('hide');
//                     }, 5000);
//                 }
//             }
//         });
//     });
// });


/*-------------------------------
Ajax отправка формы - Заявка Upcell 
-------------------------------- */
// $(document).ready(function() {
//     $('form#order-upcell-form').submit(function(e) {
//         e.preventDefault();
//         var msg = $(this).serialize();
//         var action = $(this).attr('action');
//         $.ajax({
//             type: "POST",
//             url: action,
//             data: msg,
//             success: function(data) {
//                 if (data == '') {
//                     if ($('#upcell-more1').css('display') == 'block') {
//                         $('#upcell-more1').modal('hide');
//                     }
//                     if ($('#upcell-more2').css('display') == 'block') {
//                         $('#upcell-more2').modal('hide');
//                     }
//                     if ($('#upcell-more3').css('display') == 'block') {
//                         $('#upcell-more3').modal('hide');
//                     }
//                  if ($('#upcell-more4').css('display') == 'block') {
//                         $('#upcell-more4').modal('hide');
//                     }
//                  if ($('#upcell-more5').css('display') == 'block') {
//                         $('#upcell-more5').modal('hide');
//                     }
//                     if ($('.order-succes-text').css('display') == 'none') {
//                         $('.order-succes-text').fadeIn("slow");
//                     }
//                     setTimeout(function() {
//                         $('#order-success').modal('show');
//                     }, 500);

//                     setTimeout(function() {
//                         $('.order-succes-text').fadeOut("slow");
//                         $('#upcell-name-f').val('');
//                         $('#upcell-phone-f').val('');
//                     }, 3000);
//                 } else {
//                     $('#order-error').modal('show');
//                     setTimeout(function() {
//                         $('#order-error').modal('hide');
//                     }, 5000);
//                 }
//             }
//         });
//     });
// });

$(document).ready(function() {
    var i = 0;
    function yved() {
        i = 1;
        $('.yved:nth-child(' + i + ')').fadeIn(500).delay(5000).fadeOut(500);
        //В этой строчке в мс 500 - время анимации появления, 5000 - время задержки, 500 - время затухания уведомления соответсвенно
    }
    setTimeout(function() {
        setInterval(function() {
            i = i + 1;
            if (i > 10)
                i = 1;
            //10 - количество уведомлений
            $('.yved:nth-child(' + i + ')').fadeIn(500).delay(5000).fadeOut(500);
            //В этой строчке в мс 500 - время анимации появления, 5000 - время задержки, 500 - время затухания уведомления соответсвенно
        }, 200000);
        //15000 - задержка в мс меду показами уведомлений
        yved();
    }, 10000);
    //10000 - задержка в мс перед показом первого уведомления

    //input mask
   $(function($){
        $('input[name="phone"]').mask("+7(999) 999-99-99");
   });


   //close order-success modal
  $('button#thanks').click(function() {
        $('#order-success').modal('hide');
  });

  //smal-scroll
  $('a[href*="#scroll-"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
        var t = $(this.hash);
        if (t = t.length ? t : $("[name=" + this.hash.slice(1) + "]"),
        t.length)
            return $("html, body").animate({
                scrollTop: t.offset().top
            }, 1e3),
            !1
    }
    }),

  //mobile menu
	$("#menu").slicknav({
		prependTo: ".menu__mobile",
		label: "Меню"
  	})

});

//slider
$(document).ready(function() {
	$(".slider-reviews").owlCarousel({
	  items: 1,
	  loop: !0,
	  margin: 10,
	  nav: !0,
	  navContainerClass: "reviews-slider__arrows",
	  navClass: ["arrow--left-w", "arrow--right-w"]
	}),

	$(".product-gallery").owlCarousel({
	  items: 1,
	  loop: !0,
	  margin: 10,
	  nav: !0,
	  URLhashListener: !0,
	  startPosition: "photo-one",
	  navContainerClass: "product-gallery__arrows",
	  navClass: ["arrow--left", "arrow--right"]
	}),

	$(".header-slider").owlCarousel({
	  items: 1,
	  loop: !0,
	  margin: 10,
	  autoplay: true,
	  autoplayTimeout: 4000,
	})
});

// initializeClock('timer2', deadline);


//timer
$(document).ready(function() {
function pad(t) {
        return (t < 10 ? "0" : "") + t
    }
    function getCountdown() {
        var t = (new Date).getTime()
          , e = (target_date - t) / 1e3;
        days = pad(parseInt(e / 86400)),
        e %= 86400,
        hours = pad(parseInt(e / 3600)),
        e %= 3600,
        minutes = pad(parseInt(e / 60)),
        seconds = pad(parseInt(e % 60));
        var i = '<div class="cd__tile"><div class="cd__time-wrapper"><div class="cd__time"><div class="cd__time-number">' + hours.substr(0, 1) + '</div></div><div class="cd__time"><div class="cd__time-number">' + hours.substr(1, 1) + '</div></div></div><div class="cd__label">Часов</div></div>'
          , s = '<div class="cd__tile"><div class="cd__time-wrapper"><div class="cd__time"><div class="cd__time-number">' + minutes.substr(0, 1) + '</div></div><div class="cd__time"><div class="cd__time-number">' + minutes.substr(1, 1) + '</div></div></div><div class="cd__label">Минут</div></div>'
          , n = '<div class="cd__tile"><div class="cd__time-wrapper"><div class="cd__time"><div class="cd__time-number">' + seconds.substr(0, 1) + '</div></div><div class="cd__time"><div class="cd__time-number">' + seconds.substr(1, 1) + '</div></div></div><div class="cd__label">Секунд</div></div>';
        countdown.innerHTML = i + s + n
    }
    var days, hours, minutes, seconds, countdown;
    countdown = document.getElementById("cd__tiles1"),
    getCountdown(),
    setInterval(function() {
        getCountdown()
    }, 1e3);
    var timeEnd = new Date;
    timeEnd.setHours(23, 59, 59, 999),
    timeEnd.toUTCString();
    var target_date = new Date(timeEnd.toUTCString());
});