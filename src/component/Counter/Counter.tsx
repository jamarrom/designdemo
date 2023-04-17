import React, { useState } from "react";
import './Counter.css';

const Counter:React.FC<{id:string, title:string}> = ({id,title}) => {

  const [contador, setContador] = useState(0);
  return(
    <div className="Counter u-textCenter">
        <h2>{title}</h2>

        <div>
          <button
          onClick={(e)=>{
            setContador(contador!==0?contador-1:contador);
          }}
          >-</button>
          <span>{contador}</span>
          <button 
          onClick={(e)=>{
            setContador(contador+1);
          }}>+</button>

          <input
            id={id}
            name={id}
            value={contador}
            type="hidden"
          />
        </div>
    </div>
  )
}

export default Counter;