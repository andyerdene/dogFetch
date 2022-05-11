import React, { useState } from "react";
import { getAllDogs, getOneDog } from "./API/services";

function App() {
  const [dogs, setDogs] = useState();
  const [imgUrl, setImgUrl] = useState("");

  function handler() {
    getAllDogs().then((res) => {
      setDogs(Object.keys(res.data.message));
    });
  }

  function changeHandler(e) {
    console.log(e.target.value);
    getOneDog(e.target.value)
      .then((e) => e.json())
      .then((res) => setImgUrl(res.message));
  }
  const style = {
    margin: "auto",
    width: "100vw",
    height: "100vh",
  };
  return (
    <div style={style}>
      {dogs ? (
        <>
          <select onChange={changeHandler}>
            {dogs.map((dog, index) => (
              <option key={index} value={dog}>
                {dog}
              </option>
            ))}
          </select>
          <img src={imgUrl} alt="" />
        </>
      ) : (
        <button onClick={handler}>Fetch</button>
      )}
    </div>
  );
}

export default App;
