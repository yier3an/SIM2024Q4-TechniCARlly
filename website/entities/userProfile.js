import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

// Firebase instance
const db = getFirestore();

export class UserProfile {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }

    // Create Profile Method
    async createProfile() {
        try {
            // Save profile details to Firestore
            const newProfileRef = doc(db, "UserProfiles", this.name);  // Use a unique identifier, e.g., name or auto-generated ID
            await setDoc(newProfileRef, {
                name: this.name,
                description: this.description
            });

            console.log("Profile created:", { name: this.name, description: this.description });
            return true;  // Return true if profile creation was successful
        } catch (error) {
            console.error("Error creating profile:", error);
            return false;  // Return false if there was an error
        }
    }

    // Get all profiles
    static async getAllProfiles() {
        try {
            // Get all profiles from the "UserProfiles" collection
            const querySnapshot = await getDocs(collection(db, "UserProfiles"));
            const profiles = [];

            // Loop through the documents and extract profile data
            querySnapshot.forEach((doc) => {
                profiles.push(doc.data());
            });

            return profiles;  // Return the array of profiles
        } catch (error) {
            console.error("Error fetching profiles:", error);
            return [];  // Return an empty array in case of an error
        }
    }
}
