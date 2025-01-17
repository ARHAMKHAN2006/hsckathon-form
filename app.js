
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
  let StudentCourse = document.getElementById("StudentCourse")
  let StudentID = document.getElementById("StudentID")
  let MARKS = document.getElementById("MARKS")
  let TOTALMARKS = document.getElementById("TOTALMARKS")
  let GRADE = document.getElementById("GRADE")
 
  
  // getData function
 
 
  window.getstudentdata = async()=> {
   const querySnapshot = await getDocs(collection(db, "student"));
   let arr = [];
   querySnapshot.forEach((doc) => {
     const obj = {
       id: doc.id,
       ...doc.data(),
     };
     arr.push(obj)
     // table.innerHTML = "";
     console.log(doc.id, " => ", doc.data());
     table.innerHTML += `
        <tbody>
           <tr>
           <td>${obj.name}</td>
           <td>${obj.lastname}</td>
           <td>${obj.email}</td>
           <td>${obj.cnic}</td>
           <td>${obj.userType}</td>
           </tr>
        </tbody>
          <button id="${obj.id}" class="btn btn-primary btn-sm" onclick="editdata(this)">deleteData</button>
     `;
   });
 
 
   // console.log(obj)
 
  }
 
 //  ---------------------------------------------------------------------------------------------------------------------------------------
 
 // -----------------------------------------------------------------------------------------------------------------------------------------
 
 //uploadData function
 
 window.uploadData = async()=>{
    let marks = Number(MARKS.value)
    let totalmarks = Number(TOTALMARKS.value)
    //  console.log(marks)
    
    const sum = marks / totalmarks * 100;
    console.log(sum)
    
 
    GRADE.innerHTML =  `
     <p>${sum}%</p>
     `
 
     let obj = {
     StudentCourse : StudentCourse.value,
     StudentID : StudentID.value,
     MARKS : marks,
     TOTALMARKS : totalmarks,
      GRADE : sum
 
     }
     
     const docRef = await addDoc(collection(db, "studentdataUploadedbyadmin"), obj);
     console.log("Document written with ID: ", docRef.id);
     alert("data regesterd")
     
   }
   
   //-------------------------------------------------------------------------------------------------------------------------------------------
   
   // getUploadedata function
   window.GetuploadedData = async() =>{
     const querySnapshot = await getDocs(collection(db, "studentdataUploadedbyadmin"));
     let arr = [];
     // upload.innerHTML = "";
     querySnapshot.forEach((doc) => {
       const obj = {
         id: doc.id,
         ...doc.data(),
       };
       arr.push(obj)
       console.log(doc.id, " => ", doc.data());
       upload.innerHTML += `
       <tbody>
       <tr>
       <td>${obj.StudentCourse}</td>
           <td>${obj.id}</td>
           <td>${obj.MARKS}</td>
           <td>${obj.TOTALMARKS}</td>
           <td>${obj.GRADE}%</td>
           </tr>
        </tbody>
        <button id="${obj.id}" class="btn btn-primary btn-sm" onclick="deletdata(this)">deleteData</button>
        `;
     console.log(obj)
     
   });
   
   
 }
 
 
 
 //deleteData function
 
  window.deletdata = async (ele) => {
   console.log("delete");
   await deleteDoc(doc(db, "student", ele.id));
   getstudentdata()
 };
 
 
 window.deletdata = async (ele) => {
   console.log("delete");
   await deleteDoc(doc(db, "studentdataUploadedbyadmin", ele.id));
   GetuploadedData(); 