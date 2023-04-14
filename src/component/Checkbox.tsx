import React from "react";

const Checkbox:React.FC<{id:string, title:string}> = ({id,title}) => {
  return(
    <div className="u-textCenter">
      <input
        id={id}
        name={id}
        type="checkbox"
      />
      <label className='lbCheckbox u-inline-block' htmlFor={id}>{title}</label>
    </div>
  )
}

export default Checkbox;