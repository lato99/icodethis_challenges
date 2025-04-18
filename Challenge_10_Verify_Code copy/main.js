$(document).ready(function () {
    var $container = $(".card-container");
    var $originalParent = $container.parent(); // save reference


    $('#subscribeFree, #subscribePro').on('click', function () {
        var $card = $(this).closest('.card');
        $("body").css("background", "#202842")
        $container.toggleClass("d-none");
        $(".payment-card").toggleClass("d-none");
    });

    $(".back-button").on('click', function () {
        $container.appendTo($originalParent); // or .insertAfter() / .prependTo() if you want a specific position

        $container.toggleClass("d-none");
        $(".payment-card").toggleClass("d-none");
    });

    $(".pay-button").on('click', function () {
        alert("Payment Recieved")
        $container.toggleClass("d-none");
        $(".payment-card").toggleClass("d-none");
    });

    
});
