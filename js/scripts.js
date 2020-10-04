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
    $('#work2').hover(function(){
        $('#work2').addClass('overlay');
    });
});

function thisfunction(event) {
  if (event.keyCode=== 13) {
   event.preventDefault();
   document.getElementById("myForm").submit();
   alert(document.getElementById('name').value + " we have received your message.Thank you for reaching out to us");
  }
  event.preventDefault();
}; 