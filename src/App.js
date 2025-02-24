import logo from './logo.svg';
import './App.css';
import { useState, useRef, useEffect } from 'react';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUsrO3lFO4gOtbPwULjPOlnUx8cD26xtA",
  authDomain: "teste-2024-2.firebaseapp.com",
  projectId: "teste-2024-2",
  storageBucket: "teste-2024-2.firebasestorage.app",
  messagingSenderId: "846901344466",
  appId: "1:846901344466:web:fa3746c5574c7fb246950b",
  measurementId: "G-90MB5H42YT"
};

function App() {

  useEffect(() => {
    // This runs only on mount (when the component appears)
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    console.log("Oiee");
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hospedando React no Firebase.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
