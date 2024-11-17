import { UserProfile } from "../../entities/userProfile.js"; // Make sure to import your UserProfile class

// Function to handle the profile creation
document.getElementById('submit_create_profile_btn').addEventListener('click', function(event) {
    event.preventDefault();  // Prevent the default form submission (page reload)

    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;

    // Check if all fields are filled
    if (!name || !description) {
        alert('Please fill out all fields');
        return;
    }

    // Log the input data for debugging
    console.log('Name:', name);
    console.log('Description:', description);

    // Create a new UserProfile instance with the input values
    const newProfile = new UserProfile(name, description);

    // Call the createProfile method from the UserProfile class to save data
    newProfile.createProfile().then(success => {
        if (success) {
            alert('Profile created successfully');
            window.location.href = 'viewProfileList.html'; // Redirect to profile list page
        } else {
            alert('Error creating profile');
        }
    }).catch(error => {
        console.error("Error:", error);
        alert("An error occurred while creating the profile. Please try again.");
    });
});

// Optional: Handle Cancel button
document.getElementById('cancel_create_profile_btn').addEventListener('click', function() {
    window.location.href = 'viewProfileList.html'; // Redirect to the profile list page
});
