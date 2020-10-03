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
})