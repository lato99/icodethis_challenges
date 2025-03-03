// Write your JavaScript code here
$("document").ready(function(){
    $("#signUpButton").on("click", function () {
        var userMail = $("#mailInput").val();
        console.log(userMail)
        Swal.fire({
            title: "Signed Up!",
            text: "Check your mail!" + " " + userMail,
            icon: "success"
        });
    })
})