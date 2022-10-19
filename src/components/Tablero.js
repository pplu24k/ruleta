import React, { useEffect, useState } from 'react'
import '../resources/css/tablero/tablero.css'
import RecuadroTablero from './tablerocomp/RecuadroTablero'
export default function Tablero(props) {

const [fichaSeleccionada, setFichaSeeleccionada] = useState(props.fichasel)

useEffect(()=>{

  console.log(props.fichasel)
  

},[props.fichasel])

//const [fichasColocadas, setFichasColocadas] = useState(new Map())

const [fichasTotales,setFichasTotales] = useState(props.mfichas)



function colocarFicha(fichas,setFichas,number){
    
    if(props.mfichas>=props.fichasel){

      let fichasActuales = props.mfichas - props.fichasel

      props.setmfichas(fichasActuales)
      setFichasTotales(fichasActuales)

      let nFichas = parseInt(fichas)+parseInt(props.fichasel); 
      setFichas(nFichas)
  
  
        
      
  
      
      props.establecerFichas(props.fichascolocadas.set(number,nFichas))

    }
    else{
      alert("No tienes suficientes fichas!")
    }
} 

function borrarFichas(){

  console.log(props.mfichas)
  console.log(props.fichasColocadas)

  let fichastot = props.mfichas + props.fichasenjuego

  props.setmfichas(fichastot)
  
  props.establecerFichas(new Map())
  props.cambiarfichasenjuego(0)

}

  function fichasColocadasEn(numero){
    if(props.fichascolocadas.has(numero)){
      console.log(props.fichascolocadas.get(numero))
      return props.fichascolocadas.get(numero)

    }
    return 0
  }



  return (
    <div>
       
        <div className='tablero'>
            <RecuadroTablero element='e00' number='Posibles ganancias' color='gray2' colocable='no'/>
            <RecuadroTablero click={colocarFicha} nfichas={fichasColocadasEn} fichasColocadas={props.fichascolocadas} element='e1-12' number='1-12' color='gray'/>
            <RecuadroTablero click={colocarFicha} nfichas={fichasColocadasEn} fichasColocadas={props.fichascolocadas} element='e13-24' number='13-24' color='gray'/>
            <RecuadroTablero click={colocarFicha} nfichas={fichasColocadasEn} fichasColocadas={props.fichascolocadas} element='e25-36' number='25-36' color='gray'/>
            <RecuadroTablero click={colocarFicha} nfichas={fichasColocadasEn} fichasColocadas={props.fichascolocadas} number='ciruclo' color='gray2' colocable='no'/>
            <RecuadroTablero click={colocarFicha} nfichas={fichasColocadasEn} fichasColocadas={props.fichascolocadas} element='e0' number='0' color='green'/>
            <RecuadroTablero click={colocarFicha} nfichas={fichasColocadasEn} fichasColocadas={props.fichascolocadas} number='3' color='red'/>
            <RecuadroTablero click={colocarFicha} nfichas={fichasColocadasEn} fichasColocadas={props.fichascolocadas} number='6' color='black'/>
            <RecuadroTablero click={colocarFicha} nfichas={fichasColocadasEn} fichasColocadas={props.fichascolocadas} number='9' color='red'/>
            <RecuadroTablero click={colocarFicha} nfichas={fichasColocadasEn} fichasColocadas={props.fichascolocadas} number='12' color='red'/>
            <RecuadroTablero click={colocarFicha} nfichas={fichasColocadasEn} fichasColocadas={props.fichascolocadas} number='15' color='black'/>
            <RecuadroTablero click={colocarFicha} nfichas={fichasColocadasEn} fichasColocadas={props.fichascolocadas} number='18' color='red'/>
            <RecuadroTablero click={colocarFicha} nfichas={fichasColocadasEn} fichasColocadas={props.fichascolocadas} number='21' color='red'/>
            <RecuadroTablero click={colocarFicha} nfichas={fichasColocadasEn} fichasColocadas={props.fichascolocadas} number='24' color='black'/>
            <RecuadroTablero click={colocarFicha} nfichas={fichasColocadasEn} fichasColocadas={props.fichascolocadas} number='27' color='red'/>
            <RecuadroTablero click={colocarFicha} nfichas={fichasColocadasEn} fichasColocadas={props.fichascolocadas} number='30' color='red'/>
            <RecuadroTablero click={colocarFicha} nfichas={fichasColocadasEn} fichasColocadas={props.fichascolocadas} number='33' color='black'/>
            <RecuadroTablero click={colocarFicha} nfichas={fichasColocadasEn} fichasColocadas={props.fichascolocadas} number='36' color='red'/>
            <RecuadroTablero click={colocarFicha} nfichas={fichasColocadasEn} fichasColocadas={props.fichascolocadas} number='2-1' color='gray'/>
            <RecuadroTablero click={colocarFicha} nfichas={fichasColocadasEn} fichasColocadas={props.fichascolocadas} number='2' color='black'/>
            <RecuadroTablero click={colocarFicha} nfichas={fichasColocadasEn} fichasColocadas={props.fichascolocadas} number='5' color='red'/>
            <RecuadroTablero click={colocarFicha} nfichas={fichasColocadasEn} fichasColocadas={props.fichascolocadas} number='8' color='black'/>
            <RecuadroTablero click={colocarFicha} nfichas={fichasColocadasEn} fichasColocadas={props.fichascolocadas} number='11' color='black'/>
            <RecuadroTablero click={colocarFicha} nfichas={fichasColocadasEn} fichasColocadas={props.fichascolocadas} number='14' color='red'/>
            <RecuadroTablero click={colocarFicha} nfichas={fichasColocadasEn} fichasColocadas={props.fichascolocadas} number='17' color='black'/>
            <RecuadroTablero click={colocarFicha} nfichas={fichasColocadasEn} fichasColocadas={props.fichascolocadas} number='20' color='black'/>
            <RecuadroTablero click={colocarFicha} nfichas={fichasColocadasEn} fichasColocadas={props.fichascolocadas} number='23' color='red'/>
            <RecuadroTablero click={colocarFicha} nfichas={fichasColocadasEn} fichasColocadas={props.fichascolocadas} number='26' color='black'/>
            <RecuadroTablero click={colocarFicha} nfichas={fichasColocadasEn} fichasColocadas={props.fichascolocadas} number='29' color='black'/>
            <RecuadroTablero click={colocarFicha} nfichas={fichasColocadasEn} fichasColocadas={props.fichascolocadas} number='32' color='red'/>
            <RecuadroTablero click={colocarFicha} nfichas={fichasColocadasEn} fichasColocadas={props.fichascolocadas} number='35' color='black'/>
            <RecuadroTablero click={colocarFicha} nfichas={fichasColocadasEn} fichasColocadas={props.fichascolocadas} number='2-1' color='gray'/>
            <RecuadroTablero click={colocarFicha} nfichas={fichasColocadasEn} fichasColocadas={props.fichascolocadas} number='1' color='red'/>
            <RecuadroTablero click={colocarFicha} nfichas={fichasColocadasEn} fichasColocadas={props.fichascolocadas} number='4' color='black'/>
            <RecuadroTablero click={colocarFicha} nfichas={fichasColocadasEn} fichasColocadas={props.fichascolocadas} number='7' color='red'/>
            <RecuadroTablero click={colocarFicha} nfichas={fichasColocadasEn} fichasColocadas={props.fichascolocadas} number='10' color='black'/>
            <RecuadroTablero click={colocarFicha} nfichas={fichasColocadasEn} fichasColocadas={props.fichascolocadas} number='13' color='black'/>
            <RecuadroTablero click={colocarFicha} nfichas={fichasColocadasEn} fichasColocadas={props.fichascolocadas} number='16' color='red'/>
            <RecuadroTablero click={colocarFicha} nfichas={fichasColocadasEn} fichasColocadas={props.fichascolocadas} number='19' color='red'/>
            <RecuadroTablero click={colocarFicha} nfichas={fichasColocadasEn} fichasColocadas={props.fichascolocadas} number='22' color='black'/>
            <RecuadroTablero click={colocarFicha} nfichas={fichasColocadasEn} fichasColocadas={props.fichascolocadas} number='25' color='red'/>
            <RecuadroTablero click={colocarFicha} nfichas={fichasColocadasEn} fichasColocadas={props.fichascolocadas} number='28' color='black'/>
            <RecuadroTablero click={colocarFicha} nfichas={fichasColocadasEn} fichasColocadas={props.fichascolocadas} number='31' color='black'/>
            <RecuadroTablero click={colocarFicha} nfichas={fichasColocadasEn} fichasColocadas={props.fichascolocadas} number='34' color='red'/>
            <RecuadroTablero click={colocarFicha} nnfichas={fichasColocadasEn} fichasColocadas={props.fichascolocadas} umber='2-1' color='gray'/>
            <RecuadroTablero click={borrarFichas} number='BORRAR' color='gray2' colocable='no'/>
            <RecuadroTablero click={colocarFicha} nfichas={fichasColocadasEn} fichasColocadas={props.fichascolocadas} element='e1-18' number='1-18' color='gray'/>
            <RecuadroTablero click={colocarFicha} nfichas={fichasColocadasEn} fichasColocadas={props.fichascolocadas} element='epar' number='PAR' color='gray'/>
            <RecuadroTablero click={colocarFicha} nfichas={fichasColocadasEn} fichasColocadas={props.fichascolocadas} element='ered' number='RED' color='gray'/>
            <RecuadroTablero click={colocarFicha} nfichas={fichasColocadasEn} fichasColocadas={props.fichascolocadas} element='eblack' number='BLACK' color='gray'/>
            <RecuadroTablero click={colocarFicha} nfichas={fichasColocadasEn} fichasColocadas={props.fichascolocadas} element='eimpar' number='IMPAR' color='gray'/>
            <RecuadroTablero click={colocarFicha} nfichas={fichasColocadasEn} fichasColocadas={props.fichascolocadas} element='e19-36' number='19-36' color='gray'/>
            <RecuadroTablero click={borrarFichas} number='BORRAR' color='gray2' colocable='no'/>
            

            
        </div>
        

    </div>
    

    
  )
}
