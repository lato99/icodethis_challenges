// Write your JavaScript code here

$(document).ready(function(){
    $("#returnHomeButton").on("click",function () {
    alert("hi");
    $("#notFoundPage").addClass("d-none");
    $("#mainPage").removeClass("d-none");
});
})