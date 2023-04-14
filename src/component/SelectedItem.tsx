import React from "react";



const SelectedItem:React.FC<{title:string, subtitle:string}> = ({title,subtitle}) => {
  return(
    <div className="ContentSelectedItem u-textCenter">
      <div className="SelectedItem">
        {title}
        
        <p className={subtitle===''?'u-ocultar':''}>{subtitle}</p>

        <span className={subtitle===''?'icon-IcoBorrar':'icon-IcoBorrar Ajuste'}></span>
      </div>
    </div>
  )
}

export default SelectedItem;