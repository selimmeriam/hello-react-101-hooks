import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
const style={
  colorL:"red",
  fontSize:20
}

function Name() {
  const [name, setName] = useState("Carlos");
  const changeName= ()=>{setName("Sainz")};
  const reset= ()=>{setName("Carlos")};
  return (<div>
    <h1>Hello {name}.</h1>
    <button onClick={changeName}>Change</button>
    <button className="new" onClick={reset }>Reset</button>
   </div> );
}

const el = <Name />; 
ReactDOM.render(
  el, 
  document.getElementById('root')
);