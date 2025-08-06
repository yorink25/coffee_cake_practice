$(function() {
    $(".hamburger").click(function() {
        $(this).toggleClass("active");
        $("#header-area .navi").toggleClass("active");
    });
    $(".navi a").click(function() {
        $(".hamburger").removeClass("active");
        $("#header-area .navi").removeClass("active");
    });
});
