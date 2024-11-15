import { db } from "../firebaseConfig.js";
import { collection, addDoc } from "firebase/firestore";

async function rateAgent(agentId, rating, reviewText) {
  await addDoc(collection(db, "agentReviews"), { agentId, rating, reviewText, timestamp: Date.now() });
}

export { rateAgent };
