// Write your JavaScript code here
$("document").ready(function () {
    $("input[name='subType']").on("change", function () {
        $(".price-tag, .price-tag-info").toggleClass("d-none");
    })
})