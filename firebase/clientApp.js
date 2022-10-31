import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";
import "firebase/auth"

const clientCredientials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
}

const firebase = initializeApp(clientCredientials);
export const firebaseAuth = getAuth(firebase);
export default firebase;
