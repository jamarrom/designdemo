import React from "react";
import './SelectedItem.css';

const SelectedItem:React.FC<{title:string, subtitle:string}> = ({title,subtitle}) => {
  return(
    <div className="ContentSelectedItem u-textCenter">
      <div className="SelectedItem">
        {title}

        {subtitle ? <p>{subtitle}</p> : null}

        <span className={subtitle===''?'icon-IcoBorrar':'icon-IcoBorrar Ajuste'}></span>
      </div>
    </div>
  )
}

export default SelectedItem;