$(document).ready(function () {
    var regions = ["US", "UK", "FR"];
    var cities = {
        "US": ["Florida", "New York", "Miami"],
        "UK": ["London", "Cambridge"],
        "FR" : ["Paris","Lyon"]
    }
    var agencies = {
        "Florida": ["Florida Town", "Outer Town"],
        "New York": ["Brooklyn", "5th avenue"],
        "Miami": ["Dexter", "Doakes"],
        "London": ["Picadilly", "James"],
        "Cambridge": ["School 1", "School 2"],
        "Paris": ["Paris 1", "Croissant"],
        "Lyon" : ["l1", "l2"]
    }

    $("#regionSelect").on("change", function () {
        var selectedRegion = $(this).val();
        var cityOptions = cities[selectedRegion];


        var $citySelect = $("#citySelect");
        $citySelect.empty();
        $citySelect.append("<option value='0' selected disabled>Select </option>")


        $.each(cityOptions, function (index, city) {
            $citySelect.append($("<option>", {
                value: city,
                text: city
            }));
        })

        
    })

    $("#regionCityFind").on("click", function () {
        var selectedCity = $("#citySelect").val();
        if (selectedCity == 0 || selectedCity == null) {
            alert("Please choose a city first.")
        }
        else {
            $(".find-modal").toggleClass("d-none");
            var $findModalText = $(".find-modal-text");
            $findModalText.empty();
            var content = agencies[selectedCity].join("<br>");
            $findModalText.html(content);

        }

    })

    $("#closeModalButton").on("click", function () {
        $(".find-modal").toggleClass("d-none");
    })
    $("#sendMailModalButton").on("click", function () {
        $(".find-modal").toggleClass("d-none");
        alert("Check your mail!");
    })
})