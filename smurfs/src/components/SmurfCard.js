import React from "react";

const SmurfCard = (props) => {
  console.log({ props });

  return (
    <div className="card">
      <h1>{props.smurf.name}</h1>
      <h3>Age: {props.smurf.age}</h3>
      <h3>Height: {props.smurf.height}</h3>
      <button
        className="remove"
        onClick={() => props.removeSmurf(props.smurf.id)}
      >
        X
      </button>
    </div>
  );
};
export default SmurfCard;
