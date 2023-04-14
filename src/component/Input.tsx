import React from "react";


function ajustarLabel() {
  let lbl = document.querySelector(".ContentInput label");
  lbl.className="selected";
}

const Input:React.FC<{id:string, title:string}> = ({id,title}) => {
  return(
    <div className="ContentInput u-textCenter" onClick={ajustarLabel}>
      <div>
        <label className='' htmlFor={id}>{title}</label>
        <input
          id={id}
          name={id}
          type="text"
        />
      </div>
    </div>
  )
}

export default Input;