// This script manages user profiles, including loading and saving profile data

document.addEventListener("DOMContentLoaded", () => {
    // Elements for profile update
    const profileForm = document.getElementById("profile-form");
    const profileNameDisplay = document.getElementById("profile-name");
    const profileEmailDisplay = document.getElementById("profile-email");
    const profilePicPreview = document.getElementById("profile-pic-preview");

    // Load profile data from localStorage
    const loadProfileData = () => {
        const profileData = JSON.parse(localStorage.getItem("profile")) || {
            name: "John Doe",
            email: "johndoe@example.com",
            password: "",
            profilePic: "default-profile.png",
        };

        // Update the displayed profile information
        profileNameDisplay.textContent = profileData.name;
        profileEmailDisplay.textContent = profileData.email;
        profilePicPreview.src = profileData.profilePic;

        // Update form fields with the current profile data
        profileForm.name.value = profileData.name;
        profileForm.email.value = profileData.email;
        profileForm.password.value = profileData.password; // Only for demonstration purposes
    };

    // Handle profile form submission
    profileForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = profileForm.name.value.trim();
        const email = profileForm.email.value.trim();
        const password = profileForm.password.value.trim();
        const profilePic = profileForm["profile-pic"].files[0];

        // Basic validation
        if (!name || !email || !password) {
            alert("All fields are required.");
            return;
        }

        // Save profile picture if uploaded
        let profilePicURL = profilePicPreview.src; // Default or previously saved picture
        if (profilePic) {
            const reader = new FileReader();
            reader.onload = () => {
                profilePicURL = reader.result;

                // Save updated profile data to localStorage
                const profileData = { name, email, password, profilePic: profilePicURL };
                localStorage.setItem("profile", JSON.stringify(profileData));

                // Reload the profile data
                loadProfileData();
                alert("Profile updated successfully!");
            };
            reader.readAsDataURL(profilePic);
            return; // Exit early, as picture saving is asynchronous
        }

        // Save updated profile data without picture change
        const profileData = { name, email, password, profilePic: profilePicURL };
        localStorage.setItem("profile", JSON.stringify(profileData));

        // Reload the profile data
        loadProfileData();
        alert("Profile updated successfully!");
    });

    // Load profile data on page load
    loadProfileData();
});

document.addEventListener("DOMContentLoaded", () => {
    // Default tracker data
    const defaultTrackerData = {
        adoptionDate: "January 1, 2025",
        vetCheckup: "February 15, 2025",
        trainingProgress: "Beginner Level",
    };

    // Load tracker data from localStorage or use defaults
    const loadTrackerData = () => {
        const trackerData = JSON.parse(localStorage.getItem("adoptionTracker")) || defaultTrackerData;
        document.getElementById("adoption-date").textContent = trackerData.adoptionDate;
        document.getElementById("vet-checkup").textContent = trackerData.vetCheckup;
        document.getElementById("training-progress").textContent = trackerData.trainingProgress;
    };

    // Save tracker data to localStorage
    const saveTrackerData = (trackerData) => {
        localStorage.setItem("adoptionTracker", JSON.stringify(trackerData));
    };

    // Handle tracker editing
    document.getElementById("edit-tracker").addEventListener("click", () => {
        const adoptionDate = prompt("Enter Adoption Date:", document.getElementById("adoption-date").textContent);
        const vetCheckup = prompt("Enter Next Veterinary Checkup Date:", document.getElementById("vet-checkup").textContent);
        const trainingProgress = prompt("Enter Training Progress:", document.getElementById("training-progress").textContent);

        if (adoptionDate && vetCheckup && trainingProgress) {
            const updatedTrackerData = { adoptionDate, vetCheckup, trainingProgress };
            saveTrackerData(updatedTrackerData);
            loadTrackerData(); // Refresh the displayed data
            alert("Tracker updated successfully!");
        }
    });

    // Load tracker data on page load
    loadTrackerData();
});

// Display saved favorites
document.addEventListener("DOMContentLoaded", () => {
    const favouriteList = document.getElementById("favourite-list");

    // Load favourites from localStorage
    const favourites = JSON.parse(localStorage.getItem("favourites")) || [];

    if (favourites.length === 0) {
        favouriteList.innerHTML = "<p>No favorites added yet!</p>";
        return;
    }

    // Render each favourite
    favourites.forEach((pet, index) => {
        const card = document.createElement("div");
        card.className = "favourite-card";
        card.innerHTML = `
            <img src="${pet.image}" alt="${pet.name}" class="pet-image" style="width:100%; border-radius:5px;"/>
            <h3>${pet.name}</h3>
            <p>Type: ${pet.type}</p>
            <p>Breed: ${pet.breed}</p>
            <button class="remove-favourite" data-index="${index}">Remove from Favourites</button>
        `;
        favouriteList.appendChild(card);
    });

    // Add click event listener to remove buttons
    favouriteList.addEventListener("click", (e) => {
        if (e.target.classList.contains("remove-favourite")) {
            const index = e.target.dataset.index;
            favourites.splice(index, 1); // Remove the pet from the array
            localStorage.setItem("favourites", JSON.stringify(favourites)); // Update localStorage
            e.target.parentElement.remove(); // Remove the pet's card from the DOM

            // Show message if no favourites remain
            if (favourites.length === 0) {
                favouriteList.innerHTML = "<p>No favorites added yet!</p>";
            }
        }
    });
});
