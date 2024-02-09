
// This code creates a calculator using jquery to multiply hours and rates.
$(document).ready(function () {
    $("#calculateButton").off().click(function () {
        var hours = $("#hours").val();
        var rate = $("#rate").val();
        if (hours > 0) {
            var total = hours * rate;
            $("#total").val(total.toFixed(2));
        } else {
            alert("Please enter a positive number of hours.");
            $("#hours").focus();
        }
    });
});

