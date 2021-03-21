// $('#logoHeader').hide();
$('#box1').hide();
$('#box2').hide();
$('#box3').hide();
$('#box4').hide();
$('#leftcoll').hide();

var timeOut = setTimeout(function() {

    $('#leftcoll').delay(500).fadeIn();
    $('#box1').delay(100).fadeIn();
    $('#box2').delay(200).fadeIn();
    $('#box3').delay(300).fadeIn();
    $('#box4').delay(400).fadeIn();

}, 200); 


$('.slick-carousel').slick({
    infinite: true,
    slidesToShow: 3, // Shows a three slides at a time
    slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
    arrows: false, // Adds arrows to sides of slider
    dots: false, // Adds the dots on the bottom
    autoplay: true,
  autoplaySpeed: 2000,
  });


// $('#bcards').load(function(){

//     $('#list1').hide();
// $('#list2').hide();
// $('#list3').hide();
// $('#list4').hide();
// $('#list5').hide();

//     var timeout1 = setTimeout(function(){
//         $('#list1').delay(100).fadeIn();
//         $('#list2').delay(150).fadeIn();
//         $('#list3').delay(200).fadeIn();
//         $('#list4').delay(250).fadeIn();
//         $('#list5').delay(300).fadeIn();
//     });

// })

(function() {
    var elements;
    var windowHeight;
  
    function init() {
      elements = document.querySelectorAll('.hidden');
      windowHeight = window.innerHeight;
    }
  
    function checkPosition() {
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var positionFromTop = elements[i].getBoundingClientRect().top;
  
        if (positionFromTop - windowHeight <= 0) {
          element.classList.add('fade-in-element');
          element.classList.remove('hidden');
        }
      }
    }
  
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  
    init();
    checkPosition();
  })();


  
document.getElementById("formbtn").onclick = function () {
  location.href = "#customerform";
};
