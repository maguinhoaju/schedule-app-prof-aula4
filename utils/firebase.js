// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, updateDoc, doc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyADCQ3jskLAXR4X19i0-J1vT5R32bOQYGQ",
    authDomain: "my-schedule-app-5a2a3.firebaseapp.com",
    projectId: "my-schedule-app-5a2a3",
    storageBucket: "my-schedule-app-5a2a3.appspot.com",
    messagingSenderId: "611024142647",
    appId: "1:611024142647:web:9f4de43cbb6a9d1edfdab2",
    measurementId: "G-T1F7ZHZGP0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Utility functions to interact with Firestore
export const addTaskToFirestore = async (task) => {
  try {
    const docRef = await addDoc(collection(db, "tasks"), task);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getTasksFromFirestore = async () => {
  const querySnapshot = await getDocs(collection(db, "tasks"));
  return querySnapshot.docs.map(doc => doc.data());
};