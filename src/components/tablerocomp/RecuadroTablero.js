import React, { useState , useEffect } from 'react'
import '../../resources/css/tablero/recuadrotablero.css'

export default function RecuadroTablero({number, color, element, click, colocable, nfichas , fichasColocadas}) {

  const [numFichas , setNumFichas] = useState(0)
  useEffect(()=>{


    if(colocable===undefined){
      setNumFichas(fichasColocadas.get(`${number}`))
      
      
    }

  }
  ,[() => {
    let ret = 0
    for (const nfichas of fichasColocadas.values()) {
      ret += nfichas;
    }
    return ret
  }])

    
    const [fichas , setFichas] = useState(0)
    
  return (
    <div num={number} className={element + ' recuadro ' + color} onClick={() => {click(fichas,setFichas,number)}}>

    <div className='number1'>{number}</div>
    <div>{`${colocable==undefined?(numFichas!=undefined?numFichas:0):''}`}</div>
    

    {/*<div>{`${colocable!=undefined?'':fichas}`}</div>*/ }
    

        
    </div>
  )
}
