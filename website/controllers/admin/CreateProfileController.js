import { UserProfile } from "../../entities/userProfile";

// Function to create a new profile
export async function createProfile(profileData) {
    try {
        const { name, description } = profileData;

        // Create a new instance of UserProfile
        const newProfile = new UserProfile(name, description);

        // Call the createProfile method from the entity
        const success = await newProfile.createProfile();

        return success;
    } catch (error) {
        console.error("Error creating profile:", error);
        return false;
    }
}
