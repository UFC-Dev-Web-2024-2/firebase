import logo from "./logo.svg";
import "./App.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { useState, useEffect } from "react";
import Login from "./components/Login";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUsrO3lFO4gOtbPwULjPOlnUx8cD26xtA",
  authDomain: "teste-2024-2.firebaseapp.com",
  projectId: "teste-2024-2",
  storageBucket: "teste-2024-2.firebasestorage.app",
  messagingSenderId: "846901344466",
  appId: "1:846901344466:web:fa3746c5574c7fb246950b",
  measurementId: "G-90MB5H42YT",
};

function App() {
  const [appFirebase, setAppFirebase] = useState(null);
  const [auth, setAuth] = useState(null);
  const [provider, setProvider] = useState(null)
  const [analytics, setAnalytics] = useState(null);

  useEffect(() => {

    console.log("Inicializando a configuração Firebase...");
    const app = initializeApp(firebaseConfig);
    setAppFirebase(app);

    console.log("Inicializando o Analytics...");
    setAnalytics(getAnalytics(app));

    console.log("Inicializando a autenticação...");
    setAuth(getAuth(app)); 
    setProvider(new GoogleAuthProvider()); 
   
  }, [appFirebase]);

  return (
    <div className="App">
      <header className="Ap-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hospedando React no Firebase.</p>
        <br/>
        {auth && (<Login auth={auth} provider={provider} />)}
      </header>
    </div>
  );
}

export default App;
