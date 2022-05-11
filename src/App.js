import React, { useState } from "react";
import { getAllDogs } from "./API/services";

function App() {
  const [dogs, setDogs] = useState();

  function handler() {
    getAllDogs().then((res) => {
      console.log(res.data);
      setDogs(Object.keys(res.data.message));
    });
  }

  function changeHandler(e) {
    console.log(e.target.value);
  }
  return (
    <div>
      <button onClick={handler}>click me</button>
      {/* 
      {dogs &&
        dogs.map((dogName, index) => {
          return <h3 key={index}>{dogName}</h3>;
        })} */}
      <select onChange={changeHandler}>
        <option value={"1"}>one</option>
        <option value={"2"}>two</option>
        <option value={"3"}>three</option>
      </select>
    </div>
  );
}

export default App;
