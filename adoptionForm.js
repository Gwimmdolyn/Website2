// This script dynamically loads details of the pet selected for adoption

// Extract the pet ID from the URL parameters
const params = new URLSearchParams(window.location.search);
const petId = parseInt(params.get("id"), 10);

// Find the pet details using the pet ID
const pet = pet.find((p) => p.id === petId);

if (pet) {
    // If the pet is found, display its details in the form
    document.getElementById("petInfo").innerHTML = `
        <h2>Adopting: ${pet.name}</h2>
        <p>${pet.description}</p>
    `;
} else {
    // If the pet is not found, display an error message
    document.getElementById("petInfo").innerHTML = "<p>Pet not found.</p>";
}

// Add an event listener to handle form submission
document.getElementById("appointmentForm").addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page refresh on form submission

    // Collect user input from the form
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const date = document.getElementById("appointmentDate").value;

    if (!name || !email || !date) {
        // Validate that all fields are filled
        alert("Please complete all fields.");
    } else {
        // Confirm the appointment with a success message
        alert(`Appointment confirmed for ${name} on ${date} to visit ${pet.name}.`);
    }
});
