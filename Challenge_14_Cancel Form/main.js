

$(document).ready(function () {
$(".submitButton").click(function () {
  $(".rating-number").removeClass("rating-number-active");
  $("#improve-text").val("");
  alert("Thank you for your feedback!")
});
// Write your JavaScript code here

function createRaindrop() {
    const drop = $('<div class="raindrop" ></div>');
  const startLeft = Math.random() * $(window).width()*0.90;
  const duration = 0.5 + Math.random() * 1.5;

  drop.css({
      left: startLeft + 'px',
  animationDuration: duration + 's'
    });

  $('body').append(drop);

    setTimeout(() => {
      drop.remove();
    }, duration * 1000);
  }

setInterval(createRaindrop, 50); // Create a drop every 50ms
  
$("#rating-boxes").on("click", ".rating-number", function () {
$(".rating-number").removeClass("rating-number-active");
$(this).addClass("rating-number-active");
})

})
