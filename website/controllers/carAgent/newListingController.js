import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-storage.js";
import { db, storage } from "../../firebaseConfig.js";  // Import Firestore and Storage instances

export async function createListing(carListing, image) {
    try {
        // Upload the image to Firebase Storage
        const imageRef = ref(storage, `carImages/${image.name}`);
        await uploadBytes(imageRef, image);

        // Get the image URL
        const imageUrl = await getDownloadURL(imageRef);

        // If carListingID is not provided, generate it
        const carListingID = carListing.carListingID || new Date().getTime().toString();

        // Create a reference to the document in Firestore
        const carRef = doc(db, "CarListings", carListingID);

        // Set the data for the car listing
        await setDoc(carRef, {
            agent: carListing.agent,
            buyer: carListing.buyer || "", // Default to empty string if not provided
            seller: carListing.seller || "", // Default to empty string if not provided
            carListingID: carListingID,
            carModel: carListing.carModel,
            description: carListing.description,
            listingName: carListing.listingName,
            price: carListing.price,
            noOfViews: carListing.noOfViews || 0,  // Default to 0 if not provided
            noOfShortlists: carListing.noOfShortlists || 0,  // Default to 0 if not provided
            imageUrl: imageUrl // Store the image URL in Firestore
        });

        console.log("Car listing added to database.");
        return true;  // Success
    } catch (error) {
        console.error("Error adding car listing:", error);
        return false;  // Failure
    }
}
