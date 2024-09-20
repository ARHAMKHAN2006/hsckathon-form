 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
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
const auth = getAuth()
const db = getFirestore()

let name = document.getElementById("firstname")
let lastname = document.getElementById("lastname")
let email = document.getElementById("email")
let password = document.getElementById("Password")
let cnic = document.getElementById("cnic")
let userType = document.getElementById("userType")


window.register = () =>{


 const obj ={
   name : name.value,
   lastname : lastname.value,
   email : email.value,
   cnic : cnic.value,
   password : password.value,
   userType: userType.value,
 };


   if(userType.value == "admin"){
     console.log("to admin portal")
     createUserWithEmailAndPassword(auth ,obj.email,obj.password)
     .then(async(res)=>{
       console.log(res)
       obj.id = res.user.uid
       const docRef = await addDoc(collection(db, "admin"), obj);
       console.log("Document written with ID: ", docRef.id);
       alert("data regesterd")
   
       signInWithEmailAndPassword(auth,obj.email,obj.password)
       .then(async(res) => {
         console.log(res,"logedIN")
        await  window.location.replace("/pages/adminportal.html")
       })
       .catch((error) => {
         console.log(error)
       })
   
     })
     .catch((error)=>{
       console.log(error)
     })
   
   }else  if(userType.value = "student"){
     console.log("to student portal")
     createUserWithEmailAndPassword(auth ,obj.email,obj.password)
     .then(async(res)=>{
       console.log(res)
       obj.id = res.user.uid
       const docRef = await addDoc(collection(db, "student"), obj);
       console.log("Document written with ID: ", docRef.id);
       alert(" student data regesterd")
       
       signInWithEmailAndPassword(auth,obj.email,obj.password)
       .then(async(res) => {
        await window.location.replace("/pages/studentportal.html")
         console.log(res,"student logedIN")
       })
       .catch((error) => {
         console.log(error)
       })
   
     })
     .catch((error)=>{
       console.log(error)
     })
   }
   console.log(obj)
}