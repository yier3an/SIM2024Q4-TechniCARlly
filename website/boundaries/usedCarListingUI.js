// usedCarListing.js
document.addEventListener("DOMContentLoaded", () => {
    displayUsedCarListings();
});

function displayUsedCarListings() {
    // Dummy data for demonstration
    const usedCars = [
        { model: "Toyota Camry", year: 2018, price: "$15,000" },
        { model: "Honda Accord", year: 2019, price: "$17,000" },
        { model: "Ford Focus", year: 2020, price: "$13,500" }
    ];

    const listingContainer = document.getElementById("listingContainer");
    usedCars.forEach(car => {
        const carElement = document.createElement("div");
        carElement.classList.add("car-listing");
        carElement.innerHTML = `
            <h3>${car.model}</h3>
            <p>Year: ${car.year}</p>
            <p>Price: ${car.price}</p>
        `;
        listingContainer.appendChild(carElement);
    });
}
