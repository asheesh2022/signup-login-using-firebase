import "./styles.css";
import { useEffect, useState } from "react";
import { app, database } from "./firebaseConfig.js";
import { collection, addDoc } from "firebase/firestore";

export default function App() {
  const [data, setData] = useState({});
  const collectionRef = collection(database, "users");

  const handleInputs = (e) => {
    let inputs = { [e.target.name]: e.target.value };
    setData({ ...data, ...inputs });
  };

  const handleSubmit = () => {
    addDoc(collectionRef, {
      email: data.email,
      password: data.password
    })
      .then(() => {
        alert("data added");
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
