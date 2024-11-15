import { UserProfile } from "../../entities/userProfile.js";  // Import the UserProfile class

// Function to load profiles dynamically
export async function loadProfiles() {
    try {
        const profileTableBody = document.querySelector("#profileList table tbody");

        // Fetch all profiles from Firestore
        const profiles = await UserProfile.getAllProfiles();

        // Clear table body before adding new rows
        profileTableBody.innerHTML = "";

        // Loop through profiles and populate the table
        profiles.forEach(profile => {
            const row = document.createElement("tr");

            // Add username (name)
            const usernameCell = document.createElement("td");
            usernameCell.textContent = profile.name;
            row.appendChild(usernameCell);

            // Add description
            const descriptionCell = document.createElement("td");
            descriptionCell.textContent = profile.description;
            row.appendChild(descriptionCell);

            // Add Edit button
            const editCell = document.createElement("td");
            const editButton = document.createElement("button");
            editButton.textContent = "Edit";
            editButton.onclick = () => {
                // Redirect to editProfile.html with the profile ID in the query string
                window.location.href = `editProfile.html?profileId=${profile.name}`;
            };
            editCell.appendChild(editButton);
            row.appendChild(editCell);

            // Append the row to the table body
            profileTableBody.appendChild(row);
        });

        console.log("Profiles loaded successfully!");
    } catch (error) {
        console.error("Error loading profiles:", error);
        alert("Failed to load profiles.");
    }
}
