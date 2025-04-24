// Write your JavaScript code here
$(document).ready(function () {
    $(".seat-selection").on("click", function () {
        var seats = $(".seat-selection");
        seats.removeClass("selected-seat");
        $(this).addClass("selected-seat");
    })
})