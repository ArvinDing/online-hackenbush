import './App.css';
import React from 'react';
import { useState } from "react";

function App() {
  return (
   <svg width="500" height="500" style={{border:"5px solid black"}}>
      <RedSegment/>
    </svg>
  );
}
function RedSegment (){
  const [color, setColor] = useState("rgb(255,0,0)");

  const [seg, setSeg] = useState({
    x: "10",
    y: "20",
    display: true,
  });
  function moreWhite() {
    setColor("rgb(255,200,200)");
  }

  function restoreColor() {
    setColor("rgb(255,0,0)");
  }
  if(!seg.display)
    return (null);
  return (
      <rect width="100" x={seg.x} y={seg.y} height="50" style={{fill:color,strokeWidth:"0",stroke:"rgb(0,0,0)"}}
      onMouseEnter={moreWhite}
      onMouseLeave={restoreColor}  />
    );

}
export default App;
