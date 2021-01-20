// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(() => {

    // Creating a new burger
    $(".create-form").on("submit", event => {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        const newBurger = {
            name: $("#ca").val().trim(),
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            data => {
                console.log(data);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    // Devouring a burger
    $(".devour-burger").on("click", function (event) {
        const id = $(this).data("id");
        const devoured = $(this).data("devoured");

        const newDevourState = {
            devoured
        };

        // Send the UPDATE request.
        $.ajax(`/api/burgers/${id}`, {
            type: "PUT",
            data: newDevourState
        }).then(
            () => {
                console.log("devoured burger", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
