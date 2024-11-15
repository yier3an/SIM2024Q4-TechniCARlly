import { db } from '../../firebaseConfig.js'; // Ensure firebaseConfig is properly set up

// CarListing Entity
export class CarListing {
	static async addCarListing(carID, carName, coeExpiry) {
		try {
			const docRef = await db.collection('CarListing').doc(carID).set({
				CarID: carID,
				CarName: carName,
				'COE Expiry': coeExpiry
			});
			return true;
		} catch (error) {
			console.error('Error adding car listing:', error);
			return false;
		}
	}

	async getCarListing() {
		try {
			const snapshot = await db.collection('CarListing').get();
			const carListings = snapshot.docs.map(doc => doc.data());
			return carListings;
		} catch (error) {
			console.error('Error fetching car listings:', error);
			return [];
		}
	}

	static async deleteCarListing(carID) {
		try {
			await db.collection('CarListing').doc(carID).delete();
			return true;
		} catch (error) {
			console.error('Error deleting car listing:', error);
			return false;
		}
	}
}