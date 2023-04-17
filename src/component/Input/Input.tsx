import React, { useState } from "react";
import './Input.css';

const Input:React.FC<{id:string, title:string}> = ({id,title}) => {

  const [isinputFocused, setIsInputFocused] = useState(false);

  return(
    <div className="ContentInput u-textCenter">
      <div>
        <label className={isinputFocused? "selected" : ""} htmlFor={id}>{title}</label>
        <input
          id={id}
          name={id}
          type="text"
          onFocus={(e)=>{
            setIsInputFocused(true);
          }}
          onBlur={
            (e)=>{
              setIsInputFocused(false);
            }
          }
        />
      </div>
    </div>
  )
}

export default Input;