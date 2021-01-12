// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    // $(".change-sleep").on("click", function (event) {
    //     var id = $(this).data("id");
    //     var newSleep = $(this).data("newsleep");

    //     var newSleepState = {
    //         sleepy: newSleep
    //     };

    //     // Send the PUT request.
    //     $.ajax("/api/cats/" + id, {
    //         type: "PUT",
    //         data: newSleepState
    //     }).then(
    //         function () {
    //             console.log("changed sleep to", newSleep);
    //             // Reload the page to get the updated list
    //             location.reload();
    //         }
    //     );
    // });

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
        ).done((err) => {
            console.log('err :>> ', err)
        });
    });

    // $(".delete-cat").on("click", function (event) {
    //     var id = $(this).data("id");

    //     // Send the DELETE request.
    //     $.ajax("/api/cats/" + id, {
    //         type: "DELETE"
    //     }).then(
    //         function () {
    //             console.log("deleted cat", id);
    //             // Reload the page to get the updated list
    //             location.reload();
    //         }
    //     );
    // });
});
