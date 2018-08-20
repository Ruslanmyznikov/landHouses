
  // AOS.init();

$(function() {
	var owl = $('.owl-carousel');

	owl.owlCarousel({
		loop:false,
		margin:10,
		nav:false,
		dots: false,
		responsive:{
			0:{
				items:1
			},
			900:{
				items:2
			},
			1500:{
				items:3
			}
		}
	});
	
	$('.custom-owl-next').click(function() {
	  owl.trigger('next.owl.carousel');
	});
	
	$('.custom-owl-prev').click(function() {
	  owl.trigger('prev.owl.carousel');
	});

});

var cards = document.getElementsByClassName('card'),
    transforms = [
  { x: 0,
    z: 0,
    scale: 1,
    opacity: 1
  },
  { x: '-55%',
    z: '-50px',
    scale: 0.8,
    opacity: 0.8
  },
  {
    x: '55%',
    z: '-50px',
    scale: 0.8,
    opacity: 0.8
  }
];

var nextTransform = function(x) {
  if (x >= cards.length - 1) {
    x = 0;
  } else {
    x++;
  }
  return x;
};

function next() {
  for (i = 0; i < cards.length; i++) {
    cards[i].style.transform = 
      'translateX(' + transforms[nextTransform(i)].x + ')' + 
      'translateZ(' + transforms[nextTransform(i)].z + ')' +
      'scale(' + transforms[nextTransform(i)].scale + ')';
    cards[i].style.opacity = transforms[nextTransform(i)].opacity;
  }
  transforms.push(transforms.shift());
}
  
document.getElementById('carousel').onclick = function() {
  next();  
};

// $(function() {
// 	var owl = $('.owl-carousel');

// 	owl.owlCarousel({
// 		loop:false,
// 		margin:'10px',
// 		nav:false,
//     dots: false,
//     center: true,
//     autoPlay:true,
//     autoplayTimeout:2000,
// 		responsive:{
// 			0:{
// 				items:1
// 			},
// 			800:{
// 				items:2
// 			},
//       1300:{
//         items:3
//       },
// 		}
// 	});
	
// 	$('.custom-owl-next').click(function() {
// 	  owl.trigger('next.owl.carousel');
// 	});
	
// 	$('.custom-owl-prev').click(function() {
// 	  owl.trigger('prev.owl.carousel');
// 	});

// });

var cards = document.getElementsByClassName('card'),
    transforms = [
  { x: 0,
    z: 0,
    scale: 1,
    opacity: 1
  },
  { x: '-55%',
    z: '-50px',
    scale: 0.8,
    opacity: 0.8
  },
  {
    x: '55%',
    z: '-50px',
    scale: 0.8,
    opacity: 0.8
  }
];

var nextTransform = function(x) {
  if (x >= cards.length - 1) {
    x = 0;
  } else {
    x++;
  }
  return x;
};

function next() {
  for (i = 0; i < cards.length; i++) {
    cards[i].style.transform = 
      'translateX(' + transforms[nextTransform(i)].x + ')' + 
      'translateZ(' + transforms[nextTransform(i)].z + ')' +
      'scale(' + transforms[nextTransform(i)].scale + ')';
    cards[i].style.opacity = transforms[nextTransform(i)].opacity;
  }
  transforms.push(transforms.shift());
}
  
document.getElementById('carousel').onclick = function() {
  next();  
};

$(document).ready(function(){
      $("#menu").on("click","a", function (event) {
          //отменяем стандартную обработку нажатия по ссылке
          event.preventDefault();
         //забираем идентификатор бока с атрибута href
          var id  = $(this).attr('href'),
          //узнаем высоту от начала страницы до блока на который ссылается якорь
              top = $(id).offset().top;    
          //анимируем переход на расстояние - top за 1500 мс
          $('body,html').animate({scrollTop: top}, 1200);
      });

  });

  $(document).ready(function(){
    $("#menu1").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
       //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;    
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1200);
    });

});

  