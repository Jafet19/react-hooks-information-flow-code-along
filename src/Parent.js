import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childrenColor, setChildrenColor] = useState('#FFF')

  function handleColor(){
    const newRandom = getRandomColor();
    setColor(newRandom)
    setChildrenColor(childrenColor)
  }
  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child onChangeColor={handleColor} color={childrenColor}/>
      <Child onChangeColor={handleColor} color={childrenColor}/>
    </div>
  );
}

export default Parent;
