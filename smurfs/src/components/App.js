import React, { useState, useEffect } from "react";
import { SmurfContext } from "../contexts/SmurfContext";
import axios from "axios";
import SmurfList from "./SmurfList";
import SmurfForm from "./SmurfForm";
import "./App.css";
const App = () => {
  const [smurfs, setSmurfs] = useState([]);
  const addSmurf = (newSmurf) => {
    setSmurfs([...smurfs, newSmurf]);
  };
  const removeSmurf = (id) => {
    setSmurfs(smurfs.filter((obj) => obj.id != id));
  };
  useEffect(() => {
    axios.get("http://localhost:3333/smurfs").then((res) => {
      console.log(res.data);
      setSmurfs(res.data);
    });
  }, []);
  return (
    <SmurfContext.Provider value={{ removeSmurf, addSmurf, smurfs }}>
      <div className="container">
        <h2>Welcome To Smurf World!</h2>
        <div className="cards">
          <SmurfList />
        </div>
        <SmurfForm />
      </div>
    </SmurfContext.Provider>
  );
};

export default App;
