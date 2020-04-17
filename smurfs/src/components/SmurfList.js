import React, { useContext } from "react";
import { SmurfContext } from "../contexts/SmurfContext";
import SmurfCard from "./SmurfCard";

const SmurfList = () => {
  const { smurfs, removeSmurf } = useContext(SmurfContext);
  return (
    <div className="List">
      {console.log(smurfs)}
      {smurfs.map((smurf) => (
        <SmurfCard key={smurf.id} smurf={smurf} removeSmurf={removeSmurf} />
      ))}
    </div>
  );
};

export default SmurfList;
