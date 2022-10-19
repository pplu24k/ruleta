
import React, { useEffect, useState } from 'react'
import '../resources/css/ficha.css'
export default function Ficha({number, fichasel, color,click}) {



  const [fichaSeleccionada,setFichaSeleccionada] = useState() 



  


  return (
    <div className={`box-ficha ${color} ${fichasel===number ? 'selected' : ''}` } onClick={() => {click(number,setFichaSeleccionada)}}>
      <div>
        <div className='ficha-centro'>
        
          {number}
        </div>
      </div>

    </div>
  )
}
