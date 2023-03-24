import "./styles.css";
import { useEffect, useState } from "react";
import { app } from "./firebaseConfig.js";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function App() {
  let auth = getAuth();
  let google = new GoogleAuthProvider();
  const [data, setData] = useState({});

  const handleInputs = (e) => {
    let inputs = { [e.target.name]: e.target.value };
    setData({ ...data, ...inputs });
  };

  const handleSubmit = () => {
    // createUserWithEmailAndPassword(auth, data.email, data.password)
    signInWithPopup(auth, google)
      // signInWithEmailAndPassword(auth, data.email, data.password)

      .then((response) => {
        console.log(response.user);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className="App">
      <input
        placeholder="Email"
        name="email"
        onChange={(e) => handleInputs(e)}
        type="email"
        className="input"
      />

      <input
        placeholder="password"
        name="password"
        type="password"
        className="input"
        onChange={(e) => handleInputs(e)}
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
