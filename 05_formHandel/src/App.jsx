import React, { useState } from "react";

const App = () => {
  const [first, setfirst] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("form submitted..");
    console.log(first);
    setfirst("");
  };

  let inputHandler = (e) => {
    console.log(e.target.value);
    setfirst(e.target.value);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          autoComplete="off"
          onChange={inputHandler}
          value={first}
        />
        <button>Click</button>
      </form>
    </div>
  );
};

export default App;
