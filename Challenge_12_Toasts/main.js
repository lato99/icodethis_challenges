// Write your JavaScript code here
$(document).ready(function () {
    
    var count = 1;
    var notificationContainer = $(".notificationStack");
    var selectedType;
    var selectedColor;

    changeType();
    changeColor();

    function changeType() {
        selectedType = $("#notificationTypeSelect").val();
    }
    function changeColor() {
        selectedColor = $("#notificationColorSelect").val();
    }
    $("#notificationTypeSelect").on("change", function () {
        changeType();
    });

    $("#notificationColorSelect").on("change", function () {
        changeColor();
    })

    $(".createNotification").on("click", function () {
        notificationContainer.prepend("<div class='text-center alert "+ selectedColor +" "+ selectedType + " notificationInstance' role='alert'>Alert Count: " + count + "</div>");
        count += 1;
    })
    
    $(".deleteNotification").on("click", function () {
        var notification = $(".notificationInstance");
        $(".notificationInstance")[0].remove();
        console.log(notification);
    })

});