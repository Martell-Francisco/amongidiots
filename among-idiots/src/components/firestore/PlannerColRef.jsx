import { collection } from "firebase/firestore";
import { db } from "../../firebaseConfig";

export const planCollRef = collection(db, "planner")