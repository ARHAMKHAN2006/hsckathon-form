 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
  // Import the functions you need from the SDKs you need
  import { getFirestore,collection,addDoc,getDocs,doc ,deleteDoc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyAwXwSNjDQvRN1a8B4ozcbiN2XF4RoWIyU",
   authDomain: "hackathon-9df71.firebaseapp.com",
   projectId: "hackathon-9df71",
   storageBucket: "hackathon-9df71.appspot.com",
   messagingSenderId: "847831671187",
   appId: "1:847831671187:web:263dcc8d211019e26b4866",
   measurementId: "G-43X5XQP7FR"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);