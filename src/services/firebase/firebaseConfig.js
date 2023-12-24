import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBJKlObnw6IFn48z4OfEeEZKw_nDNFq_vE",
    authDomain: "whitemint-pixel-art.firebaseapp.com",
    projectId: "whitemint-pixel-art",
    storageBucket: "whitemint-pixel-art.appspot.com",
    messagingSenderId: "993680858741",
    appId: "1:993680858741:web:c8455ac3aab7bff268623c",
    measurementId: "G-Y43PS0X75N"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);