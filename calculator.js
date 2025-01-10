// This script calculates the total adoption cost, including adoption fees, vet costs, and supplies

// Add a click event listener to the "Calculate Cost" button
document.getElementById("calculateCostButton").addEventListener("click", function () {
    try {
        // Retrieve input values for adoption fee, vet cost, and supplies cost
        const adoptionFee = parseFloat(document.getElementById("adoptionFee").value) || 0;
        const vetCost = parseFloat(document.getElementById("vetCost").value) || 0;
        const suppliesCost = parseFloat(document.getElementById("suppliesCost").value) || 0;

        // Validate inputs: costs cannot be negative
        if (adoptionFee < 0 || vetCost < 0 || suppliesCost < 0) {
            throw new Error("Costs cannot be negative.");
        }

        // Calculate the total cost
        const totalCost = adoptionFee + vetCost + suppliesCost;

        // Display the calculated total cost in the result container
        document.getElementById("totalCost").textContent = `Total Cost: £${totalCost.toFixed(2)}`;
    } catch (error) {
        // Handle errors and alert the user
        alert(`Error: ${error.message}`);
    }
});
