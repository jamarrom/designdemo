import React from "react";
import './Checkbox.css';

const Checkbox:React.FC<{id:string, title:string}> = ({id,title}) => {
  return(
    <div className="u-textCenter">
      <input
        id={id}
        name={id}
        type="checkbox"
      />
      <label className='lbCheckbox' htmlFor={id}>{title}</label>
    </div>
  )
}

export default Checkbox;