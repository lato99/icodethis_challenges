// Write your JavaScript code here
$("document").ready(function () {
    $(".showMore").on("click", function () {
        $(".extraContent").toggleClass("notSeen");
        $(".showMore").toggleClass("notSeen");
        $(".showLess").toggleClass("notSeen");
    })
    $(".showLess").on("click", function () {
        $(".extraContent").toggleClass("notSeen");
        $(".showMore").toggleClass("notSeen");
        $(".showLess").toggleClass("notSeen");
    })
})