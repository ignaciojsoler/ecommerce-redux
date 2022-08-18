import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDNz3FUJjN0CbUjhSTAWyJ1XoIY2lPTSWU",
  authDomain: "ecommerce-redux-11472.firebaseapp.com",
  projectId: "ecommerce-redux-11472",
  storageBucket: "ecommerce-redux-11472.appspot.com",
  messagingSenderId: "489910322054",
  appId: "1:489910322054:web:404717b240df447578e207",
  measurementId: "G-JNVQGDYG5T"
};



export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);