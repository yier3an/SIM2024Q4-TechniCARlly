import { doc, setDoc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-storage.js";
import { db } from "../../firebaseConfig.js";  // Import Firestore database instance

export class CarListing {
    constructor(agent, buyer, seller, carListingID, carModel, description, listingName, price, noOfViews, noOfShortlists) {
        this.agent = agent;
        this.buyer = buyer;
        this.seller = seller;
        this.carListingID = carListingID;
        this.carModel = carModel;
        this.description = description;
        this.listingName = listingName;
        this.price = price;
        this.noOfViews = noOfViews;
        this.noOfShortlists = noOfShortlists;
    }

    async createListing(image) {
        try {
            // Upload the image to Firebase Storage
            const storage = getStorage();
            const imageRef = ref(storage, `carImages/${image.name}`);
            await uploadBytes(imageRef, image);

            // Get the image URL
            const imageUrl = await getDownloadURL(imageRef);

            // Create a new document reference with auto-generated ID
            const newListingRef = doc(db, "CarListings", this.carListingID || new Date().getTime().toString());

            // Set the data in Firestore
            await setDoc(newListingRef, {
                agent: this.agent,
                buyer: this.buyer,
                seller: this.seller,
                carListingID: this.carListingID,
                carModel: this.carModel,
                description: this.description,
                listingName: this.listingName,
                price: this.price,
                noOfViews: this.noOfViews,
                noOfShortlists: this.noOfShortlists,
                imageUrl: imageUrl  // Store image URL in Firestore
            });

            console.log("Car listing created:", { carModel: this.carModel, listingName: this.listingName });
            return true;  // Return true if data is written to Firestore successfully
        } catch (error) {
            console.error("Error creating car listing:", error);
            return false;  // Return false if there was an error
        }
    }
}
