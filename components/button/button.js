// button.js


document.addEventListener('DOMContentLoaded', function () {
    // Find the Resume button element
    var resumeButton = document.querySelector('.downloadButton');

    // Add a click event listener to the button
    resumeButton.addEventListener('click', function () {
        // Open the link in a new browser window when the button is clicked
        window.open('https://seungjinbaek.notion.site/seungjinbaek/1b072c03b8ff44dc825d082f4fdb0e61', '_blank');
    });
});

