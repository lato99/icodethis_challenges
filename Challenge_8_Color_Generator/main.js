$(document).ready(function () {
    function generateRandomColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
    }

    function generateColors() {
        $(".card").each((index, element) => {
            var newColor = generateRandomColor();
            $(element).find(".cardColor").css("background-color", newColor);
            $(element).find(".colorName").text(newColor)
        });
    }

    // Generate colors when the page loads
    generateColors();

    // Generate new colors when the button is clicked
    $(".generateButton").on("click", function () {
        generateColors();
    });


    $(document).keydown(function (event) {
        if (event.key === " "  ) {
            generateColors();
        }
    });

    $(".card").on("click", function () {
        let colorText = $(this).find(".colorName").text().trim();
        if (colorText) {
            // Copy to clipboard
            let tempInput = $("<input>");
            $("body").append(tempInput);
            tempInput.val(colorText).select();
            document.execCommand("copy");
            tempInput.remove();

            // Show feedback message
         
            copyMessageSet(`Color ${colorText} copied to your clipboard.`);
        }
    })
    function copyMessageSet(message) {
        $(".copyMessage").text(message).fadeIn().delay(1000).fadeOut();
    }

    $(document).keydown(function (event) {
        if (event.key.toLowerCase() === "c") {
            let colorText = "";
            $(".card-text").each((index, element) => {
                colorText +=" "+ $(element).text().trim();
            });
            if (colorText) {
                // Copy to clipboard
                let tempInput = $("<input>");
                $("body").append(tempInput);
                tempInput.val(colorText).select();
                document.execCommand("copy");
                tempInput.remove();
                copyMessageSet("All colors copied to your clipboard.")
                // Show feedback message
                
            }
        }
    });

});
