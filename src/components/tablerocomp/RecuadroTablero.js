import React, { useState , useEffect } from 'react'
import '../../resources/css/tablero/recuadrotablero.css'

export default function RecuadroTablero(props) {

  //const [numFichas , setNumFichas] = useState(0)
  
  useEffect(()=>{

    if(props.fichascolocadas instanceof Map){
      console.log(props.fichascolocadas.get(`${props.number}`))
    }
    
    if(props.colocable===undefined){
      //setNumFichas(fichasColocadas.get(`${number}`))
      
      
    }

  }
  ,[() => {
    if(props.fichascolocadas instanceof Map){
      props.fichascolocadas.get(props.number)
    }
    
  }])

    
    //const [fichas , setFichas] = useState(0)
    
  return (
    <div num={props.number} className={props.element + ' recuadro ' + props.color} onClick={() => {props.click(props.number)}}>

    <div className='number1'>{props.number}</div>
    <div>{`${props.colocable==undefined?(props.fichascolocadas!=undefined?props.fichascolocadas.get(`${props.number}`)===undefined?0:props.fichascolocadas.get(`${props.number}`):0):''}`}</div>
    

    {/*<div>{`${colocable!=undefined?'':fichas}`}</div>*/ }
    

        
    </div>
  )
}
