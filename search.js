// adds an event listener to handle the form submission 
document.getElementById("searchForm").addEventListener("submit", (e) => {
    e.preventDefault(); // prevents page from being reloaded on form submission
    
    // Captures user input from the form fields 
    const type = document.getElementById("type").value.toLowerCase(); // type of pet
    const breed = document.getElementById("breed").value.toLowerCase(); // pet breed
    const age = document.getElementById("age").value; // age of the pet
    const size = document.getElementById("size").value; // size of the pet
    const temperament = document.getElementById("temperament").value; // the temperment of the pet
    
    // filters pets based on the users input
    const results = pets.filter((pet) => {
        return (
            (!type || pet.type.toLowerCase() === type) && // match type if specified 
            (!breed || pet.breed.toLowerCase().includes(breed)) && // match breed if specified
            (!age || pet.age === age) && // match age if specified
            (!size || pet.size === size) && // match size if specified 
            (!temperament || pet.temperament === temperament) // match temperament if specified
        );
    });
     // updates the ui to display the filtered results
    displayResults(results);
});

// Function to display search results in the results container
function displayResults(results) {
    const resultsDiv = document.getElementById("searchResults");
    resultsDiv.innerHTML = ""; // Clear previous results

    if (results.length === 0) {
        // Show message if no results found
        resultsDiv.innerHTML = "<p>No pets found matching your criteria. Try different filters.</p>";
        return;
    }

    results.forEach((pet) => {
        const petCard = document.createElement("div");
        petCard.classList.add("pet-card");
        petCard.innerHTML = `
            <img src="${pet.image}" alt="${pet.name}" class="pet-image">
            <h3>${pet.name}</h3>
            <p><strong>Type:</strong> ${pet.type}</p>
            <p><strong>Breed:</strong> ${pet.breed}</p>
            <p><strong>Age:</strong> ${pet.age}</p>
            <p><strong>Size:<strong> ${pet.size}</p>
            <p><strong>Temperament:</strong> ${pet.temperament}</p>
            <button class="favourite-button" data-id="${pet.id}">Add to Favourites</button>
            <a href="pet-details.html?id=${pet.id}" class="details-button">View Details</a>
        `;
        resultsDiv.appendChild(petCard);
    });

    attachFavouriteListeners();
}

function attachFavouriteListeners() {
    const favouriteButtons = document.querySelectorAll(".favourite-button");
    favouriteButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            const petId = e.target.dataset.id;
            const pet = pets.find((p) => p.id == petId);

            // Retrieve favourites from localStorage
            const favourites = JSON.parse(localStorage.getItem("favourites")) || [];

            // Check if already added
            if (favourites.some((f) => f.id == pet.id)) {
                alert(`${pet.name} is already in your favourites.`);
                return;
            }
            // if they arent then they are added
            favourites.push(pet);
            localStorage.setItem("favourites", JSON.stringify(favourites));
            alert(`${pet.name} added to your favourites!`);
        });
    });
}
// event listener for the submit
document.getElementById("searchForm").addEventListener("submit", (e) => {
    e.preventDefault();
    // submits the pet data
    const type = document.getElementById("type").value.toLowerCase();
    const breed = document.getElementById("breed").value.toLowerCase();
    const age = document.getElementById("age").value;
    const size = document.getElementById("size").value;
    const temperament = document.getElementById("temperament").value;

    const results = pets.filter((pet) => {
        return (
            (!type || pet.type.toLowerCase() === type) &&
            (!breed || pet.breed.toLowerCase().includes(breed)) &&
            (!age || pet.age === age) &&
            (!size || pet.size === size) &&
            (!temperament || pet.temperament === temperament)
        );
    });

    displayResults(results);
});

