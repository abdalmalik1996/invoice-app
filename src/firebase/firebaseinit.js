// Import the functions you need from the SDKs you need
// import * as firebase from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbGBvnB-4pjL_G96aWQ63t4714hhPAxDI",
  authDomain: "invoice-app-yt-e0f81.firebaseapp.com",
  databaseURL: "https://invoice-app-yt-e0f81-default-rtdb.firebaseio.com",
  projectId: "invoice-app-yt-e0f81",
  storageBucket: "invoice-app-yt-e0f81.appspot.com",
  messagingSenderId: "484976767123",
  appId: "1:484976767123:web:3de6ab2f4eaa0beb165d66"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();




