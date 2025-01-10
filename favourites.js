// allows for users to save pets to favourites

// listens for click event
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("save-to-favourites")) {
        // Find the parent pet card element
        const petCard = e.target.closest(".pet-card");
        if (!petCard) {
            console.error("No pet card found.");
            return;
        }

        // Collect pet information
        const pet = {
            id: petCard.dataset?.id || "unknown",
            name: petCard.querySelector("h3")?.textContent || "Unknown Name",
            type: petCard.querySelector(".pet-type")?.textContent.split(": ")[1] || "Unknown Type",
            breed: petCard.querySelector(".pet-breed")?.textContent.split(": ")[1] || "Unknown Breed",
            image: petCard.querySelector("img")?.src || "default-image.png", // Add image URL
        };
         // error handling
        if (!pet.id) {
            console.error("Pet ID is missing. Cannot save to favourites.");
            return;
        }

        console.log("Pet to be saved:", pet);

        // Load existing favourites from localStorage
        const favourites = JSON.parse(localStorage.getItem("favourites")) || [];

        // Check if the pet already exists in favourites
        if (!favourites.some((f) => f.id === pet.id)) {
            favourites.push(pet); // Add new pet
            localStorage.setItem("favourites", JSON.stringify(favourites)); // Save updated favourites
            console.log(`${pet.name} added to favourites.`);
        } else {
            console.log(`${pet.name} is already in favourites.`);
        }
    }
});
