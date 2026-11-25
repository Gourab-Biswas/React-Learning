import React, { useState } from "react";

const App = () => {
  const [title, settitle] = useState("");
  const [details, setdetails] = useState("");
  const [task, settask] = useState([])

  let submitHandler = (e) => {
    e.preventDefault();
    console.log("form Submitted...");
    console.log("title:",title)
    console.log("Details:",details)
    const newArr = [...task]
    newArr.push({title,details})
    settask(newArr)
    console.log(task);
    settitle('')
    setdetails('')
    
  };

  return (
    <div className="app">
      <div className="input-fields">
        <form onSubmit={submitHandler}>
        <h1>Write Your Notes</h1>
          <input type="text" 
           autoComplete="off"
           value={title}
           onChange={(e)=>{
            settitle(e.target.value)
          }} />
          <textarea
            name=""
            id=""
            value={details}
            onChange={(e)=>{
              setdetails(e.target.value)
            }}
          ></textarea>
          <button>ADD NOTES</button>
        </form>
      </div>
      <div className="recent-fields">
        <h1>Recent Notes</h1>
        <div className="cards">
          {task.map((elem,idx)=>{

            return <div key={idx} className="card">
            <h2>{elem.title}</h2>
            <p>{elem.details}</p>
            <button onClick={(e)=>{
              console.log(idx)
              const newArr  = [...task]
              newArr.splice(idx,1)
              settask(newArr)
            }}>X</button>
          </div>
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
