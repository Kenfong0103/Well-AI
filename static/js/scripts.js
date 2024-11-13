document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        console.log("Form submitted");

        // Prevent the default form submission
        event.preventDefault();

        // Submit the form using Fetch API
        fetch(form.action, {
            method: "POST",
            body: new FormData(form),
        })
        .then(response => response.text())
        .then(data => {
            // Inject the new data into the page
            document.body.innerHTML = data;
            console.log("Page updated with prediction result");

            // Check if the prediction result exists and scroll to it
            const resultElement = document.getElementById("prediction-result");
            if (resultElement) {
                resultElement.scrollIntoView({ behavior: "smooth" });
            } else {
                console.log("No prediction result found");
            }
        })
        .catch(error => {
            console.error("Error during form submission:", error);
        });
    });
});
