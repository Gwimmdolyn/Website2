// This script processes donation submissions

// Add an event listener to handle the donation form submission
document.getElementById("donationForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page refresh on submission

    // Collect donation details
    const amount = document.getElementById("amount").value; // Donation amount
    const frequency = document.getElementById("frequency").value; // Donation frequency (e.g., one-time, monthly)

    // Validate that both fields are filled
    if (amount && frequency) {
        // Display a thank-you message for the donation
        document.getElementById("donationMessage").textContent =
            `Thank you for your ${frequency} donation of £${amount}!`;
    } else {
        // Alert the user if any fields are empty
        alert("Please fill out all fields!");
    }
});
