$(document).ready(function() {
    $("#faqs h2").click(function() {
        $(this).toggleClass("minus");
        $(this).next().toggle();
    }); // end click
}); // end ready
