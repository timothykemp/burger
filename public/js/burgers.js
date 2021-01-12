// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            name: $("#ca").val().trim(),
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function (data) {
                console.log(data);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".devour-burger").on("click", function (event) {
        var id = $(this).data("id");
        var devoured = $(this).data("devoured");

        var newDevourState = {
            devoured: devoured
        };

        // Send the UPDATE request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function () {
                console.log("devoured burger", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
