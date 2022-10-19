import React, { useState } from 'react'
import { useEffect } from 'react'
import '../resources/css/tirada.css'
import ReactHowler from 'react-howler'
import pitido from '../resources/sound/pitido.mp3'
export default function TirarBola(props) {

    
    const [tirada, setTirada] = useState('No hay tirada')
    const [cuenta, setCuenta] = useState(6);
    const [botpresionado, setbotpresionado] = useState(false)
    const [styleTirada , setStyleTirada] = useState({
      backgroundColor : 'brown',
      color: 'white',
      width: '50px',
      height: '50px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    })
    const [reproducirsonido,setreproducirsonido] = useState(false)

    

      
    const hacerTirada = () => {



      let numConseguido = parseInt(Math.random() * 36)
      
      let colorfondo = props.resultados[numConseguido][1] 
      

      setStyleTirada(
        {
          backgroundColor : colorfondo,
          color: 'white',
          width: '50px',
          height: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }
      )
      

      setTirada(numConseguido)

      

    }

    useEffect(() => {


      if(botpresionado===true){
        if(cuenta===0){
          setCuenta(5)
        }
        const myInterval = setInterval(() => {


            

          setCuenta((prevTime) => {

            if(prevTime - 1 != 0){
              //setreproducirsonido(false)
              //setreproducirsonido(true)
              return prevTime - 1
            } 
            else{
              
              setbotpresionado(false)
              hacerTirada()
              clearInterval(myInterval)

              return 0
            }
          });
        }, 1000);
        // clear out the interval using the id when unmounting the component
        return () => clearInterval(myInterval);
      }
    }, [botpresionado]);

    useEffect(() => {

      props.setresultadotirada(tirada)
      

    },[tirada])
  



  return (
    <div className='box-tirada'>
        <div className='resultado'>
          <h1 style={cuenta===0?styleTirada:{}}>
            {cuenta!=0?(cuenta===6?'Realizar tirada':cuenta):tirada}
            
          </h1>
          <audio controls>
            <source src={pitido} type='audio/mpeg'></source>
          </audio>
          <ReactHowler src={pitido} playing={reproducirsonido}/>
        </div>
        <button className='boton' onClick={() => setbotpresionado(true)}>Tirar bola</button>
       
        
    </div>
  )
}

