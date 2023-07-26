import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

function StartFirebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyAGrHdfb9uovAH0Pu2GS0aRHx74mmTYM_k",
    authDomain: "sahara-blogs.firebaseapp.com",
    databaseURL: "https://sahara-blogs-default-rtdb.firebaseio.com",
    projectId: "sahara-blogs",
    storageBucket: "sahara-blogs.appspot.com",
    messagingSenderId: "442006654255",
    appId: "1:442006654255:web:233ad1dad76dbffceb25da"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  return getDatabase(app);
}

export default StartFirebase;
