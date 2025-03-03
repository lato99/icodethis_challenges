// Write your JavaScript code here
$(document).ready(function () {
    var row = 7;
    var col = 4;
    var seatTypes = ["seatAvailable","seatAvailable","seatAvailable","seatBooked"]
    for (let i = 1; i < row; i++){
        let leftRow = $("<div></div>").addClass("leftSeatsRow");
        let rightRow = $("<div></div>").addClass("rightSeatsRow");
        for (let j = 0; j < col; j++){
            var randomSeatTypeLeft = seatTypes[Math.floor(Math.random() * seatTypes.length)]
            var randomSeatTypeRight = seatTypes[Math.floor(Math.random() * seatTypes.length)]
            let leftSeat = $("<i></i>").addClass(`fa-solid fa-couch seat-${i}-${j} ${randomSeatTypeLeft} `);
            let rightSeat = $("<i></i>").addClass( `fa-solid fa-couch seat-${i}-${j} ${randomSeatTypeRight}`);
            leftRow.append(leftSeat);
            rightRow.append(rightSeat);
        }
        $(".leftSeats").append(leftRow);
        $(".rightSeats").append(rightRow);
    }

    function updateTicketInfo(){
        var selectedTicketCount = $(".seatSelection i.seatSelected").length;
        var ticketPrice = 20;
        $("#ticketCount").text(selectedTicketCount);
        $("#totalFee").text(selectedTicketCount * ticketPrice + "$");

    }
    $(".seatSelection").on("click","i.fa-couch",function(){
        if(!$(this).hasClass("seatBooked")){
            $(this).toggleClass("seatSelected");
            updateTicketInfo();
        }
    })

    const today = new Date().toISOString().split("T")[0];
    $("#ticketDate").attr("min",today);
    $("#ticketDate").val(today);
    // $("#ticketDate").text(today)

    $(".priceNext a").on("click",function(event){
        event.preventDefault();

        let selectedSeatCount = $(".seatSelection i.seatSelected").length;
        let totalPrice = selectedSeatCount * 20;
        let selectedDate = $("#ticketDate").val();
        if(selectedSeatCount === 0){
                Swal.fire({
                    icon:"warning",
                title:"No seats selected",
                            text: "Please select at least one seat before proceeding!",
            confirmButtonColor: "#ff5733"
                })
        }
        else{
            Swal.fire({
                icon: "success",
                title: "Booking Confirmed!",
                html: `<b>Date:</b> ${selectedDate} <br> 
                       <b>Seats Selected:</b> ${selectedSeatCount} <br> 
                       <b>Total Price:</b> $${totalPrice}`,
                confirmButtonText: "OK",
                confirmButtonColor: "#28a745"
            }).then(() => {
                $(".seatSelection i.seatSelected").removeClass("seatSelected").addClass("seatBooked");
                $("#ticketCount").text("0");
                $("#totalFee").text("0$");
            })
        }

    })
})