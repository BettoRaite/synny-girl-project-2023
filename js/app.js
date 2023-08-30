import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDhAEmO_nAOYj2QiSfPFbAewnIGQC2DJAs",
  authDomain: "sunny-girl-2023.firebaseapp.com",
  projectId: "sunny-girl-2023",
  storageBucket: "sunny-girl-2023.appspot.com",
  messagingSenderId: "456943435190",
  appId: "1:456943435190:web:2d2bade0c23563943b5517",
  measurementId: "G-EJ604P7X21",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
