// allows for users to save pets to favourites

// Listen for click events on the pet list container
document.querySelector(".pet-list-container").addEventListener("click", function (e) {
    if (e.target.classList.contains("save-to-favourites")) {
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
            image: petCard.querySelector("img")?.src || "default-image.png",
        };

        if (!pet.id) {
            console.error("Pet ID is missing. Cannot save to favourites.");
            return;
        }

        console.log("Pet to be saved:", pet);

        // Load existing favourites
        const favourites = JSON.parse(localStorage.getItem("favourites")) || [];

        // Prevent duplicates
        if (!favourites.some((f) => f.id === pet.id)) {
            favourites.push(pet);
            localStorage.setItem("favourites", JSON.stringify(favourites));
            console.log(`${pet.name} added to favourites.`);
        } else {
            console.log(`${pet.name} is already in favourites.`);
        }
    }
});
