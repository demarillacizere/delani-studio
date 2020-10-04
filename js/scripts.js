$(document).ready(function(){
    $('#design-fig').click(function(){
        $('#design').toggle();
        $('#design-icon').toggle();
    })
    $('#dev-fig').click(function(){
        $('#development').toggle();
        $('#dev-icon').toggle();
    })
    $('#products-fig').click(function(){
        $('#product').toggle();
        $('#products-icon').toggle();
    })
    $("#mouse-click").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#about-us").offset().top
        }, 1000);
    });
    $('#work1').hover(function(){
        $('.text1').toggle();
        $('.text1').addClass('overlay');
    })
    $('#work2').hover(function(){
        $('.text2').toggle();
        $('.text2').addClass('overlay');
    })
    $('#work3').hover(function(){
        $('.text3').toggle();
        $('.text3').addClass('overlay');
    })
    $('#work4').hover(function(){
        $('.text4').toggle();
        $('.text4').addClass('overlay');
    })
    $('#work5').hover(function(){
        $('.text5').toggle();
        $('.text5').addClass('overlay');
    })
    $('#work6').hover(function(){
        $('.text6').toggle();
        $('.text6').addClass('overlay');
    })
    $('#work7').hover(function(){
        $('.text7').toggle();
        $('.text7').addClass('overlay');
    })
    $('#work8').hover(function(){
        $('.text8').toggle();
        $('.text8').addClass('overlay');
    })
});

function myFunction(event) {
  if (event.keyCode=== 13) {
   event.preventDefault();
   document.getElementById("myForm").submit();
   alert(document.getElementById('name').value + " we have received your message.Thank you for reaching out to us");
  }
  event.preventDefault();
}; 