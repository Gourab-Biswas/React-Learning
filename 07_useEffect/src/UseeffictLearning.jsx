import React, { useEffect, useState } from "react";

const UseeffictLearning = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  let aChang=()=>{
console.log("A is changing..");
  }
  let bChang=()=>{
console.log("B is changing..");
  }

  useEffect(()=>{
    // console.log("useEffect is running...");
    aChang()
    
  },[a])
  useEffect(()=>{
    // console.log("useEffect is running...");
    bChang()
    
  },[b])

  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button onClick={() => {
        setA(a+1)
      }}>click A</button>
      <span>-----------</span>
      <button onClick={()=>{
        setB(b-1)
      }}>click B</button>
    </div>
  );
};

export default UseeffictLearning;
