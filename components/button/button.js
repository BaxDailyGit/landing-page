// button.js

// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function() {
    // Get all elements with class "downloadButton"
    var downloadButtons = document.querySelectorAll('.downloadButton');

    // Define the link to navigate to
    var targetLink = "https://seungjinbaek.notion.site/seungjinbaek/1b072c03b8ff44dc825d082f4fdb0e61";

    // Function to handle button click
    function handleButtonClick() {
        // Open a new browser window/tab with the target link
        window.open(targetLink, '_blank');
    }

    // Attach click event listener to all download buttons
    downloadButtons.forEach(function(button) {
        button.addEventListener('click', handleButtonClick);
    });
});