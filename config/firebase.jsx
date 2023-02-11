// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHZ6RHvEuaYfUG9JXjIRgWK-hcEnxfEQ8",
  authDomain: "curso-f876a.firebaseapp.com",
  projectId: "curso-f876a",
  storageBucket: "curso-f876a.appspot.com",
  messagingSenderId: "143594891060",
  appId: "1:143594891060:web:2d7531aa1a4a3fc64e6761",
  measurementId: "G-X3WK084BT4",

  databaseURL: "https://curso-f876a-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export default app;