import { UserProfile } from '../../entities/userProfile.js';

export async function getProfiles() {
    try {
        return await UserProfile.getAllProfiles();
    } catch (error) {
        console.error('Error in ViewProfileController:', error);
        throw error;
    }
}
